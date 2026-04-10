import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

document.querySelectorAll<HTMLElement>("[data-model-viewer]").forEach((el) => {
  const src = el.dataset.modelSrc;
  if (!src) return;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    el.clientWidth / el.clientHeight,
    0.1,
    100,
  );

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(el.clientWidth, el.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  el.appendChild(renderer.domElement);

  const grid = new THREE.GridHelper(20, 40, 0x888888, 0x444444);
  grid.material.transparent = true;
  grid.material.opacity = 0.3;
  scene.add(grid);

  scene.add(new THREE.AmbientLight(0xffffff, 1));
  const dirLight = new THREE.DirectionalLight(0xffffff, 2);
  dirLight.position.set(5, 10, 7);
  scene.add(dirLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.5;
  controls.enablePan = false;
  controls.minDistance = 0.5;
  controls.maxDistance = 20;

  new GLTFLoader().load(src, (gltf) => {
    const model = gltf.scene;

    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());

    const bottom = box.min.y;
    model.position.sub(center);
    camera.position.set(0, size * 0.4, size * 1.5);
    controls.target.set(0, 0, 0);
    controls.update();

    grid.position.y = bottom - center.y;

    scene.add(model);
  });

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  new ResizeObserver(() => {
    const w = el.clientWidth;
    const h = el.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }).observe(el);
});
