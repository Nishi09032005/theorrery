const questions = {
    easy: [
        {
            question: "What is the closest planet to the Sun?",
            options: ["Earth", "Mars", "Mercury", "Venus"],
            answer: 2, // Index of the correct answer
            explanation: "Mercury is the closest planet to the Sun."
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: 1,
            explanation: "Mars is known as the Red Planet due to its reddish appearance."
        },
        {
            question: "Which planet has the most extensive atmosphere?",
            options: ["Mercury", "Venus", "Earth", "Mars"],
            answer: 1,
            explanation: "Venus has a thick atmosphere composed mainly of carbon dioxide, with clouds of sulfuric acid."
        },
        {
            question: "What is the term for a lunar eclipse?",
            options: ["When the Earth casts a shadow on the Moon", "When the Moon casts a shadow on the Earth", "When the Sun blocks the Moon", "When the Earth passes between the Sun and Moon"],
            answer: 0,
            explanation: "A lunar eclipse occurs when the Earth passes between the Sun and the Moon, casting a shadow on the Moon."
        },
        {
            question: "What do we call the layer of gases surrounding a planet?",
            options: ["Atmosphere", "Magnetosphere", "Lithosphere", "Hydrosphere"],
            answer: 0,
            explanation: "The layer of gases surrounding a planet is called its atmosphere."
        },
        {
            question: "Which planet has a moon named Titan?",
            options: ["Mars", "Jupiter", "Saturn", "Uranus"],
            answer: 2,
            explanation: "Titan is the largest moon of Saturn and is known for its thick atmosphere."
        },
        {
            question: "What is the brightest object in the night sky after the Moon?",
            options: ["Jupiter", "Mars", "Sirius", "Venus"],
            answer: 3,
            explanation: "Venus is often the brightest object in the night sky after the Moon, sometimes called the Evening Star."
        },
        {
            question: "What do we call a star that suddenly increases in brightness?",
            options: ["Supernova", "Nova", "Meteor", "Quasar"],
            answer: 1,
            explanation: "A nova is a star that suddenly becomes much brighter and then gradually returns to its original state."
        },
        {
            question: "Which planet has the strongest magnetic field?",
            options: ["Earth", "Jupiter", "Saturn", "Neptune"],
            answer: 1,
            explanation: "Jupiter has the strongest magnetic field of any planet in our solar system."
        },
        {
            question: "Which is the largest moon of Jupiter?",
            options: ["Titan", "Io", "Europa", "Ganymede"],
            answer: 3,
            explanation: "Ganymede is the largest moon of Jupiter and is also the largest moon in the solar system."
        },
        {
            question: "What is the Kuiper Belt?",
            options: ["A region of asteroids", "A region of comets", "A region of gas giants", "A region of rocky planets"],
            answer: 1,
            explanation: "The Kuiper Belt is a region beyond Neptune filled with icy bodies and comets."
        },
        {
            question: "What do we call a comet's tail?",
            options: ["Halo", "Sonic Tail", "Coma", "Dust Tail"],
            answer: 3,
            explanation: "A comet's tail is called a dust tail, formed when solar radiation pushes dust and gas away from the comet."
        },
        {
            question: "What planet is known for its Great Dark Spot?",
            options: ["Earth", "Uranus", "Neptune", "Mars"],
            answer: 2,
            explanation: "The Great Dark Spot is a storm system located in Neptune's atmosphere."
        },
        {
            question: "Which planet is known for having a 'day' that is longer than its 'year'?",
            options: ["Venus", "Mars", "Earth", "Mercury"],
            answer: 0,
            explanation: "A day on Venus takes longer than a year due to its slow rotation."
        },
        {
            question: "What is the name of the second largest planet in our solar system?",
            options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
            answer: 0,
            explanation: "Saturn is the second largest planet in our solar system, after Jupiter."
        },
        {
            question: "What is a light-year?",
            options: ["A unit of time", "A unit of distance", "A unit of mass", "A unit of brightness"],
            answer: 1,
            explanation: "A light-year is a unit of distance that light travels in one year, about 5.88 trillion miles (9.46 trillion kilometers)."
        },
        {
            question: "What do we call the region around a black hole where nothing can escape?",
            options: ["Event Horizon", "Singularity", "Accretion Disk", "Photon Sphere"],
            answer: 0,
            explanation: "The event horizon is the boundary around a black hole beyond which nothing can escape."
        },
        {
            question: "What planet is known as the Ice Giant?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            answer: 2,
            explanation: "Uranus and Neptune are known as Ice Giants because of their icy compositions."
        },
        {
            question: "What do we call the path of a comet?",
            options: ["Orbit", "Trail", "Pathway", "Route"],
            answer: 0,
            explanation: "The path that a comet takes around the Sun is known as its orbit."
        },
        {
            question: "Which planet has the largest volcano?",
            options: ["Earth", "Mars", "Venus", "Jupiter"],
            answer: 1,
            explanation: "Olympus Mons on Mars is the largest volcano in the solar system."
        },
        {
            question: "What is a solar system?",
            options: ["A collection of stars", "A collection of planets orbiting a star", "A galaxy", "A nebula"],
            answer: 1,
            explanation: "A solar system is made up of a star and the celestial bodies that orbit it, including planets."
        },
        {
            question: "What is the name of the largest asteroid in the asteroid belt?",
            options: ["Ceres", "Eris", "Vesta", "Pallas"],
            answer: 0,
            explanation: "Ceres is the largest asteroid in the asteroid belt and is classified as a dwarf planet."
        },
        {
            question: "What are the building blocks of the solar system?",
            options: ["Stars", "Comets", "Planets", "Asteroids"],
            answer: 3,
            explanation: "Asteroids are considered the building blocks of the solar system, being remnants from its formation."
        },
        {
            question: "What is the main feature of the Sun's surface?",
            options: ["Solar Flares", "Sunspots", "Prominence", "Coronal Mass Ejection"],
            answer: 1,
            explanation: "Sunspots are temporary phenomena on the Sun's photosphere that appear as spots darker than the surrounding areas."
        },
        {
            question: "What is the primary reason for the seasons on Earth?",
            options: ["Distance from the Sun", "Tilt of the Earth's axis", "Changes in solar activity", "Ocean currents"],
            answer: 1,
            explanation: "The tilt of the Earth's axis causes the seasons as it orbits the Sun."
        },
        {
            question: "What are meteoroids?",
            options: ["Small asteroids", "Comets", "Rocky debris in space", "Stars"],
            answer: 2,
            explanation: "Meteoroids are small rocky or metallic bodies in space, often from asteroids or comets."
        },
        {
            question: "What is the term for the explosion of a dying star?",
            options: ["Nova", "Supernova", "Black Hole", "Pulsar"],
            answer: 1,
            explanation: "A supernova is the explosion of a dying star, resulting in a massive release of energy."
        },
        {
            question: "Which planet is known for its retrograde rotation?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: 0,
            explanation: "Venus has a retrograde rotation, meaning it spins in the opposite direction of most planets."
        },
        {
            question: "Which moon is known to have a subsurface ocean?",
            options: ["Io", "Europa", "Titan", "Ganymede"],
            answer: 1,
            explanation: "Europa is believed to have a subsurface ocean beneath its icy crust, making it a target for astrobiological studies."
        },
        {
            question: "What is the shape of a planet's orbit?",
            options: ["Circle", "Ellipse", "Square", "Triangle"],
            answer: 1,
            explanation: "The orbits of planets are elliptical, not perfectly circular, as described by Kepler's laws of planetary motion."
        },
        {
            question: "What is the main reason for the phases of the Moon?",
            options: ["Distance from Earth", "Sun's position", "Moon's orbit", "Earth's rotation"],
            answer: 2,
            explanation: "The phases of the Moon result from its orbit around the Earth and the varying angles of sunlight it reflects."
        },
    ],
    medium : [
    {

        question: "Which planet is known for its prominent rings?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: 1,
        explanation: "Saturn is renowned for its stunning and extensive ring system."
    },
    {
        question: "What is the largest moon of Saturn?",
        options: ["Titan", "Rhea", "Iapetus", "Enceladus"],
        answer: 0,
        explanation: "Titan is the largest moon of Saturn and is known for its thick atmosphere."
    },
    {
        question: "What is the term for a planet's path around the Sun?",
        options: ["Orbit", "Revolution", "Rotation", "Pathway"],
        answer: 0,
        explanation: "A planet's path around the Sun is called its orbit."
    },
    {
        question: "What is the hottest planet in our solar system?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        answer: 1,
        explanation: "Venus is the hottest planet due to its thick atmosphere that traps heat."
    },
    {
        question: "Which planet has the shortest day?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: 1,
        explanation: "Jupiter has the shortest day of all the planets, completing a rotation in about 10 hours."
    },
    {
        question: "What type of galaxy is the Milky Way?",
        options: ["Elliptical", "Spiral", "Irregular", "Lenticular"],
        answer: 1,
        explanation: "The Milky Way is a spiral galaxy, characterized by its rotating disk of stars."
    },
    {
        question: "What do we call the apparent motion of the stars caused by Earth's rotation?",
        options: ["Star Drift", "Celestial Motion", "Diurnal Motion", "Stellar Movement"],
        answer: 2,
        explanation: "The apparent motion of stars across the night sky is known as diurnal motion."
    },
    {
        question: "What is the main component of the Sun's mass?",
        options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
        answer: 1,
        explanation: "Hydrogen makes up about 74% of the Sun's mass, while helium accounts for about 24%."
    },
    {
        question: "What is the name of the largest volcano in the solar system?",
        options: ["Mount Everest", "Olympus Mons", "Mauna Kea", "Mount Kilimanjaro"],
        answer: 1,
        explanation: "Olympus Mons on Mars is the largest volcano and shield volcano in the solar system."
    },
    {
        question: "Which planet is famous for its Great Red Spot?",
        options: ["Earth", "Jupiter", "Mars", "Neptune"],
        answer: 1,
        explanation: "Jupiter's Great Red Spot is a giant storm that has been raging for centuries."
    },
    {
        question: "What is the primary component of the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        answer: 1,
        explanation: "Nitrogen makes up about 78% of the Earth's atmosphere."
    },
    {
        question: "What is a supernova?",
        options: ["A star's birth", "A star explosion", "A black hole", "A comet"],
        answer: 1,
        explanation: "A supernova is the explosive death of a star, often resulting in a bright flash."
    },
    {
        question: "What celestial body is known as the Earth's twin?",
        options: ["Mars", "Venus", "Mercury", "Uranus"],
        answer: 1,
        explanation: "Venus is often referred to as Earth's twin due to its similar size and composition."
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Uranus"],
        answer: 2,
        explanation: "Jupiter is the largest planet in the solar system, with a diameter of about 86,881 miles (139,822 kilometers)."
    },
    {
        question: "What is the term for a small rocky body orbiting the Sun?",
        options: ["Asteroid", "Meteoroid", "Comet", "Planet"],
        answer: 0,
        explanation: "An asteroid is a small rocky body that orbits the Sun, primarily found in the asteroid belt."
    },
    {
        question: "Which planet has the most extensive ring system?",
        options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
        answer: 1,
        explanation: "Saturn has the most extensive and well-known ring system in the solar system."
    },
    {
        question: "What is the main gas in the atmosphere of Mars?",
        options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"],
        answer: 1,
        explanation: "Mars' atmosphere is composed of about 95% carbon dioxide."
    },
    {
        question: "What is the name of our galaxy?",
        options: ["Andromeda", "Milky Way", "Triangulum", "Sombrero"],
        answer: 1,
        explanation: "The Milky Way is the name of our galaxy, which contains our solar system."
    },
    {
        question: "What is the process by which stars form?",
        options: ["Nuclear Fusion", "Nuclear Fission", "Gravitational Collapse", "Condensation"],
        answer: 2,
        explanation: "Stars form through gravitational collapse of gas and dust in space, leading to nuclear fusion."
    },
    {
        question: "What is the main cause of tides on Earth?",
        options: ["Wind", "Sunlight", "Moon's gravity", "Earth's rotation"],
        answer: 2,
        explanation: "The gravitational pull of the Moon is the primary cause of tides on Earth."
    },
    {
        question: "Which planet has the most moons?",
        options: ["Mars", "Earth", "Jupiter", "Saturn"],
        answer: 2,
        explanation: "Jupiter has the most moons of any planet in the solar system, with 79 confirmed moons."
    },
    {
        question: "What is the nearest galaxy to the Milky Way?",
        options: ["Andromeda", "Triangulum", "Whirlpool", "Pinwheel"],
        answer: 0,
        explanation: "The Andromeda Galaxy is the nearest galaxy to the Milky Way, located about 2.537 million light-years away."
    },
    {
        question: "What is the main characteristic of a black hole?",
        options: ["It emits light", "It has a strong gravitational pull", "It is a type of star", "It has a surface"],
        answer: 1,
        explanation: "A black hole has such a strong gravitational pull that nothing, not even light, can escape from it."
    },
    {
        question: "What is the main reason for the blue color of Earth from space?",
        options: ["Oceans", "Atmosphere", "Land", "Clouds"],
        answer: 0,
        explanation: "The blue color of Earth is mainly due to the vast oceans covering about 71% of its surface."
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "250,000 km/s"],
        answer: 0,
        explanation: "The speed of light in a vacuum is approximately 300,000 kilometers per second."
    },
    ],
    hard : [
        {
            question: "What is the name of the boundary surrounding a black hole?",
            options: ["Event Horizon", "Astrophysical Limit", "Singularity", "Photon Sphere"],
            answer: 0,
            explanation: "The event horizon is the boundary around a black hole beyond which no information or matter can escape."
        },
        {
            question: "Which type of star is predicted to end its life cycle as a neutron star?",
            options: ["Red Giant", "White Dwarf", "Main Sequence", "Supergiant"],
            answer: 3,
            explanation: "A supergiant star can end its life cycle as a neutron star after a supernova explosion."
        },
        {
            question: "What phenomenon occurs when a star explodes?",
            options: ["Black Hole", "Supernova", "Nova", "Pulsar"],
            answer: 1,
            explanation: "A supernova is the explosion of a star at the end of its life cycle."
        },
        {
            question: "What is the critical point at which nuclear fusion can no longer occur in a star?",
            options: ["Main Sequence", "White Dwarf", "Degenerate State", "Supernova"],
            answer: 2,
            explanation: "The degenerate state refers to a condition where nuclear fusion cannot occur due to high density."
        },
        {
            question: "What is the main driving force behind the evolution of galaxies?",
            options: ["Gravity", "Dark Energy", "Electromagnetism", "Nuclear Forces"],
            answer: 0,
            explanation: "Gravity is the primary force driving the formation and evolution of galaxies."
        },
        {
            question: "What type of galaxy has no distinct shape?",
            options: ["Spiral", "Elliptical", "Irregular", "Lenticular"],
            answer: 2,
            explanation: "Irregular galaxies lack a defined shape and often have a chaotic appearance."
        },
        {
            question: "What theory explains the origin of the universe?",
            options: ["Steady State Theory", "Big Bang Theory", "Cosmic Inflation Theory", "Multiverse Theory"],
            answer: 1,
            explanation: "The Big Bang Theory describes the origin of the universe from an initial singularity."
        },
        {
            question: "Which particles are known as the building blocks of matter?",
            options: ["Protons", "Neutrons", "Quarks", "Electrons"],
            answer: 2,
            explanation: "Quarks are elementary particles that combine to form protons and neutrons, which make up atomic nuclei."
        },
        {
            question: "What is the most abundant element in the universe?",
            options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
            answer: 2,
            explanation: "Hydrogen is the most abundant element in the universe, making up about 75% of its elemental mass."
        },
        {
            question: "What are cosmic rays primarily composed of?",
            options: ["Photons", "Electrons", "Protons", "Neutrons"],
            answer: 2,
            explanation: "Cosmic rays are high-energy particles, predominantly protons, originating from outer space."
        },
        {
            question: "What is the fate of our sun according to current astrophysical models?",
            options: ["Become a black hole", "Become a neutron star", "Become a red giant and then a white dwarf", "Become a supernova"],
            answer: 2,
            explanation: "The Sun is expected to expand into a red giant before shedding its outer layers to become a white dwarf."
        },
        {
            question: "What is the name of the effect that causes the observed redshift of light from distant galaxies?",
            options: ["Doppler Effect", "Gravitational Lensing", "Hubble's Law", "Time Dilation"],
            answer: 0,
            explanation: "The redshift observed in light from distant galaxies is primarily due to the Doppler Effect as they move away."
        },
        {
            question: "What is dark matter primarily composed of?",
            options: ["Baryonic Matter", "Non-Baryonic Matter", "Stellar Remnants", "Black Holes"],
            answer: 1,
            explanation: "Dark matter is thought to be composed of non-baryonic matter, which does not emit light or energy."
        },
        {
            question: "What is the dominant force in the universe at large scales?",
            options: ["Electromagnetism", "Weak Nuclear Force", "Strong Nuclear Force", "Dark Energy"],
            answer: 3,
            explanation: "Dark energy is the dominant force driving the accelerated expansion of the universe."
        },
        {
            question: "What is the term for the hypothetical particles that could explain dark matter?",
            options: ["Axions", "Photons", "Neutrinos", "Gluons"],
            answer: 0,
            explanation: "Axions are hypothetical particles proposed as candidates for dark matter."
        },
        {
            question: "What is the phenomenon called when light bends around massive objects?",
            options: ["Gravitational Lensing", "Redshift", "Doppler Shift", "Refraction"],
            answer: 0,
            explanation: "Gravitational lensing is the bending of light around massive objects due to gravity."
        },
        {
            question: "What is the age of the universe estimated to be?",
            options: ["5.5 billion years", "13.8 billion years", "10 billion years", "15 billion years"],
            answer: 1,
            explanation: "The age of the universe is estimated to be about 13.8 billion years based on cosmological models."
        },
        {
            question: "What is the name of the first human-made object to reach outer space?",
            options: ["Apollo 11", "Voyager 1", "Vostok 1", "Sputnik 1"],
            answer: 3,
            explanation: "Sputnik 1, launched by the Soviet Union in 1957, was the first human-made object to reach outer space."
        },
        {
            question: "What is the primary force that holds galaxies together?",
            options: ["Magnetic Force", "Weak Nuclear Force", "Gravitational Force", "Electromagnetic Force"],
            answer: 2,
            explanation: "Gravitational force is the primary force that holds galaxies and other cosmic structures together."
        },
        {
            question: "What is the term for the observable universe's edge?",
            options: ["Cosmic Horizon", "Event Horizon", "Observable Limit", "Cosmic Boundary"],
            answer: 0,
            explanation: "The cosmic horizon is the maximum distance from which light has had time to reach us since the Big Bang."
        },
        {
            question: "What is the process called when the nucleus of an atom splits into smaller nuclei?",
            options: ["Nuclear Fusion", "Nuclear Fission", "Radioactive Decay", "Transmutation"],
            answer: 1,
            explanation: "Nuclear fission is the process of splitting an atomic nucleus into smaller nuclei, releasing energy."
        },
    ]
};

let currentLevel = '';
let currentQuestionIndex = 0;

// Start the quiz by selecting difficulty level
function startQuiz(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    
    document.getElementById('level-selection').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    loadQuestion();
}

// Load the current question based on the current index
function loadQuestion() {
    const questionData = questions[currentLevel][currentQuestionIndex];
    
    if (questionData) {
        document.getElementById('question').innerText = questionData.question;
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = ''; // Clear previous options
        
        questionData.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.innerText = option;
            button.onclick = () => selectAnswer(index, button);
            optionsContainer.appendChild(button);
        });
        
        document.getElementById('next').classList.add('hidden');
        document.getElementById('explanation').classList.add('hidden');
    } else {
        showEndMessage();
    }
}

// Handle answer selection
function selectAnswer(selectedIndex, button) {
    const questionData = questions[currentLevel][currentQuestionIndex];

    // Set the button color based on the answer
    if (selectedIndex === questionData.answer) {
        button.style.backgroundColor = "green"; // Correct answer
    } else {
        button.style.backgroundColor = "red"; // Wrong answer
        // Show the correct answer color for the right button
        const correctButton = document.getElementById('options').children[questionData.answer];
        correctButton.style.backgroundColor = "green"; // Highlight the correct answer
    }
    
    // Show explanation
    document.getElementById('explanation').innerText = questionData.explanation;
    document.getElementById('explanation').classList.remove('hidden');
    document.getElementById('next').classList.remove('hidden');
}

// Load the next question or show end message
function loadNextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Show a message after all questions are answered
function showEndMessage() {
    document.getElementById('quiz').classList.add('hidden');
    alert("Quiz complete!"); // Display a simple message
}

// Restart the quiz
function restartQuiz() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('level-selection').classList.remove('hidden');
}

// Update the 'Next Question' button to load the next question
document.getElementById('next').onclick = loadNextQuestion;
