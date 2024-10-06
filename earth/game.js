let goldCoins = 0;
let currentLevel = 1;
const totalLevels = 10; // Set up 10 levels

const levels = {
    1: {
        title: 'Level 1',
        items: [
            { name: 'Venus', description: 'Known as Earth\'s twin due to its similar size and proximity.' },
            { name: 'Earth', description: 'The only planet known to support life.' },
            { name: 'Mars', description: 'Known as the Red Planet due to its reddish appearance.' },
            { name: 'Mercury', description: 'The closest planet to the Sun.' }
        ]
    },
    2: {
        title: 'Level 2',
        items: [
            { name: 'Jupiter', description: 'The largest planet in the solar system.' },
            { name: 'Saturn', description: 'Famous for its extensive ring system.' },
            { name: 'Uranus', description: 'Has a unique tilt, rotating on its side.' },
            { name: 'Neptune', description: 'The furthest planet from the Sun.' },
            { name: 'Pluto', description: 'A dwarf planet once considered the ninth planet.' }
        ]
    },
    3: {
        title: 'Level 3',
        items: [
            { name: 'Ceres', description: 'The largest object in the asteroid belt, classified as a dwarf planet.' },
            { name: 'Vesta', description: 'One of the largest asteroids in the solar system.' },
            { name: 'Eros', description: 'An asteroid classified as a near-Earth object.' },
            { name: 'Bennu', description: 'A near-Earth asteroid that was visited by the OSIRIS-REx mission.' },
            { name: 'Pallas', description: 'An asteroid in the asteroid belt, one of the largest there.' },
            { name: 'Hygiea', description: 'A dwarf planet and the fourth-largest object in the asteroid belt.' }
        ]
    },
    4: {
        title: 'Level 4',
        items: [
            { name: 'Haumea', description: 'A dwarf planet known for its elongated shape.' },
            { name: 'Makemake', description: 'A dwarf planet in the Kuiper belt.' },
            { name: 'Sedna', description: 'A distant trans-Neptunian object.' },
            { name: 'Eris', description: 'The largest dwarf planet in the scattered disc.' },
            { name: 'Planet Nine', description: 'A hypothetical planet located far beyond Neptune.' }
        ]
    },
    5: {
        title: 'Level 5',
        items: [
            { name: 'Asteroid 433 Eros', description: 'An asteroid that is one of the largest near-Earth objects.' },
            { name: 'Kuiper Belt', description: 'A region beyond Neptune filled with icy bodies and dwarf planets.' },
            { name: 'Comet Hale-Bopp', description: 'One of the brightest comets seen from Earth.' },
            { name: 'Comet Shoemaker-Levy 9', description: 'A comet that collided with Jupiter in 1994.' },
            { name: 'Asteroid 2001 FO32', description: 'A large near-Earth asteroid.' }
        ]
    },
    6: {
        title: 'Level 6',
        items: [
            { name: 'Triton', description: 'The largest moon of Neptune.' },
            { name: 'Europa', description: 'A moon of Jupiter with an ice-covered surface.' },
            { name: 'Ganymede', description: 'The largest moon in the solar system, orbiting Jupiter.' },
            { name: 'Enceladus', description: 'A moon of Saturn known for its ice geysers.' },
            { name: 'Phobos', description: 'The larger and innermost of Mars\' two moons.' },
            { name: 'Charon', description: 'The largest moon of Pluto.' }
        ]
    },
    7: {
        title: 'Level 7',
        items: [
            { name: 'Io', description: 'A moon of Jupiter known for its volcanic activity.' },
            { name: 'Titania', description: 'The largest moon of Uranus.' },
            { name: 'Oberon', description: 'The second-largest moon of Uranus.' },
            { name: 'Miranda', description: 'A moon of Uranus with a patchwork surface.' },
            { name: 'Iapetus', description: 'A moon of Saturn known for its two-tone coloration.' },
            { name: 'Rhea', description: 'A large moon of Saturn.' },
            { name: 'Dione', description: 'Another of Saturn\'s moons, with icy cliffs.' }
        ]
    },
    8: {
        title: 'Level 8',
        items: [
            { name: 'Asteroid 162173 Ryugu', description: 'A near-Earth asteroid visited by the Hayabusa2 spacecraft.' },
            { name: 'Asteroid 16 Psyche', description: 'A metallic asteroid thought to be the core of a protoplanet.' },
            { name: 'Asteroid 243 Ida', description: 'An asteroid in the asteroid belt that has its own moon.' },
            { name: 'Asteroid 65803 Didymos', description: 'A binary near-Earth asteroid system.' },
            { name: 'Oumuamua', description: 'An interstellar object that passed through the solar system.' },
            { name: 'Asteroid 1999 RQ36 (Bennu)', description: 'A near-Earth asteroid visited by the OSIRIS-REx mission.' }
        ]
    },
    9: {
        title: 'Level 9',
        items: [
            { name: 'Meteor Shower', description: 'A celestial event where numerous meteors appear to radiate from one point in the sky.' },
            { name: 'Meteoroid', description: 'A small rocky or metallic body in outer space.' },
            { name: 'Meteorite', description: 'A meteoroid that survives its passage through the atmosphere and reaches Earth.' },
            { name: 'Solar Wind', description: 'A stream of charged particles released from the Sun.' },
            { name: 'Aurora', description: 'A natural light display in the sky, caused by solar wind.' },
            { name: 'Comet 67P/Churyumov-Gerasimenko', description: 'A comet visited by the Rosetta spacecraft.' },
            { name: 'Trans-Neptunian Objects', description: 'Objects located beyond Neptune\'s orbit.' }
        ]
    },
    10: {
        title: 'Level 10',
        items: [
            { name: 'Klein', description: 'A theoretical or hypothetical object.' }, // No specific celestial object called Klein
            { name: 'Planet Nine', description: 'A hypothetical planet far beyond Neptune.' },
            { name: 'Asteroid 16 Psyche', description: 'A metallic asteroid that could be the exposed core of an ancient protoplanet.' },
            { name: 'Comet 67P/Churyumov-Gerasimenko', description: 'A comet visited by the Rosetta spacecraft.' },
            { name: 'Comet Hale-Bopp', description: 'One of the brightest comets visible from Earth in the 1990s.' },
            { name: 'Oumuamua', description: 'An interstellar object that passed through our solar system.' },
            { name: 'Asteroid 2001 FO32', description: 'A large near-Earth asteroid that is monitored closely.' },
            { name: 'Trojan Asteroids', description: 'Asteroids that share an orbit with a larger planet, typically Jupiter.' },
            { name: 'Sedna', description: 'A distant trans-Neptunian object with an elongated orbit.' },
            { name: 'Eris', description: 'A dwarf planet located in the scattered disc, larger than Pluto.' }
        ]
    }
};

let matches = {};
function updateProgressPathway() {
    const levelSteps = document.querySelectorAll('.level-step');
    
    levelSteps.forEach(step => {
        if (parseInt(step.dataset.level) < currentLevel) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (parseInt(step.dataset.level) === currentLevel) {
            step.classList.add('active');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
}

function loadLevel(level) {
    const planetList = document.getElementById('planet-list');
    const descriptionList = document.getElementById('description-list');
    const levelTitle = document.getElementById('level-title');

    planetList.innerHTML = '';
    descriptionList.innerHTML = '';
    matches = {}; 

    levelTitle.textContent = levels[level].title;

    levels[level].items.forEach(item => {
        const planetDiv = document.createElement('div');
        planetDiv.classList.add('draggable');
        planetDiv.draggable = true;
        planetDiv.dataset.name = item.name;
        planetDiv.textContent = item.name;
        planetList.appendChild(planetDiv);
        planetDiv.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text', e.target.dataset.name);
        });
    });

    levels[level].items.forEach(item => {
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('dropzone');
        descriptionDiv.dataset.match = item.name; // Store the correct match
        descriptionDiv.textContent = item.description;
        descriptionList.appendChild(descriptionDiv);

        descriptionDiv.addEventListener('dragover', (e) => e.preventDefault());
        descriptionDiv.addEventListener('drop', (e) => {
            e.preventDefault(); // Prevent default behavior
            const droppedName = e.dataTransfer.getData('text');
            if (droppedName === descriptionDiv.dataset.match) {
                matches[droppedName] = true; // Correct match
                descriptionDiv.style.backgroundColor = 'rgba(0, 255, 0, 0.3)'; 
                descriptionDiv.classList.add('matched'); 
            } else {
                matches[droppedName] = false; 
                descriptionDiv.style.backgroundColor = 'rgba(255, 0, 0, 0.3)'; 
            }
        });
    });

    updateProgressPathway(); 
}

function checkScore() {
    const totalMatches = levels[currentLevel].items.length;
    let correctMatches = 0;

    for (let key in matches) {
        if (matches[key]) correctMatches++;
    }

    const score = (correctMatches / totalMatches) * 100;
    let scoreMessage = `You scored ${score}%`;

    if (score >= 50) {
        const earnedCoins = correctMatches * 10;
        goldCoins += earnedCoins;
        scoreMessage += `. You earned ${earnedCoins} gold coins!`;
        document.getElementById('coin-counter').textContent = `Gold Coins: ${goldCoins}`;

        if (currentLevel < totalLevels) {
            currentLevel++;
            scoreMessage += " Proceeding to the next level!";
            loadLevel(currentLevel);
        } else {
            scoreMessage += " Congratulations, you've completed all levels!";
        }
    } else {
        scoreMessage += ". Study the explanations to learn more.";
        showExplanations();
    }

    document.getElementById('score').textContent = scoreMessage;
}

function showExplanations() {
    const dropzones = document.querySelectorAll('.dropzone');
    dropzones.forEach(zone => {
        if (!matches[zone.dataset.match]) {
            zone.style.backgroundColor = 'rgba(255, 0, 0, 0.3)'; 
            zone.textContent += ` (Correct: ${zone.dataset.match})`;
        }
    });
}

document.getElementById('check-score').addEventListener('click', checkScore);
loadLevel(currentLevel);

function shuffleDescriptions() {
    const descriptionList = document.getElementById('description-list');
    const items = Array.from(descriptionList.children); 
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [items[i], items[j]] = [items[j], items[i]];  
    }
    descriptionList.innerHTML = '';
    items.forEach(item => descriptionList.appendChild(item));
}
shuffleDescriptions();

