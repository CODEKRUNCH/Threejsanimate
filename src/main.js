import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvas = document.getElementById('canvas');

//1.SCene 
const scene= new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0')

//2. Camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z= 5;

//3.Object 
const geometry = new THREE.DodecahedronGeometry()
const material = new THREE.MeshStandardMaterial({color:'#468585',emissive:'#468585'});

const Dodecahedron = new THREE.Mesh(geometry,material)

const boxGeometry = new THREE.BoxGeometry(2,0.1,2);
const boxmaterial = new THREE.MeshLambertMaterial({color:'#b4b4b3',emissive:'#b4b4b3'});
const box = new THREE.Mesh(boxGeometry,boxmaterial);
box.position.y =-1.5

scene.add(Dodecahedron);
scene.add(box);

//4.Light
const Light = new THREE.SpotLight(0x006769,100);
Light.position.set(1,1,1);
scene.add(Light);

//5.Renderer
const Renderer = new THREE.WebGLRenderer({canvas});

Renderer.setSize(window.innerWidth,window.innerHeight);
Renderer.setPixelRatio(window.devicePixelRatio);

//6. add orbit controls
const controls = new OrbitControls(camera,Renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enableDamping = true;

//7.ADD animate
function animate()
{
    requestAnimationFrame(animate);
    
    Dodecahedron.rotation.x += 0.01;
    Dodecahedron.rotation.y += 0.01;
    
    box.rotation.y+=0.005;
    
    controls.update();
    
    Renderer.render(scene,camera);
}
animate();