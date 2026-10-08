const photos = [
  { src: 'assets/images/01-running-selfie.jpg', position: '50% 46%', mobile: '50% 44%' },
  { src: 'assets/images/02-running-flower.jpg', position: '50% 48%', mobile: '50% 45%' },
  { src: 'assets/images/03-running-mirror.jpg', position: '50% 48%', mobile: '50% 45%' },
  { src: 'assets/images/04-athlete-mirror.jpg', position: '50% 46%', mobile: '50% 44%' },
  { src: 'assets/images/05-portrait-blue.jpg', position: '50% 48%', mobile: '50% 45%' },
  { src: 'assets/images/06-portrait-bw.jpg', position: '50% 43%', mobile: '50% 42%' }
];

const scenes = [document.querySelector('.scene-a'), document.querySelector('.scene-b')];
let activeScene = 0;
let photoIndex = 0;

function preload() {
  photos.forEach(({ src }) => {
    const img = new Image();
    img.src = src;
  });
}

function paint(scene, photo) {
  scene.style.setProperty('--image', `url("${photo.src}")`);
  scene.style.setProperty('--position', photo.position);
  scene.style.setProperty('--mobile-position', photo.mobile);
  scene.classList.remove('animate-in');
  void scene.offsetWidth;
  scene.classList.add('animate-in');
}

function advance() {
  const nextScene = activeScene === 0 ? 1 : 0;
  photoIndex = (photoIndex + 1) % photos.length;

  paint(scenes[nextScene], photos[photoIndex]);
  scenes[nextScene].classList.add('is-visible');
  scenes[activeScene].classList.remove('is-visible');
  activeScene = nextScene;
}

preload();
paint(scenes[0], photos[0]);
setInterval(advance, 10000);
