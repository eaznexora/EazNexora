document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('mainHeader');
    const topStatusBar = document.querySelector('.top-status-bar');
    const footer = document.getElementById('stickyFooter');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    let lastScrollTop = 0;
    
    // Core function jo classes toggle karegi
    function handleNavVisibility(currentScroll) {
        const isScrollingDown = currentScroll > lastScrollTop && currentScroll > 60;
        const isScrollingUp = currentScroll < lastScrollTop;

        if (isScrollingDown) {
            // Scrolling down -> Hide header/footer/top bar and hide FAB
            topStatusBar.classList.add('bar-hidden');
            header.classList.add('header-hidden');
            header.classList.add('topbar-hidden');
            footer.classList.add('footer-hidden');
            scrollTopBtn.classList.remove('fab-visible');
        } else if (isScrollingUp) {
            // Scrolling up -> Show header/footer/top bar and show FAB only when far enough down
            topStatusBar.classList.remove('bar-hidden');
            header.classList.remove('header-hidden');
            header.classList.remove('topbar-hidden');
            footer.classList.remove('footer-hidden');
            if (currentScroll > 150) {
                scrollTopBtn.classList.add('fab-visible');
            } else {
                scrollTopBtn.classList.remove('fab-visible');
            }
        }

        if (currentScroll <= 150) {
            scrollTopBtn.classList.remove('fab-visible');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }

    // Fallback 1: Standard Browser Scroll Window
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        handleNavVisibility(scrolled);
    }, { passive: true });

    // Hero banner swipe state
    const heroSlider = document.getElementById('heroSlider');
    const heroSliderInner = document.querySelector('.hero-slider-inner');
    const heroDots = document.querySelectorAll('.carousel-dots.inside-banner .dot');
    let activeHeroIndex = 0;
    let heroTouchStartX = 0;
    let heroTouchStartY = 0;

    function goToHeroSlide(index) {
        activeHeroIndex = Math.max(0, Math.min(index, heroDots.length - 1));
        heroSliderInner.style.transform = `translateX(-${activeHeroIndex * 100}%)`;
        heroDots.forEach((dot, idx) => {
            dot.classList.toggle('dot-active', idx === activeHeroIndex);
        });
    }

    function heroNextSlide() {
        goToHeroSlide(activeHeroIndex + 1);
    }

    function heroPrevSlide() {
        goToHeroSlide(activeHeroIndex - 1);
    }

    // Make carousel indicators clickable
    document.querySelectorAll('.carousel-dots').forEach((dotGroup) => {
        dotGroup.addEventListener('click', (event) => {
            const clickedDot = event.target.closest('.dot');
            if (!clickedDot) return;

            const dots = Array.from(dotGroup.querySelectorAll('.dot'));
            const targetIndex = dots.indexOf(clickedDot);
            dots.forEach((dot) => dot.classList.remove('dot-active'));
            clickedDot.classList.add('dot-active');

            if (dotGroup.classList.contains('inside-banner')) {
                goToHeroSlide(targetIndex);
            }
        });
    });

    // Hero swipe handling on banner
    if (heroSlider) {
        heroSlider.addEventListener('touchstart', (e) => {
            heroTouchStartX = e.touches[0].clientX;
            heroTouchStartY = e.touches[0].clientY;
        }, { passive: true });

        heroSlider.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const dx = touchEndX - heroTouchStartX;
            const dy = touchEndY - heroTouchStartY;

            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
                if (dx < 0) {
                    heroNextSlide();
                } else {
                    heroPrevSlide();
                }
            }
        }, { passive: true });
    }

    // Product carousel swipe state
    const productCarousel = document.getElementById('productCarousel');
    const productSliderInner = document.querySelector('.product-slider-inner');
    const productDots = document.querySelectorAll('#productCarouselDots .dot');
    let activeProductIndex = 0;
    let productTouchStartX = 0;
    let productTouchStartY = 0;

    function goToProductSlide(index) {
        activeProductIndex = Math.max(0, Math.min(index, productDots.length - 1));
        productSliderInner.style.transform = `translateX(-${activeProductIndex * 100}%)`;
        productDots.forEach((dot, idx) => {
            dot.classList.toggle('dot-active', idx === activeProductIndex);
        });
    }

    function productNextSlide() {
        goToProductSlide(activeProductIndex + 1);
    }

    function productPrevSlide() {
        goToProductSlide(activeProductIndex - 1);
    }

    // Product carousel dot click handling
    const productDotGroup = document.getElementById('productCarouselDots');
    if (productDotGroup) {
        productDotGroup.addEventListener('click', (event) => {
            const clickedDot = event.target.closest('.dot');
            if (!clickedDot) return;

            const dots = Array.from(productDotGroup.querySelectorAll('.dot'));
            const targetIndex = dots.indexOf(clickedDot);
            goToProductSlide(targetIndex);
        });
    }

    // Product carousel swipe handling
    if (productCarousel) {
        productCarousel.addEventListener('touchstart', (e) => {
            productTouchStartX = e.touches[0].clientX;
            productTouchStartY = e.touches[0].clientY;
        }, { passive: true });

        productCarousel.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const dx = touchEndX - productTouchStartX;
            const dy = touchEndY - productTouchStartY;

            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
                if (dx < 0) {
                    productNextSlide();
                } else {
                    productPrevSlide();
                }
            }
        }, { passive: true });
    }

    // Featured carousel swipe state
    const featuredCarousel = document.getElementById('featuredCarousel');
    const featuredSliderInner = featuredCarousel ? featuredCarousel.querySelector('.product-slider-inner') : null;
    const featuredDots = document.querySelectorAll('#featuredCarouselDots .dot');
    let activeFeaturedIndex = 0;
    let featuredTouchStartX = 0;
    let featuredTouchStartY = 0;

    function goToFeaturedSlide(index) {
        activeFeaturedIndex = Math.max(0, Math.min(index, featuredDots.length - 1));
        if (featuredSliderInner) {
            featuredSliderInner.style.transform = `translateX(-${activeFeaturedIndex * 100}%)`;
        }
        featuredDots.forEach((dot, idx) => {
            dot.classList.toggle('dot-active', idx === activeFeaturedIndex);
        });
    }

    function featuredNextSlide() {
        goToFeaturedSlide(activeFeaturedIndex + 1);
    }

    function featuredPrevSlide() {
        goToFeaturedSlide(activeFeaturedIndex - 1);
    }

    // Featured carousel dot click handling
    const featuredDotGroup = document.getElementById('featuredCarouselDots');
    if (featuredDotGroup) {
        featuredDotGroup.addEventListener('click', (event) => {
            const clickedDot = event.target.closest('.dot');
            if (!clickedDot) return;

            const dots = Array.from(featuredDotGroup.querySelectorAll('.dot'));
            const targetIndex = dots.indexOf(clickedDot);
            goToFeaturedSlide(targetIndex);
        });
    }

    // Featured carousel swipe handling
    if (featuredCarousel) {
        featuredCarousel.addEventListener('touchstart', (e) => {
            featuredTouchStartX = e.touches[0].clientX;
            featuredTouchStartY = e.touches[0].clientY;
        }, { passive: true });

        featuredCarousel.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const dx = touchEndX - featuredTouchStartX;
            const dy = touchEndY - featuredTouchStartY;

            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
                if (dx < 0) {
                    featuredNextSlide();
                } else {
                    featuredPrevSlide();
                }
            }
        }, { passive: true });
    }

    // Fallback 2: Mobile Touch Swipe/Drag (Agra scroll locked hai tab bhi kaam karega)
    let touchStart = 0;
    document.addEventListener('touchstart', (e) => {
        touchStart = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        const touchEnd = e.touches[0].clientY;
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        
        if (touchStart > touchEnd + 5) {
            // Finger moving up -> Page going down (Hide)
            header.classList.add('header-hidden');
            footer.classList.add('footer-hidden');
        } else if (touchStart < touchEnd - 5) {
            // Finger moving down -> Page going up (Show)
            header.classList.remove('header-hidden');
            footer.classList.remove('footer-hidden');
        }
        touchStart = touchEnd;
    }, { passive: true });

    // Scroll to Top click event
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});