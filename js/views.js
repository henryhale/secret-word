import { queryEl } from "./helpers.js";

// Views
const [introView, startView, gameView] = [
    '#introView',
    '#startView',
    '#gameView',
].map((el) => queryEl(el));

// Switch Views
export const switchViewTo = function (view) {
  switch (view) {
    case 'intro':
      // hide
      startView.style.display = 'none';
      gameView.style.display = 'none';
      // show
      introView.style.display = 'block';
      break;
    case 'start':
      // hide
      introView.style.display = 'none';
      gameView.style.display = 'none';
      // show
      startView.style.display = 'block';
      break;
    case 'game':
      // hide
      introView.style.display = 'none';
      startView.style.display = 'none';
      // show
      gameView.style.display = 'block';
      break;

    default:
      break;
  }
};