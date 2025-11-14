import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/Addons.js';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);


const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);


const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);

const planeGeometry = new THREE.PlaneGeometry(30,30);
const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    side: THREE.DoubleSide
})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -0.5 * Math.PI;
scene.add(plane);

const sphereGeometry = new THREE.SphereGeometry(4,50,50);
const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x0000FF,
    wireframe: false
})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.position.set(-10,10,0);
scene.add(sphere);

const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

scene.add(box);

camera.position.set(-10,30,30);

orbit.update();

function animate() {
    box.rotation.x += 0.01
    box.rotation.y += 0.01
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
