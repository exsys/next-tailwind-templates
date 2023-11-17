import { GamePage } from "@/interfaces/game-page";
import { ALLGAMES } from "./games";

export const GAMEPAGES: GamePage[] = [
    {
        url: "neon-rush",
        hero: "/images/neon-rush-2.webp",
        bgImg: "/images/neon-rush-5.webp",
        carouselImgs: [
            "/images/neon-rush-4.webp",
            "/images/neon-rush-1.webp",
            "/images/neon-rush-5.webp",
            "/images/neon-rush-6.webp",
        ],
        showcaseImg: "/images/neon-rush-5.webp",
        overview: "Neon Rush is an electrifying and adrenaline-pumping arcade racing game that catapults players into a futuristic world of speed, neon lights, and high-stakes competition. Developed by Lumina Games, this thrilling title offers an exhilarating experience, where you'll harness cutting-edge technology, master high-speed maneuvers, and race against the clock in a neon-drenched metropolis.",
        about: {
            description: "Developed by Lumina Games, this thrilling title offers an exhilarating experience, where you'll harness cutting-edge technology, master high-speed maneuvers, and race against the clock in a neon-drenched metropolis.",
            items: [
                { name: "Futuristic Racing", description: "Dive into the neon-drenched streets of a futuristic metropolis, where gravity-defying vehicles and high-speed races are the norm. Blaze through sprawling cityscapes, narrow alleys, and vertigo-inducing skyways as you compete against the best racers in the world." },
                { name: "Thrilling Race Modes", description: 'Neon Rush offers a variety of exhilarating race modes to test your skills and reflexes. From high-speed time trials and gravity-defying stunts to pulse-pounding elimination races, the game keeps you on the edge of your seat.'},
                { name: "Cutting-Edge Vehicles", description: "Choose from a roster of sleek and customizable vehicles, each equipped with unique abilities and handling characteristics. Upgrade your ride with advanced technology, boosters, and skins to gain the upper hand in races." },
                { name: "Stunning Visuals", description: "Immerse yourself in a visually stunning world of neon lights, futuristic architecture, and dynamic environments. The game's mesmerizing graphics and vibrant aesthetics create a sensory experience like no other." },
                { name: "Multiplayer Mayhem", description: 'Take your racing skills online and challenge friends and players from around the world in intense multiplayer races. Prove your dominance on the leaderboards and become a legend in the Neon Rush community.' },
                { name: "Soundtrack of the Future", description: "Groove to an electrifying soundtrack that perfectly complements the high-speed action. The game's music and sound effects create an immersive audio experience that enhances the adrenaline rush of every race." },
            ]
        },
        points: [
            { title: "Starting Fresh", description: "Begin by reviving your grandfather's rundown garage.", imgSrc: "/images/neon-rush-2.webp" },
            { title: "Car Races", description: "Win car races to unlock upgrades and different parts of the world.", imgSrc: "/images/neon-rush-7.webp" },
            { title: "Mining Adventure", description: "Gather valuable materials for crafting and car upgrades.", imgSrc: "/images/neon-rush-8.webp" },
            { title: "Community Bonds", description: "Strengthening bonds is vital for your network's success.", imgSrc: "/images/neon-rush-4.webp" },
        ],
        card: {
            imgSrc: "/images/neon-rush-9.webp",
            title: "Neon lights await. Start your engines!",
        },
        gameInfo: ALLGAMES[0],
    },
    {
        url: "mystic-isles",
        hero: "/images/mystic-isles-1.webp",
        bgImg: "/images/mystic-4.webp",
        carouselImgs: [
            "/images/mystic-isles-2.webp",
            "/images/mystic-isles-1.webp",
            "/images/mystic-4.webp",
            "/images/mystic-3.webp",
        ],
        showcaseImg: "/images/mystic-4.webp",
        overview: "Mystic Isles is a captivating and enchanting fantasy RPG that transports players to a world brimming with magic, mythical creatures, and epic adventures. Developed by Enchanted Realms Studios, this immersive title offers an opportunity to embark on a heroic journey, explore ancient mysteries, and forge your own destiny in a land steeped in legend.",
        about: {
            description: "Developed by Enchanted Realms Studios, this immersive title offers an opportunity to embark on a heroic journey, explore ancient mysteries, and forge your own destiny in a land steeped in legend.",
            items: [
                { name: "Fantasy Realm", description: "Immerse yourself in a lush and fantastical world where magic flows like a river and ancient secrets linger in every corner. From sprawling elven forests to treacherous dragon lairs, Mystic Isles presents a richly detailed and meticulously crafted realm awaiting your exploration." },
                { name: "Epic Quests", description: "Embark on epic quests that transcend the boundaries of time and space. Traverse intricate storylines, encounter memorable characters, and make choices that shape not only your character's fate but the very fabric of the world." },
                { name: "Mythical Creatures", description: "Encounter a diverse array of mythical creatures, from majestic dragons and wise elves to mischievous faeries and fearsome giants. Each creature boasts its own lore and challenges, offering both allies and adversaries on your journey." },
                { name: "Character Development", description: "Create your hero and shape their destiny. Choose from various races, classes, and abilities, and watch your character evolve as you gain experience and unlock new powers. Your choices in character development impact your playstyle and role in the world." },
                { name: "Dynamic Combat", description: "Engage in real-time, dynamic combat against foes both mundane and otherworldly. Utilize a combination of melee, ranged, and magical abilities to overcome your adversaries. Strategic thinking and quick reflexes are your greatest assets." },
                { name: "Enchantment and Crafting", description: "Delve into the art of enchantment and crafting, allowing you to forge powerful weapons and create magical items. Customize your gear to suit your character's strengths and weaknesses, enhancing your chances of success." },
                { name: "Companions", description: "Form alliances with a diverse cast of companions, each with their own personalities and motivations. Choose your allies wisely, as their loyalty and abilities can greatly impact your journey." },
            ]
        },
        points: [
            { title: "Epic Quests", description: "Immerse yourself in a fantastical World with Magic.", imgSrc: "/images/mystic-isles-2.webp" },
            { title: "Mythical", description: "Encounter a diverse array of Mythical Creatures.", imgSrc: "/images/mystic-2.webp" },
            { title: "Dynamic Combat", description: "Engage in dynamic combat against otherworldly foes.", imgSrc: "/images/mystic-isles-1.webp" },
            { title: "Enchantments", description: "Delve into the art of enchantment and crafting.", imgSrc: "/images/mystic-3.webp" },
        ],
        card: {
            imgSrc: "/images/mystic-1.webp",
            title: "Your mystical journey begins now!",
        },
        gameInfo: ALLGAMES[1],
    },
    {
        url: "cosmic-plane",
        hero: "/images/cosmic-plane-1.webp",
        bgImg: "/images/cosmic-5.webp",
        carouselImgs: [
            "/images/cosmic-plane-2.webp",
            "/images/cosmic-plane-1.webp",
            "/images/cosmic-5.webp",
            "/images/cosmic-4.webp",
        ],
        showcaseImg: "/images/cosmic-5.webp",
        overview: "Cosmic Survival is a mesmerizing and expansive space exploration and survival game that propels players into the boundless depths of the cosmos. Developed by Celestial Studios, this captivating title invites you to embark on a profound journey through the universe, where every decision you make and resource you manage shapes your fate in the unforgiving embrace of outer space.",
        about: {
            description: "Developed by Celestial Studios, this captivating title invites you to embark on a profound journey through the universe, where every decision you make and resource you manage shapes your fate in the unforgiving embrace of outer space.",
            items: [
                { name: "Interstellar Exploration", description: "Cosmic Survival invites you to embark on a celestial odyssey of unparalleled scope. Traverse a sprawling, procedurally generated universe where each star system is a unique canvas of cosmic wonders. Explore alien worlds, map uncharted celestial bodies, and unveil the enigmas concealed within the cosmic expanse." },
                { name: "Survival Challenge", description: "In the vast, unforgiving emptiness of space, every choice carries the weight of survival. Meticulously manage your limited resources, monitor oxygen levels, and safeguard your spacecraft against the harsh rigors of the cosmic void. Navigate through perilous asteroid fields, confront unpredictable solar flares, and weather celestial hazards that threaten both your mission and your existence." },
                { name: "Craft Your Spacecraft", description: "Assemble and customize your spacecraft, molding it to suit the unique demands of your interstellar journey. Tailor the layout of your vessel, install advanced technology, and fortify its capabilities as you venture deeper into the cosmos. Your spacecraft isn't just your vessel; it's your sanctuary and your shield against the unforgiving environment of space." },
                { name: "Cosmic Anomalies", description: "Encounter the inexplicable and the extraordinary as you navigate through enigmatic cosmic anomalies that challenge the very laws of physics. Solve intricate puzzles, unlock secrets, and traverse the enigmatic domains of wormholes, traverse the event horizon of black holes, and plunge into the unpredictable currents of temporal rifts that challenge your understanding of space-time." },
                { name: "Alien Encounters", description: "Forge alliances, negotiate treaties, or navigate the complexities of interstellar diplomacy as you come face to face with a diverse array of extraterrestrial civilizations. Each species boasts its own unique culture, technology, and intentions. Your ability to engage in diplomacy or defend your mission will be pivotal in your cosmic journey." },
                { name: "Resource Scarcity", description: "Scrutinize and ration your dwindling resources with precision as you voyage through the cosmos. Scavenge for vital supplies, mine celestial bodies for precious minerals, and engage in interstellar trade to sustain your ship and crew. Your choices in resource management will define your chances of survival and the outcome of your mission." },
                { name: "Dynamic Universe", description: "Witness the grandeur of the cosmos come to life with realistic celestial mechanics. Observe planets in constant motion, stars evolving over eons, and cosmic phenomena unfolding in real-time. This dynamic universe serves as a constantly changing backdrop to your interstellar adventures, offering both awe-inspiring beauty and formidable challenges." },
            ]
        },
        points: [
            { title: "Survival Challenge", description: "In the vast, unforgiving emptiness of space, every choice carries the weight of survival.", imgSrc: "/images/cosmic-plane-2.webp" },
            { title: "Interstellar Exploration", description: "Embark on a celestial odyssey of unparalleled scope.", imgSrc: "/images/cosmic-3.webp" },
            { title: "Dynamic Universe", description: "Witness the grandeur of the cosmos come to life with realistic celestial mechanics.", imgSrc: "/images/cosmic-2.webp" },
            { title: "Spacecrafts", description: "Assemble and customize your personal spacecraft.", imgSrc: "/images/cosmic-4.webp" },
        ],
        card: {
            imgSrc: "/images/cosmic-1.webp",
            title: "Your spacecraft is ready, launch your adventure today!",
        },
        gameInfo: ALLGAMES[2],
    },
    {
        url: "dragon-roar",
        hero: "/images/dragon-roar-1.webp",
        bgImg: "/images/dragon-5.webp",
        carouselImgs: [
            "/images/dragon-6.webp",
            "/images/dragon-roar-1.webp",
            "/images/dragon-5.webp",
            "/images/dragon-4.webp",
        ],
        showcaseImg: "/images/dragon-5.webp",
        overview: "Dragon's Roar is a sweeping and immersive high-fantasy RPG that transports players to a realm steeped in magic, teeming with legendary dragons, and brimming with epic quests. Developed by Mythic Realms, this enchanting title unfurls within a sprawling, meticulously crafted fantasy world where heroes rise to face formidable challenges, uncover hidden lore, and vanquish ancient foes.",
        about: {
            description: "Dragon's Roar is a grandiose and immersive high-fantasy RPG that transports players to a realm teeming with magic, legendary dragons, and epic quests. Developed by Mythic Realms, this enchanting title unfolds within a sprawling, meticulously crafted fantasy world where heroes rise to face formidable challenges and vanquish ancient foes.",
            items: [
                { name: "Epic Fantasy World", description: "Step into a vibrant and expansive fantasy world that pulses with life. From the majestic spires of enchanted cities to the untamed wilderness of mystical forests, every locale is an invitation to adventure and exploration." },
                { name: "Dragon Encounters", description: "The fate of the realm hinges on your courage as you confront awe-inspiring dragons. These majestic and fearsome creatures are not mere adversaries but formidable foes with their own stories, abilities, and unique weaknesses. Engage in thrilling battles, gather legendary dragon-slaying gear, and rise to the challenge of protecting your world." },
                { name: "Character Development", description: "Dragon's Roar empowers you to forge your own path. Create a hero tailored to your vision, selecting from a diverse array of races, classes, and abilities. As you progress, unlock new skills and talents to become a force to be reckoned with in the ever-evolving story." },
                { name: "Epic Quests", description: "Embark on an odyssey of unprecedented depth and scale. Engage with intricate storylines, face moral dilemmas, and make choices that have far-reaching consequences, not only for your character but for the world itself. The destiny of nations rests upon your shoulders." },
                { name: "Companions", description: "Form bonds with a captivating cast of companions, each harboring their own dreams, motivations, and pasts. Assemble a party of adventurers, each contributing their unique strengths to your journey. Forge unbreakable friendships or test your leadership skills as you navigate the complexities of camaraderie." },
                { name: "Crafting and Enchantment", description: "Immerse yourself in the art of crafting, forging powerful weapons, and imbuing magical items with potent enchantments. Tailor your gear to match your playstyle, preparing yourself to face even the most formidable adversaries with confidence." },
                { name: "Dynamic Environments", description: "The world of Dragon's Roar breathes with life. Experience a dynamic environment governed by a shifting day-night cycle, changing weather patterns, and ecosystems that respond realistically to your actions. Adapt your strategies to these ever-evolving conditions." },
            ]
        },
        points: [
            { title: "Epic Fantasy World", description: "Step into a vibrant and expansive fantasy world that pulses with life.", imgSrc: "/images/dragon-roar-2.webp" },
            { title: "Epic Quests", description: "Embark on an odyssey of unprecedented depth and scale.", imgSrc: "/images/dragon-3.webp" },
            { title: "Companions", description: "Form bonds with a captivating cast of companions.", imgSrc: "/images/dragon-2.webp" },
            { title: "Fantasy", description: "Experience a dynamic environment that respond realistically to your actions.", imgSrc: "/images/dragon-6.webp" },
        ],
        card: {
            imgSrc: "/images/dragon-1.webp",
            title: "The dragons beckon, and the realm awaits your valor. Your epic odyssey begins now!",
        },
        gameInfo: ALLGAMES[3],
    },
    {
        url: "lost-in-time",
        hero: "/images/lost-in-time-2.webp",
        bgImg: "/images/lost-4.webp",
        carouselImgs: [
            "/images/lost-5.webp",
            "/images/lost-in-time-2.webp",
            "/images/lost-4.webp",
            "/images/lost-3.webp",
        ],
        showcaseImg: "/images/lost-4.webp",
        overview: "Lost in Time is an exhilarating time-travel adventure game that will take players on an epic journey through the ages. Developed by Temporal Studios, this captivating title combines intricate storytelling, challenging puzzles, and breathtaking visuals to create an unforgettable gaming experience.",
        about: {
            description: "Crafted by the ingenious minds at Temporal Studios, this extraordinary title marries masterful storytelling, brain-teasing puzzles, and breathtaking visuals into a seamless gaming experience.",
            items: [
                { name: "Time-Travel Mechanics", description: "Armed with a mysterious time-travel device, you'll embark on a transcendent journey through the annals of history. From the enigmatic realms of ancient civilizations to the awe-inspiring landscapes of a technologically advanced future, the power to manipulate time is yours to wield." },
                { name: "Intriguing Storyline", description: "Lost in Time boasts a sprawling, intricately woven narrative that unfurls with every decision you make. As a time traveler, you'll confront dilemmas that transcend the boundaries of time, shaping the course of history itself. Your choices are the threads that weave the tapestry of this epic tale." },
                { name: "Puzzle Solving", description: "Throughout your temporal odyssey, you'll encounter an array of fiendishly clever puzzles and riddles. These challenges will test your intellect, creativity, and lateral thinking, offering a rewarding sense of accomplishment with each conquered enigma." },
                { name: "Exploration", description: "Traverse diverse and meticulously crafted environments, each meticulously designed to immerse you in its historical or futuristic setting. Wander the bustling streets of ancient Rome, explore the mystical ruins of a long-lost civilization, and gaze upon the awe-inspiring skyline of a metropolis yet to be." },
                { name: "Dynamic Characters", description: "The time-stream is populated with a captivating cast of characters, including historical figures and intriguing individuals unique to each era. Engage in dialogue, form alliances, and unravel the enigmatic stories that define their existence." },
                { name: "Time-Paradox Dilemmas", description: "Your actions in the past have far-reaching consequences that ripple through time. The decisions you make may reverberate across centuries, altering the course of entire civilizations. The butterfly effect is in full force, challenging you to weigh your choices with care and foresight." },
                { name: "Immersive Graphics", description: "Lost in Time treats your senses to a visual feast of unparalleled realism. Each time period is meticulously recreated with lifelike detail, drawing you deeper into the heart of the time-travel experience." },
            ]
        },
        points: [
            { title: "Immersive Graphics", description: "Treat your senses to a visual feast of unparalleled realism.", imgSrc: "/images/lost-in-time-1.webp" },
            { title: "Exploration", description: "Traverse diverse and meticulously crafted environments.", imgSrc: "/images/lost-5.webp" },
            { title: "Time-Paradox", description: "Your actions in the past have far-reaching consequences that ripple through time.", imgSrc: "/images/lost-2.webp" },
            { title: "Dynamic", description: "The time-stream is populated with a captivating cast of characters.", imgSrc: "/images/lost-1.webp" },
        ],
        card: {
            imgSrc: "/images/lost-1.webp",
            title: "Lost in Time awaits your arrival! Join Now!",
        },
        gameInfo: ALLGAMES[4],
    },
    {
        url: "stardew-valley",
        hero: "/images/stardew-valley-1.webp",
        bgImg: "/images/stardew-4.webp",
        carouselImgs: [
            "/images/stardew-5.webp",
            "/images/stardew-valley-1.webp",
            "/images/stardew-4.webp",
            "/images/stardew-3.webp",
        ],
        showcaseImg: "/images/stardew-4.webp",
        overview: "Stardew Valley is a heartwarming and critically acclaimed indie farming simulation game that invites players to escape the chaos of modern life and embrace the tranquility of rural living. Developed by ConcernedApe, this pixel-art masterpiece offers an enchanting virtual getaway where you can build your dream farm, foster meaningful relationships, and craft your own story within the picturesque Pelican Town. With its tranquil soundtrack, delightful pixel art, and a world bursting with charm, Stardew Valley is a love letter to the joys of rural life. Whether you're a seasoned gamer or new to gaming, this game provides a soothing and immersive experience that encourages you to create your own narrative, build your dream farm, and find happiness in the little things.",
        about: {
            description: "In Stardew Valley, you inherit a neglected farm from your grandfather, and it's up to you to breathe life back into this once-thriving piece of land. As you settle into your new rural life, you'll discover that the valley is brimming with opportunities and surprises. Here's what you can expect:",
            items: [
                { name: "Farming", description: "The core of Stardew Valley revolves around farming. Plant a wide variety of crops, tend to your livestock, and design your farm to your heart's content. Whether you're cultivating fields of vibrant crops or raising happy, clucking chickens, the joy of watching your farm flourish is unparalleled." },
                { name: "Relationships", description: "Pelican Town is teeming with unique and endearing characters. Get to know your neighbors, participate in town events, and even find love as you build deep, interpersonal connections. Share stories, exchange gifts, and see how your relationships evolve over time." },
                { name: "Exploration", description: "Beyond your farm, the valley is rich in secrets waiting to be uncovered. Venture into mysterious caves, battle monsters, and mine for precious resources like ores and gems. Each day brings new opportunities for exploration and adventure." },
                { name: "Crafting", description: "Develop your crafting skills to create tools, machines, and artisanal goods. As you master the art of crafting, you'll unlock new possibilities for improving your farm and contributing to the community." },
                { name: "Seasonal Events", description: "Pelican Town comes alive with seasonal festivals, contests, and celebrations. Engage in activities like the Egg Festival, Stardew Valley Fair, and more, each offering unique challenges and rewards." },
            ]
        },
        points: [
            { title: "Starting Fresh", description: "Begin by reviving your grandfather's rundown farm.", imgSrc: "/images/stardew-2.webp" },
            { title: "Harvest Festival", description: "Growing crops and gathering festive ingredients.", imgSrc: "/images/stardew-5.webp" },
            { title: "Mining Adventure", description: "Gather valuable materials for crafting and farm upgrades.", imgSrc: "/images/stardew-valley-1.webp" },
            { title: "Community Bonds", description: "Strengthening these bonds is vital for your farm's success.", imgSrc: "/images/stardew-1.webp" },
        ],
        card: {
            imgSrc: "/images/stardew-1.webp",
            title: "Ready to escape to the idyllic world of Stardew Valley?",
        },
        gameInfo: ALLGAMES[5],
    },
];