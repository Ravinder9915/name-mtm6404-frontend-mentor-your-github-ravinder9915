document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    mobileMenuToggle.addEventListener('click', function() {
        const visibility = navList.getAttribute('data-visible');
        
        if (visibility === "false") {
            navList.setAttribute('data-visible', "true");
            mobileMenuToggle.setAttribute('aria-expanded', "true");
            document.body.style.overflow = 'hidden';
        } else {
            navList.setAttribute('data-visible', "false");
            mobileMenuToggle.setAttribute('aria-expanded', "false");
            document.body.style.overflow = '';
        }
    });
});