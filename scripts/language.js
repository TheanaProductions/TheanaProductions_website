//loadLanguagePref();

changeLanguage('en');

function checkBrowserLanguage() {
    var lang = navigator.language;

    changeLanguage(lang);
}

function saveLanguagePref(langSelected) {
    localStorage.setItem('selectedLanguage', langSelected);
}

function loadLanguagePref() {

    if (localStorage.getItem('selectedLanguage')) {
        var langSaved = localStorage.getItem('selectedLanguage');

        changeLanguage(langSaved);
    }
    else {
        checkBrowserLanguage();
    }
}

function changeLanguage(langSelected) {

    console.log(langSelected);

    var lang = langSelected;

    var langTxt = document.getElementsByClassName('lang');
    var enTxt = document.getElementsByClassName('en');
    var ptTxt = document.getElementsByClassName('pt');
    var frTxt = document.getElementsByClassName('fr');

    for (var i = 0; i < langTxt.length; i++) {
        langTxt[i].style.display = 'none';
    }

    if (lang.includes('en')) {
        lang = 'en';
    }
    else if (lang.includes('pt')) {
        lang = 'pt';
    }
    else if (lang.includes('fr')) {
        lang = 'fr';
    }

    switch (lang) {
        case 'fr':
            for (var i = 0; i < frTxt.length; i++) {
                frTxt[i].style.display = 'block';
            }

            //document.getElementById('lang-switch').value = 'fr';
            break;
        case 'pt': 
            for (var i = 0; i < ptTxt.length; i++) {
                ptTxt[i].style.display = 'block';
            }
            //document.getElementById('lang-switch').value = 'pt';
            break;
        case 'en':
        default:
            for (var i = 0; i < enTxt.length; i++) {
                enTxt[i].style.display = 'block';
            }
            //document.getElementById('lang-switch').value = 'en';
            break;
    }

    document.documentElement.lang = lang;

    saveLanguagePref(lang);
}