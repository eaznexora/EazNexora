document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const closeDrawerBtn = document.querySelector('.close-drawer-btn');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileDrawer = document.querySelector('.mobile-menu-drawer');
    const dropdownToggle = document.querySelector('.m-dropdown-toggle');
    const dropdownMenu = document.querySelector('.m-dropdown-menu');
    const dropdownParent = document.querySelector('.m-has-dropdown');

    // Menu band karne aur scroll wapas chalu karne ka function
    function closeMobileMenu() {
        mobileOverlay.classList.remove('active');
        mobileDrawer.classList.remove('active');
        document.body.classList.remove('menu-open'); // Scroll wapas on
    }

    // Hamburger Button Click
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function (e) {
            e.preventDefault();
            mobileOverlay.classList.add('active');
            mobileDrawer.classList.add('active');
            document.body.classList.add('menu-open'); // Scroll lock on
        });
    }

    // Close Button Click
    if (closeDrawerBtn) {
        closeDrawerBtn.addEventListener('click', closeMobileMenu);
    }

    // Overlay Click
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMobileMenu);
    }

    // Mobile Dropdown Toggle
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function (e) {
            e.preventDefault();
            dropdownParent.classList.toggle('open');
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            } else {
                dropdownMenu.style.display = 'block';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Our Products Slider Logic
    const track = document.querySelector('.ops-track');
    const prevBtn = document.querySelector('.ops-nav-btn.prev');
    const nextBtn = document.querySelector('.ops-nav-btn.next');
    const dots = document.querySelectorAll('.ops-dot');

    if (track && prevBtn && nextBtn) {
        // Ek card kitna lamba hai gap ke saath calculate karna
        const getScrollAmount = () => {
            const card = document.querySelector('.ops-card');
            const style = window.getComputedStyle(track);
            const gap = parseInt(style.gap) || 30;
            return card.offsetWidth + gap;
        };

        // Next Button Click
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        // Previous Button Click
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });

        // Scroll hone par Dots update karna
        track.addEventListener('scroll', () => {
            let scrollAmount = getScrollAmount();
            let currentIndex = Math.round(track.scrollLeft / scrollAmount);

            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[currentIndex]) {
                dots[currentIndex].classList.add('active');
            }
        });

        // Dots pe click karke slide karna
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                track.scrollTo({
                    left: index * getScrollAmount(),
                    behavior: 'smooth'
                });
            });
        });
    }
});