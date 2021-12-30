// Views
var introView = document.getElementById('introView');
var startView = document.getElementById('startView');
var gameView  = document.getElementById('gameView');
// Switch Views
var switchViewTo = function(view) {
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

// Start Button
var startBtn = document.getElementById('startBtn');
// listener
startBtn.addEventListener('click',function () {
   // New game
   switchViewTo('game');
});

// Some words
var theWords = [
    {
        word : 'absent',
        hint : 'Not in place'
    },
    {
        word : 'actor',
        hint : 'She perfoms on TV'
    },
    {
        word : 'aspire',
        hint : 'Strong desire to achieve'
    },
    {
        word : 'blend',
        hint : 'Form a mixture'
    },
    {
        word : 'brittle',
        hint : 'Hard but easily broken'
    },
    {
        word : 'come',
        hint : 'Travel a particular distance'
    },
    {
        word : 'cereal',
        hint : 'Food made from the grain of cereals'
    },
    {
        word : 'centre',
        hint : 'The middle point of sth'
    },
    {
        word : 'champ',
        hint : 'Eating food noisily'
    },
    {
        word : 'chance',
        hint : 'An unpleasant possibility'
    },
    {
        word : 'coeval',
        hint : 'Having the same age'
    },
    {
        word : 'complex',
        hint : 'Made of many different parts'
    },
    {
        word : 'compost',
        hint : 'A mixture of decayed plants or food'
    },
    {
        word : 'deep',
        hint : 'Strong and dark'
    },
    {
        word : 'depart',
        hint : 'To leave your job'
    },
    {
        word : 'ethyne',
        hint : 'Chemical name for ACTYLENE'
    },
    {
        word : 'frilled',
        hint : 'Decorated with frills'
    },
    {
        word : 'gravid',
        hint : 'Pregnant'
    },
    {
        word : 'mend',
        hint : 'To heal'
    },
    {
        word : 'messy',
        hint : 'Dirty or untidy'
    },
    {
        word : 'mindful',
        hint : 'Being conscious'
    },
    {
        word : 'muddle',
        hint : 'Confusing anyone'
    },
    {
        word : 'hello',
        hint : 'Hi Everyone, I\'m John'
    },
    {
        word : 'how',
        hint : 'Asking oneself'
    },
    {
        word : 'happy',
        hint : 'So excited'
    },
    {
        word : 'work',
        hint : 'Time is money'
    }
];

// Testing Object
var xLetter = new Object();
// Data source => Array
xLetter.words = theWords;
// Secret Word
xLetter.wordData = null;
// Set secret word with hint
xLetter.setWord = function() {
    xLetter.wordData = xLetter.words[getRandomIntInclusive(0, xLetter.words.length-1)];
};
// Render the word
xLetter.renderWord = function(elemOutput, elemHint) {
    // output letters element
    const outputElem = document.querySelector(elemOutput);
    // output hint element
    const outputHint = document.querySelector(elemHint);
    // position one - first half
    const randomPosA =  getRandomIntInclusive(0, xLetter.wordData.word.length*0.5);
    // position two - second half
    const randomPosZ = getRandomIntInclusive(xLetter.wordData.word.length*0.5, xLetter.wordData.word.length-1);
    // the letters
    const lettersArray = xLetter.wordData.word.split('');
    // output data
    var outputData = '';
    // output letters
    for (let i = 0; i < lettersArray.length; i++) {
        if (i===randomPosA || (i===randomPosZ && xLetter.wordData.word.length>4)) {
            // some few hint letters => 2
            outputData += '<input value="'+lettersArray[i]+'" type="text" name="" class="input-field h3 animated w3-light-card" maxlength="1" minlength="0" disabled>';
        } else {
            // hidden letters => the rest
            outputData += '<input value="" type="text" name="" class="input-field h3 animated w3-light-card-inset missingX" maxlength="1" minlength="0">';
        }
    }
    // finally, print
    outputElem.innerHTML = outputData;
    // the hint too
    outputHint.innerHTML = xLetter.wordData.hint;
    // then listen to the player 
    xLetter.setEars();
    /* log safe letters
    console.log(randomPosA);
    console.log(randomPosZ);
    console.log(lettersArray); */
};
// Add event listeners when players inputs text
xLetter.setEars = function () {
    // Elements
    var gameInputs = document.querySelectorAll('input.input-field');
    // On event triggers
    gameInputs.forEach( function (ele, index) {
        // focus
        ele.addEventListener('focus', function () {
            //console.log('Input '+index+' is focused');
            ele.value = '';
        });
        // blur
        ele.addEventListener('blur', function () {
            //console.log('Input '+index+' is blurred');
            // loop through while checking 
            if(ele.value.trim().length > 0 && ele.classList.contains('missingX')){
                // check the letter at that position
                xLetter.checkLetter(index, ele.value);
            }
        });
    });
};
// Check if Player's input is correct
xLetter.checkLetter = function(cplace, cvalue){   
    // the letters
    const lettersArray = xLetter.wordData.word.split('');
    // specific letter search
    if (lettersArray[cplace]===cvalue.toLowerCase()) {
        // console.log('Correct letter');
        document.querySelectorAll('input.input-field')[cplace].setAttribute('disabled',true);
    } else {
        //console.log('Wrong letter');
        document.querySelectorAll('input.input-field')[cplace].classList.toggle('shake');
    }
};
// Start a game
xLetter.startGame = function(){
    // set new word
    xLetter.setWord();
    // display the word with missing letters
    xLetter.renderWord('#gameInputs', '#gameHint');
};
// Reset a game
xLetter.resetGame = function(tym){
    setTimeout(function() {
        //console.log('New Game!');
        // Restart Game
        xLetter.startGame();
        // Clear GIF
        document.getElementById('gameGif').innerHTML = '';
    }, tym);
};
// Win/Loss
xLetter.outCome = function(){
    // Then filter out missing letter inputs that are correct (=>disabled)
    var goodOnes = document.querySelectorAll('input.input-field[disabled]');
    // if good ones 
    if (goodOnes && goodOnes.length === xLetter.wordData.word.length) {
        // success  
            // then show the win
            xLetter.reactWith('happy');
        // reset game
        xLetter.resetGame(2500);  
    } else {
        // failure
            // then reset quickly
            xLetter.reactWith('sad');
        xLetter.resetGame(1250);
    }
    return;
};
// Random Number Generator
var getRandomIntInclusive = function (min, max) {
    // Both min and max inclusive
    return Math.floor(Math.random() * (Math.floor(max) - Math.floor(min) + 1)) + Math.floor(min);
}   

// When Player checks
var gameCheckBtn = document.getElementById('gameCheckBtn');
// Event handler
gameCheckBtn.addEventListener('click',function () {
    // collect all
    var allGameInputs = document.querySelectorAll('input.input-field');
    // loop through checking for those missing
    allGameInputs.forEach(function (elem, index) {
        // if missing
        if (elem.classList.contains('missingX')) {
            // check the letter at that position
            xLetter.checkLetter(index, elem.value);
        }
    });
    // Find out the outcome 
    xLetter.outCome();
});


// ADDINS
// emoji reaction gif
xLetter.reactWith = function(emojiAct) {
    // Random number
    var randomGifImageNumber = getRandomIntInclusive(1,4);
    // Reaction
    var randomGifImageName = null;
    // Is Happy or Sad?
    switch (emojiAct) {
        case 'happy':
            randomGifImageName = gifMilkStore.happy[randomGifImageNumber-1];
            break;
        case 'sad':
            randomGifImageName = gifMilkStore.angry[randomGifImageNumber-1];
            break;
    
        default:
            randomGifImageName = null;
            break;
    }
    // Apply the Emoji
    if(randomGifImageName !== null){
        randomGifImageName.setAttribute('alt',gifMilkBottle[randomGifImageNumber-1]);
        randomGifImageName.className = 'w3-image';
        document.getElementById('gameGif').appendChild(randomGifImageName);
    }
};

// Emoji GIF names
var gifMilkBottle = [
    'happy-1.gif',
    'happy-2.gif',
    'happy-3.gif',
    'happy-4.gif',
    'angry-1.gif',
    'angry-2.gif',
    'angry-3.gif',
    'angry-4.gif',
];
// Store images
var gifMilkStore = {
    happy : {
        0 : null,
        1 : null,
        2 : null,
        3 : null
    },
    angry : {
        0 : null,
        1 : null,
        2 : null,
        3 : null
    }
};

// load multiple images and callback when ALL images have loaded
loadImages = function(names, callback) { 
    var result = [];
    var count  = names.length;

    var onload = function() {
      if (--count == 0)
        callback(result);
    };

    for(var n = 0 ; n < names.length ; n++) {
      var name = names[n];
      result[n] = document.createElement('img');
      Dom.on(result[n], 'load', onload);
      result[n].src = "img/" + name;
    }
  }

//=========================================================================
// minimalist DOM helpers
//=========================================================================
var Dom = {

    get:  function(id)                     { return ((id instanceof HTMLElement) || (id === document)) ? id : document.getElementById(id); },
    set:  function(id, html)               { Dom.get(id).innerHTML = html;                        },
    on:   function(ele, type, fn, capture) { Dom.get(ele).addEventListener(type, fn, capture);    },
    un:   function(ele, type, fn, capture) { Dom.get(ele).removeEventListener(type, fn, capture); },
    show: function(ele, type)              { Dom.get(ele).style.display = (type || 'block');      },
    blur: function(ev)                     { ev.target.blur();                                    },
  
    addClassName:    function(ele, name)     { Dom.toggleClassName(ele, name, true);  },
    removeClassName: function(ele, name)     { Dom.toggleClassName(ele, name, false); },
    toggleClassName: function(ele, name, on) {
      ele = Dom.get(ele);
      var classes = ele.className.split(' ');
      var n = classes.indexOf(name);
      on = (typeof on == 'undefined') ? (n < 0) : on;
      if (on && (n < 0))
        classes.push(name);
      else if (!on && (n >= 0))
        classes.splice(n, 1);
      ele.className = classes.join(' ');
    },
  
    storage: window.localStorage || {}

  }

	/* Dark Mode / Light Mode */
    var _htmlTag = document.documentElement;
    /*
        using body gave me a bug on my Android, 
        to fix that i used html tag and
        assign the darkmode class to html 
    
        LIKE =>
    
            html.calc-darkmode,
            .calc-darkmode body 
            {
                background: #111;
                  color: #ff974a;
            }
    
        ...
    */
    var _htmlBody = document.body;
    var _toggleDLMode = document.getElementById('darkModeBtn');
    if (_toggleDLMode) {
        _toggleDLMode.addEventListener('click',function(){
            _htmlTag.classList.toggle('let-darkmode');
            if (_htmlTag.classList.contains('let-darkmode')) {
                console.log('Dark Mode');
                _toggleDLMode.innerHTML = '<i class="fa fa-moon"></i><span class="w3-hide-small">&nbsp;&nbsp;Dark Mode</span>';
                if (localStorage) {
                    localStorage.setItem("let-dark-mode", "true");  
                }
            } else if (_htmlTag.classList.contains('w3-white')) {
                console.log('Light Mode');
                _toggleDLMode.innerHTML = '<i class="fa fa-sun"></i><span class="w3-hide-small">&nbsp;&nbsp;Light Mode</span>';
                if (localStorage) {
                    localStorage.setItem("let-dark-mode", "false");  
                }
            }
        });
    } 
    
    /* store Dark Mode value in Local Storage */
    window.addEventListener('load', function () {
        if (localStorage && localStorage.getItem("let-dark-mode") === "true") { 	
            if (_toggleDLMode) {
                _toggleDLMode.click();
            }
        }
    });

// ===============================FINALLY============================ // 
  
// When Everything is loaded
window.addEventListener('load',function(){
    // Hide loader & switch to start
    switchViewTo('start');
},false);

// When All images are loaded
loadImages(gifMilkBottle,function(images) {
    // Start Game
    xLetter.startGame();
    // Store GIF's
    //gifMilkStore = images;
    gifMilkStore.happy[0] = images[0];
    gifMilkStore.happy[1] = images[1];
    gifMilkStore.happy[2] = images[2];
    gifMilkStore.happy[3] = images[3];
    gifMilkStore.angry[0] = images[4];
    gifMilkStore.angry[1] = images[5];
    gifMilkStore.angry[2] = images[6];
    gifMilkStore.angry[3] = images[7];
});