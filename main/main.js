document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle ('active');
            mobileMenuToggle.classList.toggle('active'); // Opcional: para animar el icono
        });

        // Opcional: Cerrar menú si se hace clic fuera de él
        document.addEventListener('click', (event) => {
            if (!mainNav.contains(event.target) && !mobileMenuToggle.contains(event.target) && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }

});

