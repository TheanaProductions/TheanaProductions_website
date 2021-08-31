// Json file to intantiate the common elements of the website

add_logoSmall();
add_logoBig();

// Insantiate banner image
function add_logoSmall() {
    let logoSmall = document.createElement('img');
    logoSmall.src = 'images/logoSmall.png';
    logoSmall.id = 'img-small';
    document.getElementById('header').appendChild(logoSmall);
}

function add_logoBig() {
    let logoBig = document.createElement('img');
    logoBig.src = 'images/logoBig.png';s
    logoBig.id = 'img-big';
    document.getElementById('header').appendChild(logoBig);
}

// Instantiate header nav




