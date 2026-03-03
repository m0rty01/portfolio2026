/* ============================================
   Ravi Jha — Portfolio :: Minimal JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---- Smooth scroll for nav links ---- */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile nav if open
                document.querySelector('.nav-links')?.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    });

    /* ---- Mobile nav toggle ---- */
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });
    }

    /* ---- Project expand / collapse ---- */
    document.querySelectorAll('.project-header').forEach(header => {
        header.addEventListener('click', () => {
            const card = header.closest('.project-card');
            card.classList.toggle('expanded');
        });
    });

    /* ---- Intersection Observer for scroll reveals ---- */
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        reveals.forEach(el => observer.observe(el));
    }

});
