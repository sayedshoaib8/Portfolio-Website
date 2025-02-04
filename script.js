document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const projectCards = document.querySelectorAll('.project-card');

    function revealOnScroll() {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });

        projectCards.forEach(card => {
            if (card.getBoundingClientRect().top < window.innerHeight - 50) {
                card.classList.add('visible');
            }
        });
    }

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
});
