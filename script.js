// --- Fade-in sections and cards on scroll ---
function onVisible(el, callback) {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.21 });
    obs.observe(el);
}

document.addEventListener('DOMContentLoaded', () => {
    // Animate section titles and sections
    document.querySelectorAll('.section-title').forEach(title => {
        onVisible(title, el => el.classList.add('in-view'));
    });
    document.querySelectorAll('section').forEach(section => {
        onVisible(section, el => {
          el.classList.add('section-visible');
        });
    });

    // Animate timeline events
    document.querySelectorAll('.timeline-event').forEach(ev => {
        onVisible(ev, el => el.classList.add('in-view'));
    });

    // Animate reviews (if present)
    document.querySelectorAll('#reviews-list > li').forEach(ev => {
        onVisible(ev, el => el.classList.add('in-view'));
    });

    // Animate other .cert-card, .web-project-img, etc
    document.querySelectorAll('.cert-card, .web-project-img, .teacher-img, .about-achievements img').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 8px 24px rgba(0,128,128,0.26)';
            card.style.transform += ' scale(1.09)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
            card.style.transform = card.style.transform.replace(' scale(1.09)','');
        });
    });

    // Button ripple effect
    const btns = document.querySelectorAll('.btn, .btn-lg, .btn-outline-primary, .btn-success');
    btns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        const circle = document.createElement('span');
        const rect = this.getBoundingClientRect();
        circle.className = 'ripple';
        circle.style.left = (e.clientX - rect.left) + 'px';
        circle.style.top = (e.clientY - rect.top) + 'px';
        circle.style.width = circle.style.height = Math.max(rect.width, rect.height) + 'px';
        this.appendChild(circle);
        setTimeout(() => circle.remove(), 700);
      });
    });
    // Animate main hero button with a pulse effect
    let ctaBtn = document.querySelector('.hero-content .btn');
    if (ctaBtn) ctaBtn.classList.add('btn-animated-pulse');
    // Animate About modal button too
    let aboutBtn = document.getElementById('aboutModalBtn');
    if (aboutBtn) aboutBtn.classList.add('btn-animated-pulse');
    // Animate Book section button
    let bookBtn = document.querySelector('.book-section .btn-success');
    if (bookBtn) bookBtn.classList.add('btn-animated-pulse');
});