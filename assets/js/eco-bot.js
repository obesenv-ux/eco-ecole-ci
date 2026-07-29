// ==========================================
// ECO-BOT IA - Moteur sémantique, d'Intention & Correction Floue v3.0
// ==========================================

const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

console.log("ECO-BOT 3.0 IA: Prêt et connecté à la base de connaissances ! 🌱");

// 1. Dictionnaire de corrections orthographiques & synonymes courants
const dictionnaireFautes = {
    "coment": "comment",
    "comen": "comment",
    "cmnt": "comment",
    "porquoi": "pourquoi",
    "pourqoi": "pourquoi",
    "pk": "pourquoi",
    "pka": "pourquoi",
    "cquoi": "qu'est-ce que",
    "kestce": "qu'est-ce que",
    "kess": "qu'est-ce que",
    "kest": "qu'est-ce que",
    "cest": "c'est",
    "quest": "qu'est",
    "recycley": "recycler",
    "récycler": "recycler",
    "recicler": "recycler",
    "recyclage": "recycler",
    "dechet": "déchet",
    "dechets": "déchets",
    "ordure": "ordures",
    "ordures": "ordures",
    "polution": "pollution",
    "polusion": "pollution",
    "econome": "économiser",
    "economi": "économiser",
    "economiser": "économiser",
    "elec": "électricité",
    "eau": "eau",
    "bouteil": "bouteille",
    "bouteie": "bouteille",
    "odd": "odd",
    "odds": "odd",
    "compostage": "compost",
    "poubelle": "bacs",
    "poubelles": "bacs"
};

// 2. Mots vides (Stopwords) n'apportant pas de valeur thématique forte
const stopWords = [
    "le", "la", "les", "un", "une", "des", "du", "de", "d", "l", "ce", "cet", "cette",
    "ces", "mon", "ton", "son", "notre", "votre", "leur", "et", "ou", "mais", "dans",
    "en", "sur", "sous", "par", "pour", "avec", "sans", "est", "sont", "nous", "vous",
    "fait", "faire", "peut", "peux", "qu", "que", "quoi", "quest", "kest", "kess", "cquoi",
    "quel", "quelle", "quels", "quelles", "comment", "pourquoi", "quand", "ou"
];

// Mots clés prioritaires de l'écologie (Bonus)
const motsClesCruciaux = [
    "recycler", "compost", "eau", "odd", "arbres", "arbre", "foret", "forets",
    "pollution", "plastique", "tri", "bacs", "dechets", "dechet", "electricite", "energie",
    "climat", "rechauffement", "biodiversite", "nature", "eco-citoyen", "3r", "fuite",
    "cantine", "college", "ecole"
];

// 3. Calcul de distance Levenshtein pour tolérance aux fautes
function distanceLevenshtein(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function similitudeMots(w1, w2) {
    if (w1 === w2) return 1.0;
    if (w1.includes(w2) || w2.includes(w1)) return 0.85;
    const dist = distanceLevenshtein(w1, w2);
    const maxLen = Math.max(w1.length, w2.length);
    if (maxLen === 0) return 1.0;
    return 1 - (dist / maxLen);
}

// 4. Nettoyage et normalisation de phrase
function nettoyerEtNormaliser(texte) {
    let brut = texte.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[.,?!'"]/g, " ");

    let mots = brut.split(/\s+/).filter(m => m.length > 1);
    mots = mots.map(m => dictionnaireFautes[m] || m);
    return mots;
}

// 5. Détection de l'Intention (HOW / WHY / WHAT / NUMBER / GREETING)
function determinerIntention(texteBrut) {
    const txt = texteBrut.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/['"-]/g, " ");

    if (txt.includes("comment") || txt.includes("cmnt") || txt.includes("coment") || txt.includes("methode") || txt.includes("etapes") || txt.includes("comment faire")) {
        return "HOW";
    }
    if (txt.includes("pourquoi") || txt.includes("pourqoi") || txt.includes("porquoi") || txt.includes("pk") || txt.includes("raison") || txt.includes("interet")) {
        return "WHY";
    }
    if (txt.includes("qu est") || txt.includes("quest") || txt.includes("c est quoi") || txt.includes("c quoi") || txt.includes("kestce") || txt.includes("kess") || txt.includes("definition") || txt.includes("signifie") || txt.includes("quel") || txt.includes("quelle")) {
        return "WHAT";
    }
    if (txt.includes("combien") || txt.includes("nombre")) {
        return "NUMBER";
    }
    if (txt.includes("salut") || txt.includes("bonjour") || txt.includes("qui es tu") || txt.includes("t appelles") || txt.includes("tappelles")) {
        return "WHO";
    }
    return "ANY";
}

// 6. Algorithme d'IA de recherche intelligente
function trouverMeilleureReponse(messageUtilisateur) {
    const motsU = nettoyerEtNormaliser(messageUtilisateur);
    const motsFiltresU = motsU.filter(m => !stopWords.includes(m));
    const intentionU = determinerIntention(messageUtilisateur);

    let meilleureReponse = null;
    let scoreMax = 0;

    if (motsFiltresU.length === 0) {
        return "Pose-moi une question sur l'environnement, le tri des déchets, l'eau ou les gestes éco-citoyens ! 🌱";
    }

    baseDeConnaissances.forEach(item => {
        const motsQ = nettoyerEtNormaliser(item.question);
        const motsFiltresQ = motsQ.filter(m => !stopWords.includes(m));
        const intentionQ = determinerIntention(item.question);

        let score = 0;

        // Alignment d'intention (Bonus / Pénalité légère)
        if (intentionU !== "ANY") {
            if (intentionQ === intentionU) {
                score += 5;
            } else if (intentionQ !== "ANY") {
                score -= 1;
            }
        }

        // Correspondance des mots clés
        motsFiltresU.forEach(motU => {
            let meilleurMatchPoint = 0;
            motsFiltresQ.forEach(motQ => {
                const sim = similitudeMots(motU, motQ);
                if (sim >= 0.82) {
                    let pts = 4;
                    if (motsClesCruciaux.includes(motU) || motsClesCruciaux.includes(motQ)) {
                        pts += 6;
                    }
                    if (pts > meilleurMatchPoint) meilleurMatchPoint = pts;
                }
            });
            score += meilleurMatchPoint;
        });

        if (score > scoreMax) {
            scoreMax = score;
            meilleureReponse = item.reponse;
        }
    });

    if (scoreMax < 5 || !meilleureReponse) {
        return "Je n'ai pas compris exactement ta question. Essaye par exemple : <br>• <em>Comment recycler les déchets ?</em><br>• <em>Pourquoi économiser l'eau ?</em><br>• <em>C'est quoi les 17 ODD ?</em> 🌿";
    }

    return meilleureReponse;
}

// 7. Fonction d'envoi automatique via boutons de suggestions
function poserQuestion(texte) {
    if (!userInput) return;
    userInput.value = texte;
    traiterMessage();
}

// 8. Affichage des messages
function ajouterMessage(texte, expediteur) {
    const div = document.createElement('div');
    div.classList.add('flex', 'items-end', 'mb-4', 'animate-fade-in');

    if (expediteur === 'bot') {
        const avatarLocal = localStorage.getItem('ecobot_avatar') || 'assets/img/533fde1a-3bab-46c6-bf78-ba093a0a34ea.jpg';
        div.innerHTML = `
            <img src="${avatarLocal}" alt="Mascotte IA Éco-Bot" class="w-10 h-10 rounded-full object-cover mr-3 shadow-md border-2 border-white flex-shrink-0 animate-pulse">
            <div class="bg-white border border-gray-100 p-4 rounded-2xl rounded-bl-none text-base text-gray-700 shadow-sm max-w-[85%] font-medium leading-relaxed">
                ${texte}
            </div>
        `;
    } else {
        div.classList.add('justify-end');
        div.innerHTML = `
            <div class="bg-gray-800 p-4 rounded-2xl rounded-br-none text-base text-white shadow-sm max-w-[85%] font-medium mr-3 leading-relaxed">
                ${texte}
            </div>
            <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg font-bold shadow-md border-2 border-white flex-shrink-0">👤</div>
        `;
    }
    
    chatContainer.appendChild(div);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 9. Déclenchement du traitement
function traiterMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    ajouterMessage(message, 'user');
    userInput.value = '';

    // Effet d'attente IA court
    setTimeout(() => {
        const reponse = trouverMeilleureReponse(message);
        ajouterMessage(reponse, 'bot');
    }, 400);
}

if (sendBtn) sendBtn.addEventListener('click', traiterMessage);
if (userInput) {
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') traiterMessage();
    });
}
