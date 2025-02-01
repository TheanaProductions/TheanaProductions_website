const PLATFORM_PLAYSTORE = "playstore";
const PLATFORM_ITCHIO = "itchio";
const PLATFORM_STEAM = "steam";

const GENRE_ARCADE = "arcade";
const GENRE_CASUAL = "casual";
const GENRE_LUCK = "luck";
const GENRE_REFLEXION = "reflexion";
const GENRE_OTHER = "other";

const PRICE_FREE = "free";
const PRICE_PAID = "paid";

let gamesDatas = 
[
    {
        name: "Price Space Chicken", 
        id: "pridespacechicken", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_ARCADE
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE
        ]
    },
    {
        name: "Price Memory", 
        id: "pridememory", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_REFLEXION,
                GENRE_LUCK
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE
        ]
    },
    {
        name: "Classic Sudoku", 
        id: "classicsudoku", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_REFLEXION
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE
        ]
    },
    {
        name: "Hide and Seek - Food", 
        id: "hideandseekfood", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_LUCK,
                GENRE_CASUAL
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE
        ]
    },
    {
        name: "Sudoku Chef", 
        id: "sudokuchef", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_REFLEXION
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE,
            PLATFORM_ITCHIO
        ]
    },
    {
        name: "Destiny's Card - Tarot", 
        id: "destinycardtarot", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_OTHER
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE
        ]
    },
    {
        name: "Pixely Memory", 
        id: "pixelymemory", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_REFLEXION,
                GENRE_LUCK
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE
        ]
    },
    {
        name: "Emotions Memory", 
        id: "emotionmemory", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_REFLEXION,
                GENRE_LUCK
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE
        ]
    },
    {
        name: "Ball Memory", 
        id: "ballmemory", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_REFLEXION,
                GENRE_LUCK
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE
        ]
    },
    {
        name: "Fishy Memory", 
        id: "fishymemory", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_REFLEXION,
                GENRE_LUCK
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE
        ]
    },
    {
        name: "Fruity Memory", 
        id: "fruitymemory", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_REFLEXION,
                GENRE_LUCK
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE
        ]
    },
    {
        name: "Hide and Seek - 1bit", 
        id: "hideandseekonebit", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_CASUAL,
                GENRE_LUCK
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE
        ]
    },
    {
        name: "Amindstal", 
        id: "amindstal", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_OTHER
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE
        ]
    },
    {
        name: "Lead the Way - Full Collection", 
        id: "leadthewayfullcollection", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_REFLEXION
            ],
            price: PRICE_PAID
        },
        platforms: 
        [
            PLATFORM_STEAM,
            PLATFORM_ITCHIO
        ]
    },
    {
        name: "Legacy Puzzle", 
        id: "legacypuzzle", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_REFLEXION
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE,
            PLATFORM_ITCHIO
        ]
    },
    {
        name: "Space Chicken", 
        id: "spacechicken", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_ARCADE
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE,
            PLATFORM_ITCHIO
        ]
    },
    {
        name: "Classic Snake", 
        id: "classicsnake", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_ARCADE
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE
        ]
    },
    {
        name: "Hide and Seek", 
        id: "hideandseek", 
        active: true,
        tags: 
        {
            genre:
            [
                GENRE_LUCK,
                GENRE_CASUAL
            ],
            price: PRICE_FREE
        },
        platforms: 
        [
            PLATFORM_PLAYSTORE
        ]
    }
];

let gameGrid = document.getElementById("gamesgrid");

function instantiateGames(maxAmount)
{
    if (maxAmount <= 0)
        maxAmount = gamesDatas.length;

    for (let i = 0; i < maxAmount; i++)
    {
        let gameContainer = document.createElement("div");
        gameContainer.classList.add("game");

        gamesDatas[i].tags.genre.forEach(genre => {
            gameContainer.classList.add(genre);
        });

        gameContainer.classList.add(gamesDatas[i].tags.price);

        gameGrid.appendChild(gameContainer);

        let link = document.createElement("a");
        link.href = `/games/${gamesDatas[i].id}.html`;
        gameContainer.appendChild(link);

        let img = document.createElement("img");
        img.src = `/images/games/${gamesDatas[i].id}/logo.png`;
        img.alt = `${gamesDatas[i].name}`;
        link.appendChild(img);

        let title = document.createElement("h5");
        title.innerHTML = `${gamesDatas[i].name}`
        gameContainer.appendChild(title);

        let platformsContainer = document.createElement("div");
        platformsContainer.classList.add("platforms_icons");
        gameContainer.appendChild(platformsContainer);

        gamesDatas[i].platforms.forEach(platform => {
            let platformImg = document.createElement("img");
            platformImg.src = `/images/socials/logo_${platform}.png`;
            platformsContainer.appendChild(platformImg);

            gameContainer.classList.add(platform);
        });
    }
}