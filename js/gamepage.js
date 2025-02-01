const PLATFORM_PLAYSTORE = "playstore";
const PLATFORM_PLAYSTORE_TXT = "Play on Playstore";
const PLATFORM_ITCHIO = "itchio";
const PLATFORM_ITCHIO_TXT = "Play on Itch.io";
const PLATFORM_STEAM = "steam";
const PLATFORM_STEAM_TXT = "Play on Steam";

const games = {
    "hideandseek":
    {
        name: "Hide and Seek",
        rating: "3+",
        metaDesc: "Oh no! It seems you have lost your beloved plushies in a sea of pillows! Click on the pillows to break them and reveal the hidden treasures underneath. Will you manage to find all of your plushies?",
        desc: "<p>&emsp;&emsp;Oh no! It seems you have lost your beloved plushies in a sea of pillows! Click on the pillows to break them and reveal the hidden treasures underneath. Will you manage to find all of your plushies?</p><br/><p><i>Initially created for the Mini Jam 87 - Break</i></p>",
        screenshotsAmount: 4,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.HideAndSeek"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "2D Artist",
                name:
                [
                    "Arcodeprata"
                ]
            }
        ]
    },
    "classicsnake":
    {
        name: "Classic Snake",
        rating: "3+",
        metaDesc: "Need to pass the time? Our Classic Snake game got you! With it's simple controls, it's timeless competitive fun, and it's minimalistic visuals, this version of the well-known game will make any waiting time pass faster.",
        desc: "<p>&emsp;&emsp;Need to pass the time? Our Classic Snake game got you! With it's simple controls, it's timeless competitive fun, and it's minimalistic visuals, this version of the well-known game will make any waiting time pass faster.",
        screenshotsAmount: 2,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.ClassicSnake"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "2D Artist",
                name:
                [
                    "SinGala"
                ]
            }
        ]
    },
    "spacechicken":
    {
        name: "Space Chicken",
        rating: "3+",
        metaDesc: "Life as a chicken isn't easy... It is even less when you're an astronaut chicken, trying to collect planet samples while avoiding dangerous crushing blocks!",
        desc: "<p>&emsp;&emsp;Life as a chicken isn't easy... It is even less when you're an astronaut chicken, trying to collect planet samples while avoiding dangerous crushing blocks!",
        screenshotsAmount: 3,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.SpaceChicken"
            },
            {
                platform: PLATFORM_ITCHIO,
                name: PLATFORM_ITCHIO_TXT,
                link: "https://theana-productions.itch.io/space-chicken"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "2D Artist",
                name:
                [
                    "Arcodeprata"
                ]
            }
        ]
    },
    "legacypuzzle":
    {
        name: "Legacy Puzzle",
        rating: "3+",
        metaDesc: "Need a chill and relaxing break? Legacy Puzzle got you! With its numerous gorgeous oil paintings from a french artist, you're sure to calm your brain.",
        desc: "<p>&emsp;&emsp;Need a chill and relaxing break? Legacy Puzzle got you! With its numerous gorgeous oil paintings from a french artist, you're sure to calm your brain.<br/><br/><i>All the paintings are from François Poirel, a french painter. Please do not reuse those paintings without authorization and proper credits.</i>",
        screenshotsAmount: 4,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.LegacyPuzzle"
            },
            {
                platform: PLATFORM_ITCHIO,
                name: PLATFORM_ITCHIO_TXT,
                link: "https://theana-productions.itch.io/legacy-puzzle"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "Paintings",
                name:
                [
                    "François Poirel"
                ]
            }
            ,
            {
                title: "Font",
                name:
                [
                    "GGBotNet - \"Kaph Font\""
                ]
            },
            {
                title: "Music",
                name:
                [
                    "Dimitri Kovalchuk - \"Purple Horizon\""
                ]
            }
        ]
    },
    "leadthewayfullcollection":
    {
        name: "Lead the Way - Full Collection",
        rating: "3+",
        metaDesc: "Embark on an adventure with Bob, the timid but lovable blob, as they navigate through a mysterious maze in search of their lost partner. With limited visibility, you must guide Bob through 300 levels filled with twists and turns, avoiding the dangerous red blobs along the way.",
        desc: "<p>&emsp;&emsp;Embark on an adventure with Bob, the timid but lovable blob, as they navigate through a mysterious maze in search of their lost partner. With limited visibility, you must guide Bob through 300 levels filled with twists and turns, avoiding the dangerous red blobs along the way.</p><br/><p>&emsp;&emsp;<b><i>Lead the Way</i></b> is a charming and innovative maze game that is designed for players of all ages and abilities. Choose from multiple game modes, and enjoy a fun and challenging experience with friends and family!</p><br/><ul><li>300 levels</li><li>A level editor to create, share, and download original mazes</li><li>Multiple game modes - Solo, Co-op, PVP</li><li>Local multiplayer for up to 2 players</li><li>Customizable difficulty</li></ul>",
        screenshotsAmount: 5,
        videoLinks: 
        [
            "<iframe class=\"ytb_trailer\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/_-VhGdT52K0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
        ],
        downloads:
        [
            {
                platform: PLATFORM_STEAM,
                name: PLATFORM_STEAM_TXT,
                link: "https://store.steampowered.com/app/1865940/Lead_the_Way__Full_Collection/?snr=1_5_1100__1100&utm_source=steamwidget"
            },
            {
                platform: PLATFORM_ITCHIO,
                name: PLATFORM_ITCHIO_TXT,
                link: "https://theana-productions.itch.io/lead-the-way"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "2D Artist",
                name:
                [
                    "Arcodeprata",
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "French Translation",
                name:
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "Brazilian Portuguese Translation",
                name: 
                [
                    "Arcodeprata",
                    "Galahane Rouillé-Poirel (SinGala)",
                    "RaposoRockman"
                ]
            },
            {
                title: "Music",
                name:
                [
                    "Rizwan Ashraf - \"Free Music Tracks For Games\""
                ]
            }
        ]
    },
    "amindstal":
    {
        name: "Amindstal",
        rating: "3+",
        metaDesc: "Discover over a hundred of mental health affirmations to brighten your day and help you on your recovery path!",
        desc: "<p>&emsp;&emsp;Discover over a hundred of mental health affirmations to brighten your day and help you on your recovery path!<br/>Life as we know it is not always easy, and we know that too at Theana's. That's why we decided to create this cute little app for everyone needing a ray of light.</p><br/><br/><ul><li>Over 100 positive affirmations</li><li>No adds, no paywall, no subscription</li><li>2 languages: French and English</li>",
        screenshotsAmount: 2,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.Helioma.Amindstal"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "Font",
                name:
                [
                    "GGBotNet - \"Bad Comic\""
                ]
            },
            {
                title: "Music",
                name:
                [
                    "Alkakrab - \"Game Piano Music Pack\""
                ]
            },
            {
                title: "SFX",
                name:
                [
                    "Leohpaz - \"RPG Essentials SFX\""
                ]
            }
        ]
    },
    "hideandseekonebit":
    {
        name: "Hide and Seek - 1 bit",
        rating: "3+",
        metaDesc: "Find the hidden items in this chill luck-based game. Will you be lucky enough to find them all?",
        desc: "<p>&emsp;&emsp;Find the hidden items in this chill luck-based game. Will you be lucky enough to find them all?</p>",
        screenshotsAmount: 4,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.HideAndSeekOneBit"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "Visuals",
                name:
                [
                    "PiiiXL - \"1-Bit icons Part 1\"",
                    "PiiiXL - \"1-Bit Patterns and Tiles\""
                ]
            },
            {
                title: "Font",
                name:
                [
                    "Joeb Rogers - \"Bit Potion\""
                ]
            }
        ]
    },
    "hideandseekfood":
    {
        name: "Hide and Seek - Food",
        rating: "3+",
        metaDesc: "Find the hidden items in this chill luck-based game. Will you be lucky enough to find them all?",
        desc: "<p>&emsp;&emsp;Find the hidden items in this chill luck-based game. Will you be lucky enough to find them all?</p>",
        screenshotsAmount: 4,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.HideAndSeekFood"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "2D Artist",
                name:
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            }
        ]
    },
    "pridespacechicken":
    {
        name: "Pride Space Chicken",
        rating: "3+",
        metaDesc: "Life as a chicken isn't easy... It is even less when you're an astronaut chicken, trying to collect planet samples while avoiding dangerous crushing blocks!",
        desc: "<p>&emsp;&emsp;Life as a chicken isn't easy... It is even less when you're an astronaut chicken, trying to collect planet samples while avoiding dangerous crushing blocks!</p>",
        screenshotsAmount: 3,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.PrideSpaceChicken"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "2D Artist",
                name:
                [
                    "Arcodeprata"
                ]
            }
        ]
    },
    "classicsudoku":
    {
        name: "Classic Sudoku",
        rating: "3+",
        metaDesc: "Let yourself fall in love with our Classic Sudoku game. From beginner to advanced, have fun in our chill and minimalistic version of the popular game.",
        desc: "<p>&emsp;&emsp;Let yourself fall in love with our Classic Sudoku game. From beginner to advanced, have fun in our chill and minimalistic version of the popular game.</p>",
        screenshotsAmount: 4,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.ClassicSudoku"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "SFX",
                name: 
                [
                    "Dustyroom - \"FREE Casual Game SFX Pack\""
                ]
            },
            {
                title: "Music",
                name:
                [
                    "Kummelmusic - \"Lofi World Vol.1\""
                ]
            }
        ]
    },
    "sudokuchef":
    {
        name: "Sudoku Chef",
        rating: "3+",
        metaDesc: "Let yourself fall in love with our Sudoku game with a twist! From beginner to advanced, have fun in our chill and minimalistic version of the popular game.",
        desc: "<p>&emsp;&emsp;Let yourself fall in love with our Sudoku game with a twist! From beginner to advanced, have fun in our chill and minimalistic version of the popular game.</p>",
        screenshotsAmount: 4,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.SudokuChef"
            },
            {
                platform: PLATFORM_ITCHIO,
                name: PLATFORM_ITCHIO_TXT,
                link: "https://theana-productions.itch.io/sudoku-chef"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "Background Artist",
                name:
                [
                    "Noraneko Game - \"Anime Backgrounds\""
                ]
            },
            {
                title: "SFX",
                name: 
                [
                    "Dustyroom - \"FREE Casual Game SFX Pack\""
                ]
            },
            {
                title: "Music",
                name:
                [
                    "Kummelmusic - \"Lofi World Vol.1\""
                ]
            }
        ]
    },
    "destinycardtarot":
    {
        name: "Destiny's Card - Tarot",
        rating: "3+",
        metaDesc: "Get the answers you need with those quick and easy one-card tarot readings.",
        desc: "<p>&emsp;&emsp;Get the answers you need with those quick and easy one-card tarot readings.</p>",
        screenshotsAmount: 4,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.DestinysCardTarot"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            }
        ]
    },
    "fruitymemory":
    {
        name: "Fruity Memory",
        rating: "3+",
        metaDesc: "Enjoy a break and challenge yourself with infinite memory levels of growing difficulty.",
        desc: "<p>&emsp;&emsp;Enjoy a break and challenge yourself with infinite memory levels of growing difficulty.</p>",
        screenshotsAmount: 4,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.FruityMemory"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "Visuals",
                name:
                [
                    "GDS - Game Developer Studio.com"
                ]
            },
            {
                title: "SFX",
                name: 
                [
                    "Dustyroom - \"FREE Casual Game SFX Pack\""
                ]
            }
        ]
    },
    "fishymemory":
    {
        name: "Fishy Memory",
        rating: "3+",
        metaDesc: "Enjoy a break and challenge yourself with infinite memory levels of growing difficulty.",
        desc: "<p>&emsp;&emsp;Enjoy a break and challenge yourself with infinite memory levels of growing difficulty.</p>",
        screenshotsAmount: 4,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.FishyMemory"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "Visuals",
                name:
                [
                    "GDS - Game Developer Studio.com"
                ]
            },
            {
                title: "SFX",
                name: 
                [
                    "Dustyroom - \"FREE Casual Game SFX Pack\""
                ]
            },
            {
                title: "Music",
                name:
                [
                    "Roy Nisimov - \"Fishy Memory (Original Soundtrack)\""
                ]
            }
        ]
    },
    "ballmemory":
    {
        name: "Ball Memory",
        rating: "3+",
        metaDesc: "Enjoy a break and challenge yourself with infinite memory levels of growing difficulty.",
        desc: "<p>&emsp;&emsp;Enjoy a break and challenge yourself with infinite memory levels of growing difficulty.</p>",
        screenshotsAmount: 4,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.BallMemory"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "Visuals",
                name:
                [
                    "GDS - Game Developer Studio.com"
                ]
            },
            {
                title: "SFX",
                name: 
                [
                    "Dustyroom - \"FREE Casual Game SFX Pack\""
                ]
            }
        ]
    },
    "emotionmemory":
    {
        name: "Emotion Memory",
        rating: "3+",
        metaDesc: "Enjoy a break and challenge yourself with infinite memory levels of growing difficulty.",
        desc: "<p>&emsp;&emsp;Enjoy a break and challenge yourself with infinite memory levels of growing difficulty.</p>",
        screenshotsAmount: 4,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.EmotionsMemory"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "Visuals",
                name:
                [
                    "GDS - Game Developer Studio.com"
                ]
            },
            {
                title: "SFX",
                name: 
                [
                    "Dustyroom - \"FREE Casual Game SFX Pack\""
                ]
            }
        ]
    },
    "pixelymemory":
    {
        name: "Pixely Memory",
        rating: "3+",
        metaDesc: "Enjoy a break and challenge yourself with infinite memory levels of growing difficulty.",
        desc: "<p>&emsp;&emsp;Enjoy a break and challenge yourself with infinite memory levels of growing difficulty.</p>",
        screenshotsAmount: 4,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.PixelyMemory"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "Visuals",
                name:
                [
                    "Arcodeprata",
                    "GDS - Game Developer Studio.com"
                ]
            },
            {
                title: "SFX",
                name: 
                [
                    "Dustyroom - \"FREE Casual Game SFX Pack\""
                ]
            }
        ]
    },
    "pridememory":
    {
        name: "Pride Memory",
        rating: "3+",
        metaDesc: "Enjoy a break and challenge yourself with infinite memory levels of growing difficulty.",
        desc: "<p>&emsp;&emsp;Enjoy a break and challenge yourself with infinite memory levels of growing difficulty.</p>",
        screenshotsAmount: 4,
        videoLinks: [],
        downloads:
        [
            {
                platform: PLATFORM_PLAYSTORE,
                name: PLATFORM_PLAYSTORE_TXT,
                link: "https://play.google.com/store/apps/details?id=com.TheanaProductions.PrideMemory"
            }
        ],
        credits: 
        [
            {
                title: "Developer",
                name: 
                [
                    "Galahane Rouillé-Poirel (SinGala)"
                ]
            },
            {
                title: "SFX",
                name: 
                [
                    "Dustyroom - \"FREE Casual Game SFX Pack\""
                ]
            },
            {
                title: "Music",
                name:
                [
                    "Roy Nisimov - \"Fishy Memory (Original Soundtrack)\""
                ]
            }
        ]
    }
}

let infosSection = document.getElementById("infos_container");
let summarySection = document.getElementById("section_summary");
let screenshotsSection = document.getElementById("screenshots");
let videosSection = document.getElementById("videos");
let creditsSection = document.getElementById("section_credits");

function initializeGameDatas(gameId)
{
    let gameDatas = games[gameId];

    if (gameDatas == undefined) return;

    // Metadatas
    const metas = document.getElementsByTagName('meta');

    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === "description")
            metas[i].setAttribute('content', gameDatas.metaDesc);
        else if (metas[i].getAttribute('property') === "og:title")
            metas[i].setAttribute('content', "Theana Productions - " + gameDatas.name);
        else if (metas[i].getAttribute('property') === "og:url")
            metas[i].setAttribute('content', "https://theanaproductions.com/games/" + gameId + ".html");
        else if (metas[i].getAttribute('property') === "og:image")
            metas[i].setAttribute('content', "https://theanaproductions.com/images/games/" + gameId + "/logo.png");
        else if (metas[i].getAttribute('property') === "og:site_name")
            metas[i].setAttribute('content', "Theana Productions - " + gameDatas.name);
    }
    document.title = "Theana Productions - " + gameDatas.name;

    // Infos
    document.getElementById("title").innerHTML = gameDatas.name;

    gameDatas.downloads.forEach(data => {
        let link = document.createElement("a");
        link.href = data.link;
        infosSection.appendChild(link);

        let button = document.createElement("button");
        link.appendChild(button);

        let icon = document.createElement("img");
        icon.src = "/images/socials/logo_" + data.platform + ".png";
        button.appendChild(icon);

        let text = document.createElement("p");
        text.innerHTML = data.name;
        button.appendChild(text);
    });

    // Summary
    summarySection.innerHTML += gameDatas.desc;

    // Screenshots
    for (let i = 1; i <= gameDatas.screenshotsAmount; i++)
    {
        let carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        if (i == 1)
            carouselItem.classList.add("active");

        screenshotsSection.appendChild(carouselItem);

        let img = document.createElement("img");
        img.src = "/images/games/" + gameId + "/" + i + ".png";
        img.alt = gameDatas.name + " Preview - Theana Productions";
        carouselItem.appendChild(img);
    }

    if (gameDatas.screenshotsAmount <= 0)
    {
        document.getElementById("section_screenshots").style.display = "none";
    }

    // Videos
    gameDatas.videoLinks.forEach(videoDatas => {
        videosSection.innerHTML += videoDatas;
    });

    if (gameDatas.videoLinks.length <= 0)
        document.getElementById("section_videos").style.display = "none";

    // Credits
    gameDatas.credits.forEach(creditDatas => {
        let title = document.createElement("h5");
        title.innerHTML = creditDatas.title;
        creditsSection.appendChild(title);  
        
        creditDatas.name.forEach(name => {
            let creditName = document.createElement("p");
            creditName.innerHTML = name;
            creditsSection.appendChild(creditName);
        });
    });
}