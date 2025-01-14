document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
        const projectImages = document.querySelectorAll('.portfolio-img');
    
        projectImages.forEach(image => {
            image.addEventListener('mouseover', () => {
                image.style.transform = 'scale(1.1)';
            });
    
            image.addEventListener('mouseout', () => {
                image.style.transform = 'scale(1)';
            });
        });
});
