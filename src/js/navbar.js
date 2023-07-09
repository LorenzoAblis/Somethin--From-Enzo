document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    let isHeaderHidden = false;

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY) {
          // Scrolling down
          if (!isHeaderHidden) {
            header.classList.add('header-hidden');
            navbar.classList.add('navbar-hidden');
            isHeaderHidden = true;
          }
        } else {
          // Scrolling up
          if (isHeaderHidden) {
            header.classList.remove('header-hidden');
            navbar.classList.remove('navbar-hidden');
            isHeaderHidden = false;
          }
        }
        lastScrollY = window.scrollY;
    });
});