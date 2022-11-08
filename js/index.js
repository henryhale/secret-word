import { queryEl } from "./helpers.js";
import { switchViewTo } from "./views.js";
import game from "./model/index.js";
import { checkMode, loadImages, toggleDarkMode } from "./plugins.js";

// DOM elements reference
const [ startBtn, gameInputs, gameHint, gameCheckBtn, darkModeBtn, gameGif ] = [
  '#startBtn',
  '#gameInputs',
  '#gameHint',
  '#gameCheckBtn',
  '#darkModeBtn',
  '#gameGif'
].map((el) => queryEl(el));

// Start Button
startBtn.addEventListener('click', function () {
  // New game
  switchViewTo('game');
});

// Set output elements
game.setOutputs(gameInputs, gameHint);

// Whenever user checks
gameCheckBtn?.addEventListener("click", game.checkAll);

// Dark Mode
darkModeBtn?.addEventListener("click", e => toggleDarkMode(document.documentElement, darkModeBtn));

// Gif mount element
game.setReaction(gameGif);

// Finally...
window.addEventListener(
    'DOMContentLoaded',
    function () {
      // Hide loader & switch to start
      switchViewTo('start');
      // check theme from local storage
      checkMode(darkModeBtn);
    },
    false
);

// Start...
// load gif images, and then start...
loadImages(() => game.startGame());
  