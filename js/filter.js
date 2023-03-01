// Gets all the datas to filter
var catalogueElements = document.getElementsByClassName('catalogue-element');
var checkboxDatas = document.getElementsByClassName('catalogue-checkbox');
var noFilterElements = document.getElementsByClassName('no-filter');

var currentCheckboxDatas = [];
var currentElementsToShow = [];

function setCheckboxCurrentDatas() {
    console.log("Change");

    currentCheckboxDatas = [];
    currentElementsToShow = [];

    for (var i = 0; i < checkboxDatas.length; i++) {
        if (!checkboxDatas[i].checked) continue;

        currentCheckboxDatas.push(checkboxDatas[i].value);
    }

    for (var j = 0; j < catalogueElements.length; j++) {
        if (!currentCheckboxDatas.every(e => catalogueElements[j].classList.contains(e))) continue;

        currentElementsToShow.push(catalogueElements[j]);
    }

    updateCatalogue();
}

function updateCatalogue() {
    if (currentCheckboxDatas.length == 0) {
        showAll();
        return;
    }

    hideAll();

    if (currentElementsToShow.length == 0) {
        for (var i = 0; i < noFilterElements.length; i++) {
            noFilterElements[i].style.display = 'block';
        }

        loadLanguagePref();
    }

    for (var i = 0; i < currentElementsToShow.length; i++) {
        currentElementsToShow[i].style.display = 'block';
    }
}

function showAll() {
    for (var i = 0; i < catalogueElements.length; i++) {
        catalogueElements[i].style.display = 'block';
    }

    for (var i = 0; i < noFilterElements.length; i++) {
        noFilterElements[i].style.display = 'none';
    }
}

function hideAll() {
    for (var i = 0; i < catalogueElements.length; i++) {
        catalogueElements[i].style.display = 'none';
    }
}