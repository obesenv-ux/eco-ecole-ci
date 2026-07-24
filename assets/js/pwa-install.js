// ========================================================
// SCRIPT INTERACTIF D'INSTALLATION PWA TOUS APPAREILS
// (Windows, Mac, Android, iPhone, Linux)
// ========================================================

let deferredPwaPrompt = null;

// 1. Capture de l'événement natif d'installation Chrome / Edge / Android / Windows
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPwaPrompt = e;
    console.log('✅ Invite d\'installation PWA prête !');
});

// 2. Enregistrement du Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('✅ Service Worker ECO-ÉCOLE actif :', reg.scope))
            .catch(err => console.log('⚠️ Erreur Service Worker :', err));
    });
}

// 3. Fonction principale appelée par les boutons "📲 App Mobile"
function installerApplicationPWA() {
    if (deferredPwaPrompt) {
        deferredPwaPrompt.prompt();
        deferredPwaPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('✅ Application installée sur l\'appareil avec succès !');
            }
            deferredPwaPrompt = null;
        });
    } else {
        afficherModalInstallationPWA();
    }
}

// 4. Modale explicative multi-appareils (Android, iOS Safari, Windows Chrome/Edge)
function afficherModalInstallationPWA() {
    let modal = document.getElementById('modal-install-pwa');
    if (!modal) {
        const modalDiv = document.createElement('div');
        modalDiv.id = 'modal-install-pwa';
        modalDiv.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4';
        modalDiv.onclick = function(e) { if(e.target === this) fermerModalPWA(); };
        modalDiv.innerHTML = `
            <div class="bg-white max-w-md w-full rounded-3xl p-6 shadow-2xl text-center space-y-5 relative">
                <button onclick="fermerModalPWA()" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold flex items-center justify-center">✕</button>
                <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl mx-auto border border-emerald-200 shadow-sm">
                    💻📱
                </div>
                <div>
                    <h3 class="text-xl font-black text-gray-800">Installer ECO-ÉCOLE CI</h3>
                    <p class="text-xs text-gray-500 mt-1">Installez l'application sur le bureau de votre ordinateur ou l'écran de votre téléphone !</p>
                </div>
                <div class="bg-gray-50 p-4 rounded-2xl text-left space-y-3 text-xs border border-gray-100 font-bold text-gray-700">
                    <p class="flex items-start"><span class="bg-emerald-600 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-black mr-2.5 flex-shrink-0 mt-0.5">1</span> <span><strong>Sur Ordinateur (Windows / Mac) :</strong> Cliquez sur le bouton d'installation <strong>⊕</strong> situé dans la barre d'adresse en haut de votre navigateur, ou faites <i>Menu ➔ Installer ECO-ÉCOLE CI</i>.</span></p>
                    <p class="flex items-start"><span class="bg-emerald-600 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-black mr-2.5 flex-shrink-0 mt-0.5">2</span> <span><strong>Sur Téléphone (Android / iPhone) :</strong> Appuyez sur le menu (<strong>⋮</strong> ou <strong>⎋</strong>) puis choisissez <strong>« Ajouter à l'écran d'accueil »</strong>.</span></p>
                </div>
                <button onclick="lancerPromptPWANatif()" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm py-3.5 rounded-xl shadow-md transition-all">
                    DÉMARRER L'INSTALLATION 📲
                </button>
            </div>
        `;
        document.body.appendChild(modalDiv);
        modal = modalDiv;
    }
    modal.classList.remove('hidden');
}

function fermerModalPWA() {
    const modal = document.getElementById('modal-install-pwa');
    if (modal) modal.classList.add('hidden');
}

function lancerPromptPWANatif() {
    if (deferredPwaPrompt) {
        deferredPwaPrompt.prompt();
    } else {
        alert("💻 Sur Ordinateur : Cliquez sur l'icône ⊕ dans la barre d'adresse en haut du navigateur !\n📱 Sur Téléphone : Choisissez 'Ajouter à l'écran d'accueil' dans le menu.");
        fermerModalPWA();
    }
}
