let games = document.getElementsByClassName("game");
let platformDropdown = document.getElementById("platform");
let genreDropdown = document.getElementById("genre");
let priceDropdown = document.getElementById("price");

let currentPlatform = "all";
let currentgenre = "all";
let currentPrice = "all";

function updateShownElements()
{
    currentPlatform = platformDropdown.options[platformDropdown.selectedIndex].value;
    currentgenre = genreDropdown.options[genreDropdown.selectedIndex].value;
    currentPrice = priceDropdown.options[priceDropdown.selectedIndex].value;

    Array.prototype.forEach.call(games, function(game) {
        if (currentPlatform == "all" &&
            currentgenre == "all" &&
            currentPrice == "all"
            )
        {
            game.style.display = "block";
            return;
        }

        if ((currentPlatform == "all" || (currentPlatform != "all" && game.classList.contains(currentPlatform))) && (currentgenre == "all" || (currentgenre != "all" && game.classList.contains(currentgenre))) && (currentPrice == "all" || (currentPrice != "all" && game.classList.contains(currentPrice))))
        {
            game.style.display = "block";
            return;
        }

        game.style.display = "none";
    });
}