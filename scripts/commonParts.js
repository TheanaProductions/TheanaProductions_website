createHeader();

function createHeader() {

    // English Header
    let menuNavDivEN = document.createElement('div');
    menuNavDivEN.classList = 'menu rowFlex lang en';
    menuNavDivEN.id = 'menuNavDivEN';
    document.getElementById('header').appendChild(menuNavDivEN);

    let menuContainerEN = document.createElement('nav');
    menuContainerEN.id = 'menuContainerEN';
    menuContainerEN.classList = 'menuContainer';
    document.getElementById('menuNavDivEN').appendChild(menuContainerEN);

    let menuContentEN = document.createElement('div');
    menuContentEN.id = 'menuContentEN';
    menuContentEN.className = 'menuContent';
    document.getElementById('menuContainerEN').appendChild(menuContentEN);

    let ulMenuEN = document.createElement('ul');
    ulMenuEN.classList = 'rowFlex';
    ulMenuEN.id = 'ulMenuEN';
    document.getElementById('menuContentEN').appendChild(ulMenuEN);

        // Home link
    let liHomeEN = document.createElement('li');
    liHomeEN.id = 'liHomeEN';
    document.getElementById('ulMenuEN').appendChild(liHomeEN);

    let linkHomeEN = document.createElement('a');
    linkHomeEN.title = 'Home';
    linkHomeEN.setAttribute('href', ('https://theanaproductions.com/'));
    linkHomeEN.innerHTML = 'Home';
    document.getElementById('liHomeEN').appendChild(linkHomeEN);

        // Games link
    let liGamesEN = document.createElement('li');
    liGamesEN.id = 'liGamesEN';
    document.getElementById('ulMenuEN').appendChild(liGamesEN);

    let linkGamesEN = document.createElement('a');
    linkGamesEN.title = 'Our Games';
    linkGamesEN.setAttribute('href', ('games.html'));
    linkGamesEN.innerHTML = 'Games';
    document.getElementById('liGamesEN').appendChild(linkGamesEN);

        // Assets link
    let liAssetsEN = document.createElement('li');
    liAssetsEN.id = 'liAssetsEN';
    document.getElementById('ulMenuEN').appendChild(liAssetsEN);

    let linkAssetsEN = document.createElement('a');
    linkAssetsEN.title = 'Our Assets';
    linkAssetsEN.setAttribute('href', ('assets.html'));
    linkAssetsEN.innerHTML = 'Assets';
    document.getElementById('liAssetsEN').appendChild(linkAssetsEN);

        // Contact link
    let liContactEN = document.createElement('li');
    liContactEN.id = 'liContactEN';
    document.getElementById('ulMenuEN').appendChild(liContactEN);

    let linkContactEN = document.createElement('a');
    linkContactEN.title = 'Contact us';
    linkContactEN.setAttribute('href', ('contact.html'));
    linkContactEN.innerHTML = 'Contact';
    document.getElementById('liContactEN').appendChild(linkContactEN);

    // French Header
    let menuNavDivFR = document.createElement('div');
    menuNavDivFR.classList = 'menu rowFlex lang fr';
    menuNavDivFR.id = 'menuNavDivFR';
    document.getElementById('header').appendChild(menuNavDivFR);

    let menuContainerFR = document.createElement('nav');
    menuContainerFR.id = 'menuContainerFR';
    menuContainerFR.classList = 'menuContainer';
    document.getElementById('menuNavDivFR').appendChild(menuContainerFR);

    let menuContentFR = document.createElement('div');
    menuContentFR.id = 'menuContentFR';
    menuContentFR.className = 'menuContent';
    document.getElementById('menuContainerFR').appendChild(menuContentFR);

    let ulMenuFR = document.createElement('ul');
    ulMenuFR.classList = 'rowFlex';
    ulMenuFR.id = 'ulMenuFR';
    document.getElementById('menuContentFR').appendChild(ulMenuFR);

        // Home link
    let liHomeFR = document.createElement('li');
    liHomeFR.id = 'liHomeFR';
    document.getElementById('ulMenuFR').appendChild(liHomeFR);

    let linkHomeFR = document.createElement('a');
    linkHomeFR.title = 'Accueil';
    linkHomeFR.setAttribute('href', ('https://theanaproductions.com/'));
    linkHomeFR.innerHTML = 'Accueil';
    document.getElementById('liHomeFR').appendChild(linkHomeFR);

        // Games link
    let liGamesFR = document.createElement('li');
    liGamesFR.id = 'liGamesFR';
    document.getElementById('ulMenuFR').appendChild(liGamesFR);

    let linkGamesFR = document.createElement('a');
    linkGamesFR.title = 'Nos Jeux';
    linkGamesFR.setAttribute('href', ('games.html'));
    linkGamesFR.innerHTML = 'Jeux';
    document.getElementById('liGamesFR').appendChild(linkGamesFR);

        // Assets link
    let liAssetsFR = document.createElement('li');
    liAssetsFR.id = 'liAssetsFR';
    document.getElementById('ulMenuFR').appendChild(liAssetsFR);

    let linkAssetsFR = document.createElement('a');
    linkAssetsFR.title = 'Nos Assets';
    linkAssetsFR.setAttribute('href', ('assets.html'));
    linkAssetsFR.innerHTML = 'Assets';
    document.getElementById('liAssetsFR').appendChild(linkAssetsFR);

        // Contact link
    let liContactFR = document.createElement('li');
    liContactFR.id = 'liContactFR';
    document.getElementById('ulMenuFR').appendChild(liContactFR);

    let linkContactFR = document.createElement('a');
    linkContactFR.title = 'Nous contacter';
    linkContactFR.setAttribute('href', ('contact.html'));
    linkContactFR.innerHTML = 'Contact';
    document.getElementById('liContactFR').appendChild(linkContactFR);

    // Portuguese Header (TO TRANSLATE LATER)
    let menuNavDivPT = document.createElement('div');
    menuNavDivPT.classList = 'menu rowFlex lang pt';
    menuNavDivPT.id = 'menuNavDivPT';
    document.getElementById('header').appendChild(menuNavDivPT);

    let menuContainerPT = document.createElement('nav');
    menuContainerPT.id = 'menuContainerPT';
    menuContainerPT.classList = 'menuContainer';
    document.getElementById('menuNavDivPT').appendChild(menuContainerPT);

    let menuContentPT = document.createElement('div');
    menuContentPT.id = 'menuContentPT';
    menuContentPT.className = 'menuContent';
    document.getElementById('menuContainerPT').appendChild(menuContentPT);

    let ulMenuPT = document.createElement('ul');
    ulMenuPT.classList = 'rowFlex';
    ulMenuPT.id = 'ulMenuPT';
    document.getElementById('menuContentPT').appendChild(ulMenuPT);

        // Home link
    let liHomePT = document.createElement('li');
    liHomePT.id = 'liHomePT';
    document.getElementById('ulMenuPT').appendChild(liHomePT);

    let linkHomePT = document.createElement('a');
    linkHomePT.title = 'Home';
    linkHomePT.setAttribute('href', ('https://theanaproductions.com/'));
    linkHomePT.innerHTML = 'Home';
    document.getElementById('liHomePT').appendChild(linkHomePT);

        // Games link
    let liGamesPT = document.createElement('li');
    liGamesPT.id = 'liGamesPT';
    document.getElementById('ulMenuPT').appendChild(liGamesPT);

    let linkGamesPT = document.createElement('a');
    linkGamesPT.title = 'Our Games';
    linkGamesPT.setAttribute('href', ('games.html'));
    linkGamesPT.innerHTML = 'Games';
    document.getElementById('liGamesPT').appendChild(linkGamesPT);

        // Assets link
    let liAssetsPT = document.createElement('li');
    liAssetsPT.id = 'liAssetsPT';
    document.getElementById('ulMenuPT').appendChild(liAssetsPT);

    let linkAssetsPT = document.createElement('a');
    linkAssetsPT.title = 'Our Assets';
    linkAssetsPT.setAttribute('href', ('assets.html'));
    linkAssetsPT.innerHTML = 'Assets';
    document.getElementById('liAssetsPT').appendChild(linkAssetsPT);

        // Contact link
    let liContactPT = document.createElement('li');
    liContactPT.id = 'liContactPT';
    document.getElementById('ulMenuPT').appendChild(liContactPT);

    let linkContactPT = document.createElement('a');
    linkContactPT.title = 'Contact us';
    linkContactPT.setAttribute('href', ('contact.html'));
    linkContactPT.innerHTML = 'Contact';
    document.getElementById('liContactPT').appendChild(linkContactPT);
}