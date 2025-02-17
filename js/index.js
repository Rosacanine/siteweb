document.addEventListener('DOMContentLoaded', function() {

    // Code pour le menu
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    let timeoutId;

    // Fonction pour afficher le menu
    function showMenu() {
        nav.classList.add('show-menu');
    }

    // Fonction pour cacher le menu
    function hideMenu() {
        timeoutId = setTimeout(() => {
            nav.classList.remove('show-menu');
        }, 600); // Délai de 600ms avant de cacher le menu
    }

    // Affiche le menu au clic sur l'icône
    menuIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Empêche l'événement de se propager au document
        showMenu();
    });

    // Empêche le menu de se fermer immédiatement lorsqu'on passe la souris dessus
    nav.addEventListener('mouseenter', function() {
        clearTimeout(timeoutId);
    });

    // Cache le menu lorsque la souris quitte la zone de navigation
    nav.addEventListener('mouseleave', hideMenu);

    // Cache le menu si on clique en dehors
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
            hideMenu();
        }
    });


    // Code pour le bouton "Lire plus"
    const voirPlusContenu = document.getElementById('voir-plus-contenu');
    const voirPlusBouton = document.getElementById('voir-plus-bouton');

    voirPlusBouton.addEventListener('click', function(event) {
        event.preventDefault();
        if (voirPlusContenu.style.display === 'none') {
            voirPlusContenu.style.display = 'inline';
            voirPlusBouton.textContent = 'Lire moins';
        } else {
            voirPlusContenu.style.display = 'none';
            voirPlusBouton.textContent = 'Lire plus';
        }
    });
});
