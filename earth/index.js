import * as THREE from "three";
import { OrbitControls } from 'jsm/controls/OrbitControls.js';
import getStarfield from "./src/getStarfield.js";
import { getFresnelMat } from "./src/getFresnelMat.js";

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

const earthGroup = new THREE.Group();
earthGroup.rotation.z = -23.4 * Math.PI / 180;
scene.add(earthGroup);
new OrbitControls(camera, renderer.domElement);

const detail = 12;
const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, detail);
const material = new THREE.MeshPhongMaterial({
  map: loader.load("./textures/00_earthmap1k.jpg"),
  specularMap: loader.load("./textures/02_earthspec1k.jpg"),
  bumpMap: loader.load("./textures/01_earthbump1k.jpg"),
  bumpScale: 0.04,
});

const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);

const lightsMat = new THREE.MeshBasicMaterial({
  map: loader.load("./textures/03_earthlights1k.jpg"),
  blending: THREE.AdditiveBlending,
});
const lightsMesh = new THREE.Mesh(geometry, lightsMat);
earthGroup.add(lightsMesh);

const cloudsMat = new THREE.MeshStandardMaterial({
  map: loader.load("./textures/04_earthcloudmap.jpg"),
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending,
  alphaMap: loader.load('./textures/05_earthcloudmaptrans.jpg'),
});
const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
cloudsMesh.scale.setScalar(1.003);
earthGroup.add(cloudsMesh);

const fresnelMat = getFresnelMat();
const glowMesh = new THREE.Mesh(geometry, fresnelMat);
glowMesh.scale.setScalar(1.01);
earthGroup.add(glowMesh);

// Add stars
const stars = getStarfield({ numStars: 2000 });
scene.add(stars);

// Add sunlight
const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
sunLight.position.set(-2, 0.5, 1.5);
scene.add(sunLight);

// Create the moon
const moonGeometry = new THREE.SphereGeometry(0.27, 16, 16); // Moon size
const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Make moon white
const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);


const moonOrbitGroup = new THREE.Group();
scene.add(moonOrbitGroup);
moonOrbitGroup.add(moonMesh);


moonMesh.position.set(4, 0, 0); 


const orbitRadius = 4; 
const orbitSegments = 64; 
const orbitGeometry = new THREE.RingGeometry(orbitRadius, orbitRadius + 0.01, orbitSegments);
const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const orbitMesh = new THREE.Mesh(orbitGeometry, orbitMaterial);
orbitMesh.rotation.x = Math.PI / 2; 
scene.add(orbitMesh);


const moonInfoBox = document.createElement('div');
moonInfoBox.style.position = 'absolute';
moonInfoBox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
moonInfoBox.style.color = 'white';
moonInfoBox.style.padding = '10px';
moonInfoBox.style.borderRadius = '5px';
moonInfoBox.style.display = 'block'; 
moonInfoBox.innerHTML = `
  Moon <br>
  Distance from Earth: 38,400 km<br>
  Radius: 1,737.4 km
`;
document.body.appendChild(moonInfoBox);


const satelliteGeometry = new THREE.SphereGeometry(0.1, 8, 8); // Satellite size
const satelliteMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red satellite
const satelliteMesh = new THREE.Mesh(satelliteGeometry, satelliteMaterial);


const satelliteOrbitGroup = new THREE.Group();
scene.add(satelliteOrbitGroup);
satelliteOrbitGroup.add(satelliteMesh);


satelliteMesh.position.set(2, 0, 0); 


const satelliteOrbitRadius = 2; 
const satelliteOrbitGeometry = new THREE.RingGeometry(satelliteOrbitRadius, satelliteOrbitRadius + 0.01, orbitSegments);
const satelliteOrbitMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
const satelliteOrbitMesh = new THREE.Mesh(satelliteOrbitGeometry, satelliteOrbitMaterial);
satelliteOrbitMesh.rotation.x = Math.PI / 2; 
scene.add(satelliteOrbitMesh);


const satelliteInfoBox = document.createElement('div');
satelliteInfoBox.style.position = 'absolute';
satelliteInfoBox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
satelliteInfoBox.style.color = 'white';
satelliteInfoBox.style.padding = '10px';
satelliteInfoBox.style.borderRadius = '5px';
satelliteInfoBox.style.display = 'block'; 
satelliteInfoBox.innerHTML = `
  GISAT-1<br>
  Distance from Earth: 36,000 km<br>
  
`;
document.body.appendChild(satelliteInfoBox);


function animate() {
  requestAnimationFrame(animate);

  
  earthMesh.rotation.y += 0.002;
  lightsMesh.rotation.y += 0.002;
  cloudsMesh.rotation.y += 0.0023;
  glowMesh.rotation.y += 0.002;

  
  satelliteOrbitGroup.rotation.y += 0.008; 

  
  moonOrbitGroup.rotation.y += 0.005; 

  
  const moonWorldPosition = moonMesh.getWorldPosition(new THREE.Vector3());
  const moonScreenPosition = moonWorldPosition.project(camera);
  moonInfoBox.style.left = `${(moonScreenPosition.x * 0.5 + 0.5) * window.innerWidth}px`;
  moonInfoBox.style.top = `${-(moonScreenPosition.y * 0.5 - 0.5) * window.innerHeight}px`;

  
  const satelliteWorldPosition = satelliteMesh.getWorldPosition(new THREE.Vector3());
  const satelliteScreenPosition = satelliteWorldPosition.project(camera);
  satelliteInfoBox.style.left = `${(satelliteScreenPosition.x * 0.5 + 0.5) * window.innerWidth}px`;
  satelliteInfoBox.style.top = `${-(satelliteScreenPosition.y * 0.5 - 0.5) * window.innerHeight}px`;

  stars.rotation.y -= 0.0002;
  renderer.render(scene, camera);
}

animate();

function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', handleWindowResize, false);