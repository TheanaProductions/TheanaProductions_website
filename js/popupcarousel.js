var popUpElement = document.getElementById('popUp');
var imgPopUp = popUpElement.firstElementChild;

var isShown = false;
var justClicked = false;

function show(imgToShow) {

    if (isShown) return;

    //var image = document.getElementById('chiken1');
    //var source = image.src;
    //window.open(source);

    justClicked = true;
    popUpElement.style.display = 'block';
    imgPopUp.src = imgToShow.src;
    isShown = true;
}

function hide() {
    if (justClicked) {
        justClicked = false;
        return;
    }

    if (!isShown) return;

    popUpElement.style.display = 'none';
    isShown = false;
}