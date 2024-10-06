import * as THREE from "https://cdn.skypack.dev/three@0.129.0";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

let scene, camera, renderer, controls, skybox;
let planet_sun, planet_mercury, planet_venus, planet_earth, planet_mars, planet_jupiter, planet_saturn, planet_uranus, planet_neptune;
let labels = {};
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let hoveredPlanet = null;
let clickedPlanet = null; // Track clicked planet
let infoTab = document.getElementById('info-tab'); // HTML element to show planet info


let mercury_orbit_radius = 40;
let venus_orbit_radius = 60;
let earth_orbit_radius = 70;
let mars_orbit_radius = 80;
let jupiter_orbit_radius = 100;
let saturn_orbit_radius = 120;
let uranus_orbit_radius = 140;
let neptune_orbit_radius = 160;

let mercury_revolution_speed = 0.4;
let venus_revolution_speed = 0.29;  
let earth_revolution_speed = 0.24;
let mars_revolution_speed = 0.20;
let jupiter_revolution_speed = 0.17;
let saturn_revolution_speed = 0.13;
let uranus_revolution_speed = 0.09;
let neptune_revolution_speed = 0.05;

function createMaterialArray() {
  const skyboxImagepaths = ['../img/skybox/space_ft.png', '../img/skybox/space_bk.png', '../img/skybox/space_up.png', '../img/skybox/space_dn.png', '../img/skybox/space_rt.png', '../img/skybox/space_lf.png'];
  const materialArray = skyboxImagepaths.map((image) => {
    let texture = new THREE.TextureLoader().load(image);
    return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
  });
  return materialArray;
}

function setSkyBox() {
  const materialArray = createMaterialArray();
  let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
  skybox = new THREE.Mesh(skyboxGeo, materialArray);
  scene.add(skybox);
}

function loadPlanetTexture(texture, radius, widthSegments, heightSegments, meshType) {
  const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
  const loader = new THREE.TextureLoader();
  const planetTexture = loader.load(texture);
  const material = meshType == 'standard' ? new THREE.MeshStandardMaterial({ map: planetTexture }) : new THREE.MeshBasicMaterial({ map: planetTexture });

  const planet = new THREE.Mesh(geometry, material);
  planet.name = texture.split('/').pop().split('_')[0]; // Set the name based on the texture file name
  return planet;
}

function createRing(innerRadius) {
  let outerRadius = innerRadius - 0.1;
  let thetaSegments = 100;
  const geometry = new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments);
  const material = new THREE.MeshBasicMaterial({ color: '#ffffff', side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  mesh.rotation.x = Math.PI / 2;
  return mesh;
}

function createLabel(text) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  
  canvas.width = 300; 
  canvas.height = 100;

  context.font = "Bold 75px Arial";
  context.fillStyle = "white";
  context.textAlign = "center";
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(10, 5, 1); 
  return sprite;
}

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);

  setSkyBox();
  planet_earth = loadPlanetTexture("../img/earth_hd.jpg", 4, 100, 100, 'standard');
  planet_sun = loadPlanetTexture("../img/sun_hd.jpg", 20, 100, 100, 'basic');
  planet_mercury = loadPlanetTexture("../img/mercury_hd.jpg", 2, 100, 100, 'standard');
  planet_venus = loadPlanetTexture("../img/venus_hd.jpg", 3, 100, 100, 'standard');
  planet_mars = loadPlanetTexture("../img/mars_hd.jpg", 3.5, 100, 100, 'standard');
  planet_jupiter = loadPlanetTexture("../img/jupiter_hd.jpg", 10, 100, 100, 'standard');
  planet_saturn = loadPlanetTexture("../img/saturn_hd.jpg", 8, 100, 100, 'standard');
  planet_uranus = loadPlanetTexture("../img/uranus_hd.jpg", 6, 100, 100, 'standard');
  planet_neptune = loadPlanetTexture("../img/neptune_hd.jpg", 5, 100, 100, 'standard');

  
  scene.add(planet_earth);
  scene.add(planet_sun);
  scene.add(planet_mercury);
  scene.add(planet_venus);
  scene.add(planet_mars);
  scene.add(planet_jupiter);
  scene.add(planet_saturn);
  scene.add(planet_uranus);
  scene.add(planet_neptune);

  
  const sunLight = new THREE.PointLight(0xffffff, 1, 0); // White light, intensity 1, no distance attenuation
  sunLight.position.copy(planet_sun.position); // Position the light at the Sun's position
  scene.add(sunLight);

 
  createRing(mercury_orbit_radius);
  createRing(venus_orbit_radius);
  createRing(earth_orbit_radius);
  createRing(mars_orbit_radius);
  createRing(jupiter_orbit_radius);
  createRing(saturn_orbit_radius);
  createRing(uranus_orbit_radius);
  createRing(neptune_orbit_radius);

 
  labels["earth"] = createLabel("Earth");
  labels["mercury"] = createLabel("Mercury");
  labels["venus"] = createLabel("Venus");
  labels["mars"] = createLabel("Mars");
  labels["jupiter"] = createLabel("Jupiter");
  labels["saturn"] = createLabel("Saturn");
  labels["uranus"] = createLabel("Uranus");
  labels["neptune"] = createLabel("Neptune");
  for (let key in labels) {
    scene.add(labels[key]);
  }

  
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.domElement.id = "c";
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 12;
  controls.maxDistance = 1000;

  camera.position.z = 100;

  
  window.addEventListener('mousemove', onMouseMove, false);
  
  window.addEventListener('click', onPlanetClick, false);
}

function planetRevolver(time, speed, planet, orbitRadius, label) {
  let orbitSpeedMultiplier = 0.001;
  const planetAngle = time * orbitSpeedMultiplier * speed;
  planet.position.x = planet_sun.position.x + orbitRadius * Math.cos(planetAngle);
  planet.position.z = planet_sun.position.z + orbitRadius * Math.sin(planetAngle);

  
  label.position.x = planet.position.x;
  label.position.y = planet.position.y + 10; // Slightly above the planet
  label.position.z = planet.position.z;
}

function animate(time) {
  requestAnimationFrame(animate);

  const rotationSpeed = 0.005;
  planet_earth.rotation.y += rotationSpeed;
  planet_sun.rotation.y += rotationSpeed;
  planet_mercury.rotation.y += rotationSpeed;
  planet_venus.rotation.y += rotationSpeed;
  planet_mars.rotation.y += rotationSpeed;
  planet_jupiter.rotation.y += rotationSpeed;
  planet_saturn.rotation.y += rotationSpeed;
  planet_uranus.rotation.y += rotationSpeed;
  planet_neptune.rotation.y += rotationSpeed;

  
  planetRevolver(time, mercury_revolution_speed, planet_mercury, mercury_orbit_radius, labels["mercury"]);
  planetRevolver(time, venus_revolution_speed, planet_venus, venus_orbit_radius, labels["venus"]);
  planetRevolver(time, earth_revolution_speed, planet_earth, earth_orbit_radius, labels["earth"]);
  planetRevolver(time, mars_revolution_speed, planet_mars, mars_orbit_radius, labels["mars"]);
  planetRevolver(time, jupiter_revolution_speed, planet_jupiter, jupiter_orbit_radius, labels["jupiter"]);
  planetRevolver(time, saturn_revolution_speed, planet_saturn, saturn_orbit_radius, labels["saturn"]);
  planetRevolver(time, uranus_revolution_speed, planet_uranus, uranus_orbit_radius, labels["uranus"]);
  planetRevolver(time, neptune_revolution_speed, planet_neptune, neptune_orbit_radius, labels["neptune"]);

  
  handleHoverEffects();

  controls.update();
  renderer.render(scene, camera);
}

function onMouseMove(event) {
  // Update mouse position
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onPlanetClick(event) {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects([
      planet_mercury,
      planet_venus,
      planet_earth,
      planet_mars,
      planet_jupiter,
      planet_saturn,
      planet_uranus,
      planet_neptune,
      planet_sun 
  ]);

  if (intersects.length > 0) {
      const clickedObject = intersects[0].object;
      if (clickedObject === planet_sun) {
                  infoTab.innerHTML = ''; 
          infoTab.style.display = 'none'; 
      } else {
          animatePlanetClick(clickedObject);
      }
  }
}

function animatePlanetClick(planet) {
  if (clickedPlanet !== planet) {
    if (clickedPlanet) {
      resetPlanetAppearance(clickedPlanet); 
    }
    clickedPlanet = planet;
    highlightPlanet(clickedPlanet); 
    const scaleUp = { scale: 1.5 };
    const scaleDown = { scale: 1.0 };
 }
}

function handleHoverEffects() {
  raycaster.setFromCamera(mouse, camera);

  // Check for intersections with planets
  const intersects = raycaster.intersectObjects([planet_mercury, planet_venus, planet_earth, planet_mars, planet_jupiter, planet_saturn, planet_uranus, planet_neptune]);
  if (intersects.length > 0) {
    if (hoveredPlanet !== intersects[0].object) {
      if (hoveredPlanet) {
        resetPlanetAppearance(hoveredPlanet);
      }
      hoveredPlanet = intersects[0].object;
      highlightPlanet(hoveredPlanet);
      showInfoTab(hoveredPlanet);
    }
  } else {
    if (hoveredPlanet) {
      resetPlanetAppearance(hoveredPlanet);
    }
  }
}

function highlightPlanet(planet) {
  planet.scale.set(1.2, 1.2, 1.2); // Scale up on hover
  planet.material.emissive = new THREE.Color(0x333333); // Add slight emissive effect
}

function resetPlanetAppearance(planet) {
  planet.scale.set(1, 1, 1); // Reset scale
  planet.material.emissive = new THREE.Color(0x000000); // Reset emissive color
}

function showInfoTab(planet) {
  if (infoTab) {
    infoTab.style.display = 'block';
    
    // Set custom styles for the info tab
    infoTab.style.position = 'absolute';  // Position it on the screen
    infoTab.style.top = '10%';             // Set position relative to top of window
    infoTab.style.left = '70%';            // Set position relative to left of window
    infoTab.style.width = '25%';           // Width of the info tab
    infoTab.style.maxHeight = '50%';       // Max height of the info tab
    infoTab.style.overflowY = 'auto';      // Allow scrolling if content is too long
    infoTab.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Semi-transparent dark background
    infoTab.style.color = 'white';         // Text color
    infoTab.style.padding = '15px';        // Padding inside the info tab
    infoTab.style.border = '2px solid white'; // Border styling
    infoTab.style.borderRadius = '10px';   // Rounded corners
    infoTab.style.fontFamily = 'Arial, sans-serif'; // Font style
    infoTab.style.fontSize = '16px';       // Font size
    infoTab.style.zIndex = '1000';         // Ensure it appears above other elements

    let planetInfo;
    if (planet.name === "earth") {
        planetInfo = "Earth is the third planet from the Sun and the only astronomical object known to harbor life. It has a diverse climate, featuring vast oceans, towering mountains, and a variety of ecosystems. Earth’s atmosphere is primarily composed of nitrogen and oxygen, which are essential for life. It is home to millions of species, including humans, and is the only planet in our solar system with liquid water on its surface. The planet has a complex geological history, with tectonic activity that shapes its surface. Earth’s rotation on its axis leads to day and night, while its orbit around the Sun results in the changing seasons. The planet also possesses a natural satellite, the Moon, which influences ocean tides. Understanding Earth is crucial for sustaining life and addressing environmental challenges.";
    } else if (planet.name === "mercury") {
        planetInfo = "Mercury is the closest planet to the Sun and the smallest in the Solar System. Its surface resembles that of the Moon, with numerous craters from impacts. Mercury has no atmosphere to speak of, leading to extreme temperature variations—daytime temperatures can soar to 430 degrees Celsius, while at night, they can plummet to minus 180 degrees Celsius. Despite being so close to the Sun, Mercury is not the hottest planet; Venus has a thick atmosphere that traps heat. Mercury has a very short orbit, completing one revolution around the Sun in just 88 Earth days. It also has a unique rotational pattern, rotating on its axis three times for every two orbits around the Sun. This peculiar relationship leads to a phenomenon called solar days that differ from Earth days. Studying Mercury provides valuable insights into planetary formation and the effects of solar proximity.";
    } else if (planet.name === "venus") {
        planetInfo = "Venus is the second planet from the Sun and is similar in structure to Earth, often referred to as Earth’s 'sister planet.' However, its surface conditions are vastly different. Venus has a thick atmosphere composed mainly of carbon dioxide, with clouds of sulfuric acid, creating a runaway greenhouse effect that results in surface temperatures reaching up to 475 degrees Celsius. This makes Venus the hottest planet in the solar system. The surface of Venus is marked by volcanic plains, large volcanoes, and vast highland regions. It rotates very slowly on its axis, taking about 243 Earth days to complete one rotation, which is longer than its 225-day orbit around the Sun. Venus also exhibits retrograde rotation, meaning it spins in the opposite direction to most planets. The planet's surface is shrouded in dense clouds, preventing direct observation. Studying Venus helps scientists understand climate processes and planetary evolution.";
    } else if (planet.name === "mars") {
        planetInfo = "Mars is the fourth planet from the Sun and is often referred to as the 'Red Planet' due to its reddish appearance, which is caused by iron oxide, or rust, on its surface. Mars has the largest volcano in the solar system, Olympus Mons, which stands about 13.6 miles high. It also has a canyon system, Valles Marineris, that is over 2,500 miles long, making it one of the most dramatic landscapes in the solar system. Mars is about half the diameter of Earth and has a thin atmosphere primarily composed of carbon dioxide, making it inhospitable to human life as we know it. Despite these harsh conditions, Mars has been a focal point for exploration, with numerous missions aimed at understanding its geology, climate, and potential for past life. The presence of water ice at its poles suggests that liquid water may have existed in the past, raising questions about the planet’s ability to support life.";
    } else if (planet.name === "jupiter") {
        planetInfo = "Jupiter is the fifth planet from the Sun and is the largest planet in the Solar System, boasting a diameter of about 86,881 miles. Its massive size and composition make it a gas giant, primarily composed of hydrogen and helium. Jupiter is known for its Great Red Spot, a massive storm larger than Earth that has been raging for hundreds of years. The planet has a very faint ring system and is orbited by over 79 moons, including the four largest known as the Galilean moons: Io, Europa, Ganymede, and Callisto. Each of these moons has unique features, such as volcanic activity on Io and the potential subsurface ocean on Europa. Jupiter’s strong magnetic field and intense radiation make it a subject of study for understanding planetary formation and the dynamics of gas giants. Exploring Jupiter provides insights into the history of our solar system and the processes that govern planetary atmospheres.";
    } else if (planet.name === "saturn") {
        planetInfo = "Saturn is the sixth planet from the Sun and is renowned for its stunning ring system, which is the most extensive and complex in the solar system. Composed mainly of ice particles, with a smaller amount of rocky debris and dust, these rings stretch out thousands of kilometers from the planet. Saturn is a gas giant, primarily made of hydrogen and helium, and is the second-largest planet in the solar system, with a diameter of about 72,366 miles. It has more than 80 known moons, including Titan, which is larger than the planet Mercury and has a dense atmosphere. Saturn's rotation is incredibly fast; it completes a rotation in just about 10.7 hours, which flattens the planet at the poles. The planet's unique atmospheric phenomena include bands of clouds, storms, and powerful winds. Studying Saturn and its rings helps scientists understand the dynamics of gas giants and the formation of planetary systems.";
    } else if (planet.name === "uranus") {
        planetInfo = "Uranus is the seventh planet from the Sun and is unique for its sideways rotation, with an axial tilt of about 98 degrees. This extreme tilt causes extreme seasonal variations, with each pole experiencing 42 years of sunlight followed by 42 years of darkness. Uranus is classified as an ice giant, primarily composed of water, ammonia, and methane ices, with a thick atmosphere of hydrogen and helium. The planet has a pale blue color due to methane in its atmosphere, which absorbs red light. Uranus has a faint ring system and is known to have 27 moons, including Titania, Oberon, Miranda, and Ariel. It was the first planet discovered with a telescope in 1781 by Sir William Herschel. Studying Uranus offers insights into planetary atmospheres, magnetospheres, and the formation of giant planets.";
    } else if (planet.name === "neptune") {
        planetInfo = "Neptune is the eighth and farthest planet from the Sun, known for its deep blue color caused by the absorption of red light by methane in its atmosphere. It has the strongest winds of any planet in the solar system, with speeds reaching up to 1,200 miles per hour. Neptune is similar in composition to Uranus and is classified as an ice giant, primarily composed of hydrogen, helium, and ices. The planet has a faint ring system and is orbited by 14 known moons, with Triton being the largest. Triton is unique because it has a retrograde orbit, suggesting it may have been captured by Neptune’s gravity rather than forming alongside it. Neptune was discovered in 1846 and is known for its dynamic atmosphere, which exhibits storm systems and changes rapidly. Studying Neptune provides insights into the outer solar system's evolution and the dynamics of gaseous atmospheres.";
    }else if (planet.name === "sun") {
      planetInfo ="abc"
    }
    else {
        planetInfo = "Some information about this planet...";
    }
    infoTab.innerHTML = `<h2>${planet.name.charAt(0).toUpperCase() + planet.name.slice(1)}</h2><p>${planetInfo}</p>`;
  }
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);
init();
animate(0);
