// Json file to instantiate the index elements

create_lastReleasedImg();

// instantiate the latest release from a database?

// Instantiate the twitter widget ?

// Instantiate last released Img
function create_lastReleasedImg() {

    let bannerLastReleasedDiv = document.createElement('div')
    {
        bannerLastReleasedDiv.className = 'imgSlideshow';
        bannerLastReleasedDiv.id = 'img1';
        document.getElementById('latestReleaseDiv').appendChild(bannerLastReleasedDiv);
    }

    let bannerLastReleased = document.createElement('img');
    bannerLastReleased.src = '../images/latestReleasesSlideshow/img1.png';
    bannerLastReleased.id = 'img-last-released';
    bannerLastReleased.onclick = function () {
        window.location.href = 'fairy_quest.html';
    }
    document.getElementById('img1').appendChild(bannerLastReleased);

    let bannerLastReleasedDiv2 = document.createElement('div')
    {
        bannerLastReleasedDiv2.className = 'imgSlideshow';
        bannerLastReleasedDiv2.id = 'img2';
        document.getElementById('latestReleaseDiv').appendChild(bannerLastReleasedDiv2);
    }

    let bannerLastReleased2 = document.createElement('img');
    bannerLastReleased2.src = '../images/latestReleasesSlideshow/img2.png';
    bannerLastReleased2.id = 'img-last-released';
    bannerLastReleased2.onclick = function () {
        window.location.href = 'apps.html';
    }
    document.getElementById('img2').appendChild(bannerLastReleased2);
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("imgSlideshow");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}