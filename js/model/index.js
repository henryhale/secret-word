import { getRandomWord } from "../api/data.js";
import { randomInt } from "../helpers.js";

// Initialize with shorthand
const xLetter = {}, $ = xLetter;

// Secret Word
$.wordData = null;

// Set secret word with hint
$.setWord = function () {
    $.wordData = getRandomWord();
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
    // position one - first half
    const randomPosA = randomInt(
      0,
      $.wordData.word.length * 0.5
    );
    // position two - second half
    const randomPosZ = randomInt(
      $.wordData.word.length * 0.5,
      $.wordData.word.length - 1
    );
    // the letters
    const lettersArray = $.wordData.word.split('');
    // output data
    let outputData = '';
    // output letters
    for (let i = 0; i < lettersArray.length; i++) {
      if (
        i === randomPosA ||
        (i === randomPosZ && $.wordData.word.length > 4)
      ) {
        // some few hint letters => 2
        outputData +=
          '<input value="' +
          lettersArray[i] +
          '" type="text" name="" class="input-field h3 animated w3-light-card" maxlength="1" minlength="0" disabled>';
      } else {
        // hidden letters => the rest
        outputData +=
          '<input value="" type="text" name="" class="input-field h3 animated w3-light-card-inset missingX" maxlength="1" minlength="0">';
      }
    }
    // finally, print
    $.wordElem.innerHTML = outputData;
    // the hint too
    $.hint.innerHTML = $.wordData.hint;
    // then listen to the player
    $.setEars();
    /* log safe letters
      console.log(randomPosA);
      console.log(randomPosZ);
      console.log(lettersArray); */
};

export default xLetter;