import { queryEl } from "./helpers.js";
import { switchViewTo } from "./views.js";


// Start Button
const startBtn = queryEl('#startBtn');
startBtn.addEventListener('click', function () {
  // New game
  switchViewTo('game');
});




// Finally...
window.addEventListener(
    'load',
    function () {
      // Hide loader & switch to start
      switchViewTo('start');
    },
    false
);