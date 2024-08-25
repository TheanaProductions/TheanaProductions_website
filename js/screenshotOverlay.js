document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlay-img');

    // Close overlay when clicking outside the image
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    // Close overlay when clicking on the image
    overlayImg.addEventListener('click', function(event) {
        if (event.target === overlayImg) {
            overlay.style.display = 'none';
        }
    });
});

function openOverlay(img)
{
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlay-img');

    overlay.style.display = 'flex';
    overlayImg.src = img;
}