document.addEventListener('DOMContentLoaded', function() {
    // Team section with social media links
    const teamMembers = [
        {
            src: 'medias/team/icon_singala.png',
            name: 'SinGala',
            text: 'Founder<br/>Lead Developer',
            socialMedia: [
                { href: 'https://www.linkedin.com/in/singala/', iconClass: 'fab fa-linkedin-in', title: 'LinkedIn' },
                { href: 'https://github.com/Sin-Gala', iconClass: 'fa-brands fa-github', title: 'Github' },
                { href: 'https://x.com/sin_gala', iconClass: 'fab fa-twitter', title: 'Twitter' }
            ]
        },
        {
            src: 'medias/team/icon_arcodeprata.png',
            name: 'Arcodeprata',
            text: '2D Artist<br/>Game Designer<br/>Translator',
            socialMedia: [
                { href: 'https://www.linkedin.com/in/emy-rufino-gunji-95b634163/', iconClass: 'fab fa-linkedin-in', title: 'LinkedIn' },
                { href: 'https://x.com/arcodeprata', iconClass: 'fab fa-twitter', title: 'Twitter' }
            ]
        },
        {
            src: 'medias/team/icon_raposo.png',
            name: 'GraystainedRain',
            text: 'Pixel Artist',
            socialMedia: [
                { href: 'https://x.com/Graystainedrain', iconClass: 'fab fa-twitter', title: 'Twitter' }
            ]
        }
    ];

    const teamContainer = document.getElementById('team-container');

    teamMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'team-member';

        const img = document.createElement('img');
        img.src = member.src;
        img.alt = member.name;
        memberDiv.appendChild(img);

        const name = document.createElement('h4');
        name.textContent = member.name;
        memberDiv.appendChild(name);

        const text = document.createElement('p');
        text.innerHTML = member.text;
        memberDiv.appendChild(text);

        // Social media icons
        const socialMediaDiv = document.createElement('div');
        socialMediaDiv.className = 'team-social-media';

        member.socialMedia.forEach(social => {
            const anchor = document.createElement('a');
            anchor.href = social.href;
            anchor.target = '_blank';
            anchor.title = social.title;

            const icon = document.createElement('i');
            icon.className = social.iconClass;

            anchor.appendChild(icon);
            socialMediaDiv.appendChild(anchor);
        });

        memberDiv.appendChild(socialMediaDiv);
        teamContainer.appendChild(memberDiv);
    });
});
