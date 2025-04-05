// GSAP Animation
gsap.from(".contact-title", { opacity: 0, y: 50, duration: 1, scrollTrigger: "#contact" });
gsap.from(".venue", { opacity: 0, x: -50, duration: 1, delay: 0.3, scrollTrigger: "#contact" });
gsap.from(".social-icon", { opacity: 0, scale: 0.5, duration: 0.8, stagger: 0.2, scrollTrigger: "#contact" });

// Three.js Space Effect
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("threejs-container").appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x3d2158, emissive: 0x220044 });
const planet = new THREE.Mesh(geometry, material);
scene.add(planet);

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    planet.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();