/**
 * ECO-ÉCOLE CI - Compteur de Visiteurs en Temps Réel (Réel & Discret)
 * Comptage réel basé sur Firestore & localStorage à partir de 0.
 */

(function () {
    const STORAGE_KEY_VISITED_SESSION = 'eco_visited_session';
    const STORAGE_KEY_VISITED_EVER = 'eco_visited_ever';
    const STORAGE_KEY_LOCAL_STATS = 'eco_local_visitor_stats';

    // Compteur RÉEL : démarre à 0 (aucune valeur factice)
    const defaultStats = {
        total_visites: 0,
        visiteurs_uniques: 0,
        visites_aujourdhui: 0,
        derniere_date: new Date().toISOString().split('T')[0]
    };

    function getTodayString() {
        return new Date().toISOString().split('T')[0];
    }

    function loadLocalStats() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_LOCAL_STATS);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed.derniere_date !== getTodayString()) {
                    parsed.visites_aujourdhui = 0;
                    parsed.derniere_date = getTodayString();
                }
                return parsed;
            }
        } catch (e) {
            console.warn("Compteur: Erreur lecture stats locales", e);
        }
        return { ...defaultStats };
    }

    function saveLocalStats(stats) {
        try {
            localStorage.setItem(STORAGE_KEY_LOCAL_STATS, JSON.stringify(stats));
        } catch (e) {
            console.warn("Compteur: Erreur sauvegarde stats locales", e);
        }
    }

    function updateDOM(stats) {
        const totalEls = document.querySelectorAll('.visitor-counter-total, #visitor-counter-total');
        const uniqueEls = document.querySelectorAll('.visitor-counter-uniques, #visitor-counter-uniques');
        const todayEls = document.querySelectorAll('.visitor-counter-today, #visitor-counter-today');

        totalEls.forEach(el => {
            el.textContent = (stats.total_visites || 0).toLocaleString('fr-FR');
        });

        uniqueEls.forEach(el => {
            el.textContent = (stats.visiteurs_uniques || 0).toLocaleString('fr-FR');
        });

        todayEls.forEach(el => {
            el.textContent = (stats.visites_aujourdhui || 0).toLocaleString('fr-FR');
        });
    }

    async function initVisitorCounter() {
        let stats = loadLocalStats();
        const isNewSession = !sessionStorage.getItem(STORAGE_KEY_VISITED_SESSION);
        const isNewUser = !localStorage.getItem(STORAGE_KEY_VISITED_EVER);
        const todayStr = getTodayString();

        if (isNewSession) {
            stats.total_visites += 1;
            sessionStorage.setItem(STORAGE_KEY_VISITED_SESSION, 'true');

            if (stats.derniere_date === todayStr) {
                stats.visites_aujourdhui += 1;
            } else {
                stats.visites_aujourdhui = 1;
                stats.derniere_date = todayStr;
            }
        }

        if (isNewUser) {
            stats.visiteurs_uniques += 1;
            localStorage.setItem(STORAGE_KEY_VISITED_EVER, 'true');
        }

        saveLocalStats(stats);
        updateDOM(stats);

        // Synchronisation Firestore Réelle
        if (typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length > 0) {
            try {
                const db = firebase.firestore();
                const counterRef = db.collection("statistiques").doc("compteur_visiteurs");

                if (isNewSession || isNewUser) {
                    db.runTransaction(async (transaction) => {
                        const sfDoc = await transaction.get(counterRef);
                        if (!sfDoc.exists) {
                            transaction.set(counterRef, {
                                total_visites: stats.total_visites,
                                visiteurs_uniques: stats.visiteurs_uniques,
                                visites_aujourdhui: stats.visites_aujourdhui,
                                derniere_date: todayStr
                            });
                        } else {
                            const data = sfDoc.data();
                            let newTotal = (data.total_visites || 0) + (isNewSession ? 1 : 0);
                            let newUniques = (data.visiteurs_uniques || 0) + (isNewUser ? 1 : 0);
                            let newToday = data.derniere_date === todayStr ? (data.visites_aujourdhui || 0) + (isNewSession ? 1 : 0) : 1;

                            transaction.update(counterRef, {
                                total_visites: newTotal,
                                visiteurs_uniques: newUniques,
                                visites_aujourdhui: newToday,
                                derniere_date: todayStr
                            });
                        }
                    }).catch(err => {
                        console.warn("Compteur: Note transaction Firestore:", err);
                    });
                }

                counterRef.onSnapshot((doc) => {
                    if (doc.exists) {
                        const firestoreStats = doc.data();
                        saveLocalStats(firestoreStats);
                        updateDOM(firestoreStats);
                    }
                }, (error) => {
                    console.warn("Compteur Firestore live:", error);
                });

            } catch (e) {
                console.warn("Compteur: Initialisation Firestore", e);
            }
        }
    }

    window.VisitorCounter = {
        init: initVisitorCounter,
        getStats: loadLocalStats,
        updateDOM: updateDOM
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVisitorCounter);
    } else {
        initVisitorCounter();
    }
})();
