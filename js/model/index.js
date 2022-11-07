import { getRandomWord } from "../api/data.js";
import { randomInt } from "../helpers.js";
import { randomGif } from "../plugins.js";

// Initialize with shorthand
const $ = {};

// Secret Word
$.wordData = null;

// Characters of the secret word (letters)
$.chars = [];

// Set secret word with hint
$.setWord = function () {
    $.wordData = getRandomWord();
    $.chars = $.wordData.word.toLowerCase().split("");
}

// Set Output elements
$.wordElem = null;
$.hintElem = null;
$.setOutputs = function (word, hint) {
    $.wordElem = word;
    $.hintElem = hint;
}

// Render the word
$.renderWord = function () {
  // exit if not output elements
  if (!$.wordElem || !$.hintElem) return;
  // position one - first half
  const randomPosA = randomInt(
    0,
    $.chars.length * 0.5
  );
  // position two - second half
  const randomPosZ = randomInt(
    $.chars.length * 0.5,
    $.chars.length - 1
  );
  // output data
  let outputData = '';
  // output letters
  for (let i = 0; i < $.chars.length; i++) {
    if (
      i === randomPosA ||
      (i === randomPosZ && $.chars.length > 4)
    ) {
      // some few hint letters => 2
      outputData +=
        '<input value="' +
        $.chars[i] +
        '" type="text" name="" class="input-field h3 animate__animated w3-light-card" maxlength="1" minlength="0" disabled>';
    } else {
      // hidden letters => the rest
      outputData +=
        '<input value="" type="text" name="" class="input-field h3 animate__animated w3-light-card-inset missingX" maxlength="1" minlength="0">';
    }
  }
  // finally, print
  $.wordElem.innerHTML = outputData;
  // the hint too
  $.hintElem.innerHTML = $.wordData.hint;
  // then listen to the player
  $.setEars();
}

// Add event listeners when players inputs text
$.setEars = function () {
  // Elements
  document.querySelectorAll('input.input-field')
    // On event triggers
    .forEach(function (el, index) {
      // focus
      el.addEventListener('focus', function () {
        // clear input for new value
        el.value = '';
      });
      // blur
      el.addEventListener('blur', function () {
        // loop through while checking
        if (el.value.trim().length > 0 && el.classList.contains('missingX')) {
          // check the letter at that position
          $.checkLetter(index, el.value);
        }
      });
  });
};

// Check if Player's input is correct
$.checkLetter = function (index, cvalue) {
  // specific letter search
  if ($.chars[index] === cvalue.toLowerCase()) {
    // console.log('Correct letter');
    // disabled input
    document
      .querySelectorAll('input.input-field')
      [index].setAttribute('disabled', true);
  } else {
    //console.log('Wrong letter');
    // Add a shake effect
    document
      .querySelectorAll('input.input-field')[index]
        .classList.toggle('animate__shakeX');
  }
};

// Start a game
$.startGame = function () {
  // set new word
  $.setWord();
  // display the word with missing letters
  $.renderWord();
};

// Reset a game
let reset;
$.resetGame = function (tym) {
  if (reset) clearTimeout(reset);
  reset = setTimeout(function () {
    // Restart Game
    $.startGame();
    // Clear GIF
    $.reactWith("none: game reset!");
  }, tym);
};

// Check Win/Loss
$.outCome = function () {
  // Then filter out missing letter inputs that are correct (=>disabled)
  let goodOnes = document.querySelectorAll('input.input-field[disabled]');
  // if good ones
  if (goodOnes && goodOnes.length === $.chars.length) {
    // success
    // then show the win
    $.reactWith('happy');
    // reset game
    $.resetGame(2500);
  } else {
    // failure
    $.reactWith('sad');
    // then reset quickly
    $.resetGame(1250);
  }
  return;
};

// When Player checks
$.checkAll = function () {
  // collect all inputs
  // loop through checking for those missing
  document.querySelectorAll('input.input-field')
    .forEach(function (elem, index) {
      // if missing
      if (elem.classList.contains('missingX')) {
        // check the letter at that position
        $.checkLetter(index, elem.value);
      }
  });
  // Find out the outcome
  $.outCome();
}

// Emoji Reaction GIF
$.gifElem = null;

// set element on which reactions are put
$.setReaction = function (el) {
  $.gifElem = el;
}

// Reactions on every check
$.reactWith = function (act) {
  let gif;
  switch (act) {
    case 'happy':
      gif = randomGif(1);
      break;
    case 'sad':
      gif = randomGif(0);
    break;
  
    default:
      gif = null;
      break;
  }
  if (gif && $.gifElem) {
    gif.setAttribute('alt', act);
    gif.className = 'w3-image';
    $.gifElem.appendChild(gif);
  } else {
    if ($.gifElem) $.gifElem.innerHTML = '';
  }
}


export default $;