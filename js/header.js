document.addEventListener('DOMContentLoaded', function() {
    // Navigation links
    const navLinks = [
        { href: 'games.html', text: 'Our Games' },
        { href: 'assets.html', text: 'Our Assets' },
        { href: 'about.html', text: 'About Us' }
    ];

    const navContainer = document.getElementById('nav');

    let isNestedFolder = false;

    const currentUrl = window.location.href;
    if (currentUrl.includes("/games/") ||
        currentUrl.includes("/assets/") ||
        currentUrl.includes("/news/"))
        isNestedFolder = true;

    navLinks.forEach(link => {
        const anchor = document.createElement('a');

        if (!isNestedFolder)
            anchor.href = link.href;
        else
            anchor.href = "../" + link.href;
        
        anchor.textContent = link.text;
        navContainer.appendChild(anchor);
    });
});