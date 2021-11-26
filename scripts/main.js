create_logoSmall();
create_divNav();
create_footer();

function create_logoSmall() {
    let indexLink = document.createElement('a');
    indexLink.href = 'https://theanaproductions.com/';
    indexLink.id = 'indexLinkHeader';
    document.getElementById('bannerHeader').appendChild(indexLink);

    let logoSmall = document.createElement('img');
    logoSmall.src = 'images/theana_logo_xmas.png';
    logoSmall.id = 'img-small';
    logoSmall.alt = 'Logo Theana Productions'
    document.getElementById('indexLinkHeader').appendChild(logoSmall);

    let logoBig = document.createElement('img');
    logoBig.src = 'images/theana_logo_title_Xmas.png';
    logoBig.id = 'img-big';
    logoBig.alt = 'Logo Theana Productions'
    document.getElementById('indexLinkHeader').appendChild(logoBig);
}

function create_divNav() {

    // Home link
    let divIndex = document.createElement('div');
    divIndex.id = 'indexDiv';
    divIndex.className = 'navDivHeader';
    document.getElementById('navHeader').appendChild(divIndex);

    let indexLink = document.createElement('a');
    indexLink.lang = 'en';
    indexLink.innerHTML = 'Home';
    indexLink.className = 'linkNavHeader lang en';
    indexLink.setAttribute('href', ('https://theanaproductions.com/'));
    document.getElementById('indexDiv').appendChild(indexLink);

    let indexLinkFR = document.createElement('a');
    indexLinkFR.lang = 'fr';
    indexLinkFR.innerHTML = 'Accueil';
    indexLinkFR.className = 'linkNavHeader lang fr';
    indexLinkFR.setAttribute('href', ('https://theanaproductions.com/'));
    document.getElementById('indexDiv').appendChild(indexLinkFR);

    // Games link
    let divGames = document.createElement('div');
    divGames.id = 'gamesDiv';
    divGames.className = 'navDivHeader';
    document.getElementById('navHeader').appendChild(divGames);

    let gamesLink = document.createElement('a');
    gamesLink.lang = 'en';
    gamesLink.innerHTML = 'Creations';
    gamesLink.className = 'linkNavHeader lang en';
    gamesLink.setAttribute('href', ('games.html'));
    document.getElementById('gamesDiv').appendChild(gamesLink);

    let gamesLinkFR = document.createElement('a');
    gamesLinkFR.lang = 'fr';
    gamesLinkFR.innerHTML = 'Cr\u00e9ations';
    gamesLinkFR.className = 'linkNavHeader lang fr';
    gamesLinkFR.setAttribute('href', ('games.html'));
    document.getElementById('gamesDiv').appendChild(gamesLinkFR);
}

function create_footer()
{
    // Legal notice
    let linkLegalNotice = document.createElement('a');
    linkLegalNotice.lang = 'en';
    linkLegalNotice.innerHTML = 'Legal Notice';
    linkLegalNotice.className = 'lang en';
    linkLegalNotice.setAttribute('href', ('legalNotice.html'));
    document.getElementById('divFooterLinks').appendChild(linkLegalNotice);

    let linkLegalNoticeFR = document.createElement('a');
    linkLegalNoticeFR.lang = 'fr';
    linkLegalNoticeFR.innerHTML = 'Mentions l\u00e9gales';
    linkLegalNoticeFR.className = 'lang fr';
    linkLegalNoticeFR.setAttribute('href', ('legalNotice.html'));
    document.getElementById('divFooterLinks').appendChild(linkLegalNoticeFR);

    // Privacy Policies
    let linkPrivacyPolicies = document.createElement('a');
    linkPrivacyPolicies.lang = 'en';
    linkPrivacyPolicies.innerHTML = 'Privacy Policies';
    linkPrivacyPolicies.className = 'lang en';
    linkPrivacyPolicies.setAttribute('href', ('privacyPolicies.html'));
    document.getElementById('divFooterLinks').appendChild(linkPrivacyPolicies);

    let linkPrivacyPoliciesFR = document.createElement('a');
    linkPrivacyPoliciesFR.lang = 'fr';
    linkPrivacyPoliciesFR.innerHTML = 'Politique de confidentialit\u00e9';
    linkPrivacyPoliciesFR.className = 'lang fr';
    linkPrivacyPoliciesFR.setAttribute('href', ('privacyPolicies.html'));
    document.getElementById('divFooterLinks').appendChild(linkPrivacyPoliciesFR);

    // Partners
    let linkPartners = document.createElement('a');
    linkPartners.lang = 'en';
    linkPartners.innerHTML = 'Our partners';
    linkPartners.className = 'lang en';
    linkPartners.setAttribute('href', ('partners.html'));
    document.getElementById('divFooterLinks').appendChild(linkPartners);

    let linkPartnersFR = document.createElement('a');
    linkPartnersFR.lang = 'fr';
    linkPartnersFR.innerHTML = 'Nos partenaires';
    linkPartnersFR.className = 'lang fr';
    linkPartnersFR.setAttribute('href', ('partners.html'));
    document.getElementById('divFooterLinks').appendChild(linkPartnersFR);
}