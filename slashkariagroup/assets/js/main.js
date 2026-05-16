document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Handling
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Form Submission Handling
    const consultationForm = document.getElementById('consultation-form');
    if (consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = consultationForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Sending...';
            btn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you! Our team will connect with you shortly.');
                consultationForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // Active Link Highlighting - Removed to keep 'HOME' active on index page
    // Header Scroll Handling - Removed as header is now solid by default via CSS

    // Developments Map Interactivity
    const projectItems = document.querySelectorAll('.project-items li');
    const projectInfoCard = document.querySelector('.project-info-card');
    
    if (projectItems.length > 0 && projectInfoCard) {
        projectItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all
                projectItems.forEach(i => i.classList.remove('active'));
                // Add to current
                item.classList.add('active');
                
                // Here you would normally fetch data or update from an object
                // For now we just trigger an animation to show it's interactive
                projectInfoCard.style.animation = 'none';
                void projectInfoCard.offsetWidth; // trigger reflow
                projectInfoCard.style.animation = 'zoomIn 0.5s ease';
            });
        });
    }

    // Projects Slider
    const slider = document.querySelector('.projects-slider');
    const nextBtn = document.querySelector('.slider-next');
    const prevBtn = document.querySelector('.slider-prev');
    
    if (slider && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: 300, behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }
});
