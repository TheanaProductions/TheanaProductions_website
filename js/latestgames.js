document.addEventListener('DOMContentLoaded', function() {
    // Latest games
    const games = [
        { src: 'https://via.placeholder.com/300x200', title: 'Game 1', link: '#game1' },
        { src: 'https://via.placeholder.com/300x200', title: 'Game 2', link: '#game2' },
        { src: 'https://via.placeholder.com/300x200', title: 'Game 3', link: '#game3' },
        { src: 'https://via.placeholder.com/300x200', title: 'Game 4', link: '#game4' },
        { src: 'https://via.placeholder.com/300x200', title: 'Game 5', link: '#game5' }
    ];

    const gamesContainer = document.getElementById('games-container');

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.className = 'game-item';

        const img = document.createElement('img');
        img.src = game.src;
        img.alt = game.title;
        gameItem.appendChild(img);

        const title = document.createElement('h3');
        title.textContent = game.title;
        gameItem.appendChild(title);

        const link = document.createElement('a');
        link.href = game.link;
        link.textContent = 'Play Now';
        gameItem.appendChild(link);

        gamesContainer.appendChild(gameItem);
    });
});