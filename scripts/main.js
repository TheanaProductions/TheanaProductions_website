create_logoSmall();
create_divNav();

function create_logoSmall() {
    let logoSmall = document.createElement('img');
    logoSmall.src = 'images/logoSmall.png';
    logoSmall.id = 'img-small';
    document.getElementById('bannerHeader').appendChild(logoSmall);

    let logoBig = document.createElement('img');
    logoBig.src = 'images/logoBig.png';
    logoBig.id = 'img-big';
    document.getElementById('bannerHeader').appendChild(logoBig);
}

function create_divNav() {

    // Home link
    let divIndex = document.createElement('div');
    divIndex.id = 'indexDiv';
    divIndex.className = 'navDivHeader';
    document.getElementById('navHeader').appendChild(divIndex);

    let indexLink = document.createElement('a');
    indexLink.innerHTML = 'Home';
    indexLink.className = 'linkNavHeader';
    indexLink.setAttribute('href', ('index.html'));
    document.getElementById('indexDiv').appendChild(indexLink);

    // Games link
    let divGames = document.createElement('div');
    divGames.id = 'gamesDiv';
    divGames.className = 'navDivHeader';
    document.getElementById('navHeader').appendChild(divGames);

    let gamesLink = document.createElement('a');
    gamesLink.innerHTML = 'Creations';
    gamesLink.className = 'linkNavHeader';
    gamesLink.setAttribute('href', ('games.html'));
    document.getElementById('gamesDiv').appendChild(gamesLink);
}