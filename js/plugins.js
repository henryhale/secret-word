import { randomInt } from "./helpers.js";

/* Dark Mode / Light Mode */
export function toggleDarkMode (root, btn) {
    root.classList.toggle('let-darkmode');
    if (root.classList.contains('let-darkmode')) {
      console.log('Dark Mode');
      btn.innerHTML = '<i class="fa fa-moon"></i><span class="w3-hide-small">&nbsp;&nbsp;Dark Mode</span>';
      if (localStorage) localStorage.setItem('let-dark-mode', 'true');
    } else {
      console.log('Light Mode');
      btn.innerHTML = '<i class="fa fa-sun"></i><span class="w3-hide-small">&nbsp;&nbsp;Light Mode</span>';
      if (localStorage) localStorage.setItem('let-dark-mode', 'false');
    }
}

/* Store Dark Mode value in Local Storage */
export function checkMode(btn) {
    if (localStorage && localStorage.getItem('let-dark-mode') === 'true') {
        if (btn) btn.click();
    }
}

// GIF images
// - GIF names
const gifNames = [
  'happy-1.gif',
  'happy-2.gif',
  'happy-3.gif',
  'happy-4.gif',
  'angry-1.gif',
  'angry-2.gif',
  'angry-3.gif',
  'angry-4.gif',
];
// GIF Store
const gifStore = {
  happy: {
    0: null,
    1: null,
    2: null,
    3: null,
  },
  angry: {
    0: null,
    1: null,
    2: null,
    3: null,
  },
};

// load multiple images and callback when ALL images have loaded
export function loadImages(callback) {
  const result = [];
  let index = gifNames.length;

  function onLoad() {
    --index;
    if (index == 0) {
      // store images
      gifStore.happy[0] = result[0];
      gifStore.happy[1] = result[1];
      gifStore.happy[2] = result[2];
      gifStore.happy[3] = result[3];
      gifStore.angry[0] = result[4];
      gifStore.angry[1] = result[5];
      gifStore.angry[2] = result[6];
      gifStore.angry[3] = result[7];
      callback();
    }
  }

  for (let i = 0; i < gifNames.length; i++) {
    result[i] = document.createElement("img");
    result[i].addEventListener("load", onLoad);
    result[i].src = "img/"+gifNames[i];    
  }

}

// Get random gif
let i;
export function randomGif(flag) {
  i = randomInt(0, 3);
  if (!flag) return gifStore.angry[i];
  return gifStore.happy[i];
}

