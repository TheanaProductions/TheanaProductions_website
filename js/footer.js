document.addEventListener('DOMContentLoaded', function() {
    // Social media links
    const socialLinks = [
        { href: 'https://facebook.com', iconClass: 'fab fa-facebook-f', title: 'Facebook' },
        { href: 'https://twitter.com', iconClass: 'fab fa-twitter', title: 'Twitter' },
        { href: 'https://instagram.com', iconClass: 'fab fa-instagram', title: 'Instagram' },
        { href: 'https://linkedin.com', iconClass: 'fab fa-linkedin-in', title: 'LinkedIn' }
    ];

    const socialMediaContainer = document.getElementById('social-media');

    socialLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.target = '_blank';
        anchor.title = link.title;

        const icon = document.createElement('i');
        icon.className = link.iconClass;

        anchor.appendChild(icon);
        socialMediaContainer.appendChild(anchor);
    });
});