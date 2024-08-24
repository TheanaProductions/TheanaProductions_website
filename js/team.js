document.addEventListener('DOMContentLoaded', function() {
    // Existing code...

    // Team section with social media links
    const teamMembers = [
        {
            src: 'https://via.placeholder.com/150',
            name: 'Alice',
            text: 'Lead Developer',
            socialMedia: [
                { href: 'https://facebook.com/alice', iconClass: 'fab fa-facebook-f', title: 'Facebook' },
                { href: 'https://twitter.com/alice', iconClass: 'fab fa-twitter', title: 'Twitter' },
                { href: 'https://linkedin.com/in/alice', iconClass: 'fab fa-linkedin-in', title: 'LinkedIn' }
            ]
        },
        {
            src: 'https://via.placeholder.com/150',
            name: 'Bob',
            text: 'Designer',
            socialMedia: [
                { href: 'https://instagram.com/bob', iconClass: 'fab fa-instagram', title: 'Instagram' },
                { href: 'https://dribbble.com/bob', iconClass: 'fab fa-dribbble', title: 'Dribbble' }
            ]
        },
        {
            src: 'https://via.placeholder.com/150',
            name: 'Charlie',
            text: 'Product Manager',
            socialMedia: [
                { href: 'https://twitter.com/charlie', iconClass: 'fab fa-twitter', title: 'Twitter' },
                { href: 'https://linkedin.com/in/charlie', iconClass: 'fab fa-linkedin-in', title: 'LinkedIn' }
            ]
        },
        {
            src: 'https://via.placeholder.com/150',
            name: 'Diana',
            text: 'Marketing Specialist',
            socialMedia: [
                { href: 'https://facebook.com/diana', iconClass: 'fab fa-facebook-f', title: 'Facebook' },
                { href: 'https://twitter.com/diana', iconClass: 'fab fa-twitter', title: 'Twitter' },
                { href: 'https://linkedin.com/in/diana', iconClass: 'fab fa-linkedin-in', title: 'LinkedIn' }
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
        text.textContent = member.text;
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
