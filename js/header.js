document.addEventListener('DOMContentLoaded', function() {
    // Navigation links
    const navLinks = [
        { href: '#home', text: 'Home' },
        { href: '#games', text: 'Games' },
        { href: '#about', text: 'About' },
        { href: '#contact', text: 'Contact' }
    ];

    const navContainer = document.getElementById('nav');

    navLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.text;
        navContainer.appendChild(anchor);
    });
});