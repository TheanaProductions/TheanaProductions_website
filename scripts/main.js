// Json file to intantiate the common elements of the website

create_logoSmall();
create_divNav();

// Insantiate banner images
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

// Instantiate header nav
function create_divNav() {

    // Home link
    let divIndex = document.createElement('div');
    divIndex.id = 'indexDiv';
    document.getElementById('navHeader').appendChild(divIndex);

    let indexLink = document.createElement('a');
    indexLink.innerHTML = 'Home';
    indexLink.className = 'linkNavHeader';
    indexLink.setAttribute('href', ('index.php'));
    document.getElementById('indexDiv').appendChild(indexLink);

    // Games link
    let divGames = document.createElement('div');
    divGames.id = 'gamesDiv';
    document.getElementById('navHeader').appendChild(divGames);

    let gamesLink = document.createElement('a');
    gamesLink.innerHTML = 'Games';
    gamesLink.id = 'gamesLink';
    gamesLink.className = 'linkNavHeader';
    gamesLink.setAttribute('href', ('games.php'));
    document.getElementById('gamesDiv').appendChild(gamesLink);

    // Apps link
    let divApps = document.createElement('div');
    divApps.id = 'appsDiv';
    document.getElementById('navHeader').appendChild(divApps);

    let appsLink = document.createElement('a');
    appsLink.innerHTML = 'Apps';
    appsLink.id = 'appsLink';
    appsLink.className = 'linkNavHeader';
    appsLink.setAttribute('href', ('apps.php'));
    document.getElementById('appsDiv').appendChild(appsLink);

    // About link
    let divAbout = document.createElement('div');
    divAbout.id = 'aboutDiv';
    document.getElementById('navHeader').appendChild(divAbout);

    let aboutLink = document.createElement('a');
    aboutLink.innerHTML = 'About us';
    aboutLink.id = 'aboutLink';
    aboutLink.className = 'linkNavHeader';
    aboutLink.setAttribute('href', ('about.php'));
    document.getElementById('aboutDiv').appendChild(aboutLink);
}