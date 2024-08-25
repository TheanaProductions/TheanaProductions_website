document.addEventListener('DOMContentLoaded', function() {
    // Social media links
    const socialLinks = [
        { href: 'https://discord.com/invite/dzvwT2qHym', iconClass: 'fab fa-discord', title: 'Discord' },
        { href: 'https://x.com/TheanaProdOff', iconClass: 'fab fa-twitter', title: 'Twitter' },
        { href: 'https://www.tiktok.com/@theanaproductions?', iconClass: 'fab fa-tiktok', title: 'TikTok' },
        { href: 'https://www.youtube.com/channel/UC2S3K2-dtLeUiSFKWtxNkGw', iconClass: 'fab fa-youtube', title: 'Youtube' },
        { href: 'https://www.twitch.tv/theanaproductions', iconClass: 'fab fa-twitch', title: 'Twitch' },
        { href: 'https://github.com/TheanaProductions', iconClass: 'fab fa-github', title: 'Github' },
        { href: 'https://store.steampowered.com/developer/theanaproductions', iconClass: 'fab fa-steam', title: 'Steam' },
        { href: 'https://play.google.com/store/apps/dev?id=6665872148698811107', iconClass: 'fab fa-google-play', title: 'PlayStore' },
        { href: 'https://theana-productions.itch.io/', iconClass: 'fab fa-itch-io', title: 'Itch.io' },
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

    // Quick links
    const quickLinks = [
        { href: 'index.html', linkTxt: 'Home'},
        { href: 'articles.html', linkTxt: 'Articles'},
        { href: 'privacy_policy.html', linkTxt: 'Privacy Policy'},
        { href: 'legal_notice.html', linkTxt: 'Legal Notice'}
    ]

    let isNestedFolder = false;

    const currentUrl = window.location.href;
    if (currentUrl.includes("/games/") ||
        currentUrl.includes("/assets/") ||
        currentUrl.includes("/news/"))
        isNestedFolder = true;

    const quickLinkContainer = document.getElementById('quick-links');

    quickLinks.forEach(link => {
        const anchor = document.createElement('a');

        if (!isNestedFolder)
            anchor.href = link.href;
        else
            anchor.href = "../" + link.href;

        anchor.innerHTML = link.linkTxt;
        quickLinkContainer.appendChild(anchor);
    });
});