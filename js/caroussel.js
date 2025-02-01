let carousselImgs = document.getElementsByClassName("carousel-item");
let currentImgIndex = 0;

function nextItem()
{
    carousselImgs[currentImgIndex].classList.remove('active');

    currentImgIndex++;
    if (currentImgIndex >= carousselImgs.length)
        currentImgIndex = 0;

    carousselImgs[currentImgIndex].classList.add('active');
}

function previousItem()
{
    carousselImgs[currentImgIndex].classList.remove('active');

    currentImgIndex--;
    if (currentImgIndex < 0)
        currentImgIndex = carousselImgs.length - 1;

    carousselImgs[currentImgIndex].classList.add('active');
}