// ==========================================
// GESTION DE L'INTERFACE (UI)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Récupération des éléments HTML
    const btnSignalement = document.getElementById('btn-signalement');
    const modalSignalement = document.getElementById('modal-signalement');
    const btnFermerModal = document.getElementById('btn-fermer-modal');

    // 2. Fonction pour ouvrir la modale
    btnSignalement.addEventListener('click', () => {
        modalSignalement.classList.remove('hidden');
        // Petite astuce pour l'animation d'apparition
        setTimeout(() => {
            modalSignalement.firstElementChild.classList.remove('scale-95');
            modalSignalement.firstElementChild.classList.add('scale-100');
        }, 10);
    });

    // 3. Fonction pour fermer la modale (avec la croix)
    btnFermerModal.addEventListener('click', fermerModal);

    // 4. Fermer la modale si on clique à l'extérieur du bloc blanc
    modalSignalement.addEventListener('click', (e) => {
        if (e.target === modalSignalement) {
            fermerModal();
        }
    });

    function fermerModal() {
        modalSignalement.firstElementChild.classList.remove('scale-100');
        modalSignalement.firstElementChild.classList.add('scale-95');
        setTimeout(() => {
            modalSignalement.classList.add('hidden');
        }, 200); // Attend la fin de l'animation pour cacher
    }
});