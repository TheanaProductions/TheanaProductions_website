// Add a var for each language you want to support
var langTxt = document.getElementsByClassName('lang');
var enTxt = document.getElementsByClassName('en');
var frTxt = document.getElementsByClassName('fr');

var enElements = setupLanguageElementArrays(enTxt);
var frElements = setupLanguageElementArrays(frTxt);

loadLanguagePref();

function checkBrowserLanguage() {
    var lang = navigator.language;

    changeLanguage(lang);
}

function saveLanguagePref(langSelected) {
    localStorage.setItem('selectedLanguageTheana', langSelected);
}

function loadLanguagePref() {

    if (localStorage.getItem('selectedLanguageTheana')) {
        var langSaved = localStorage.getItem('selectedLanguageTheana');

        changeLanguage(langSaved);
    }
    else {
        checkBrowserLanguage();
    }
}

function changeLanguage(langSelected) {
    var lang = langSelected;

    for (var i = 0; i < langTxt.length; i++) {        
        langTxt[i].setAttribute('style', 'display: none !important');
    }

    // Add the new languages to the fail-safe to make sure all variants will be shown correctly
    if (lang.includes('en')) {
        lang = 'en';
    }
    else if (lang.includes('fr')) {
        lang = 'fr';
    }

    // Add the new languages to switch the shown texts
    switch (lang) {
        case 'fr':
            for (var i = 0; i < frElements.length; i++) {
                frElements[i].element.setAttribute('style', 'display: ' + frElements[i].display + '!important');
            }
            break;
        case 'en':
        default:
            for (var i = 0; i < enElements.length; i++) {
                enElements[i].element.setAttribute('style', 'display: ' + enElements[i].display + '!important');
            }
            break;
    }

    document.documentElement.lang = lang;

    saveLanguagePref(lang);
    //console.log(lang);
}

function setupLanguageElementArrays(listOfElements) {
    var languageElementArray = [];

    for (var i = 0; i < listOfElements.length; i++) {
        var displaySaved = listOfElements[i].currentStyle ? listOfElements[i].currentStyle.display :
            getComputedStyle(listOfElements[i], null).display;

        var element = new LanguageElement(listOfElements[i], displaySaved);
        languageElementArray.push(element);
    }

    return languageElementArray;
}

function LanguageElement(element, display) {
    this.element = element;
    this.display = display;
}