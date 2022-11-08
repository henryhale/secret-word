import { randomInt } from "../helpers.js";

// Some words
const data = [
  {
    word: 'absent',
    hint: 'Not in place',
  },
  {
    word: 'actor',
    hint: 'He perfoms on TV',
  },
  {
    word: 'aspire',
    hint: 'Strong desire to achieve',
  },
  {
    word: 'blend',
    hint: 'Form a mixture',
  },
  {
    word: 'brittle',
    hint: 'Hard but easily broken',
  },
  {
    word: 'soul',
    hint: 'The spiritual part of an human',
  },
  {
    word: 'cereal',
    hint: 'Food made from the grain of cereals',
  },
  {
    word: 'centre',
    hint: 'The middle point of something',
  },
  {
    word: 'champ',
    hint: 'Eating food noisily',
  },
  {
    word: 'chance',
    hint: 'An unpleasant possibility',
  },
  {
    word: 'coeval',
    hint: 'Having the same age',
  },
  {
    word: 'complex',
    hint: 'Made of many different parts',
  },
  {
    word: 'compost',
    hint: 'A mixture of decayed plants or food',
  },
  {
    word: 'scientist',
    hint: 'man of science',
  },
  {
    word: 'depart',
    hint: 'To leave your job',
  },
  {
    word: 'ethyne',
    hint: 'Chemical name for ACTYLENE',
  },
  {
    word: 'frilled',
    hint: 'Decorated with frills',
  },
  {
    word: 'miss',
    hint: 'Put off, yearn',
  },
  {
    word: 'mend',
    hint: 'To heal',
  },
  {
    word: 'messy',
    hint: 'Dirty or untidy',
  },
  {
    word: 'mindful',
    hint: 'Being conscious',
  },
  {
    word: 'muddle',
    hint: 'Confusing anyone',
  },
  {
    word: 'hello',
    hint: "Hi Everyone, I'm John",
  },
  {
    word: 'how',
    hint: 'Asking oneself',
  },
  {
    word: 'happy',
    hint: 'So excited',
  },
  {
    word: 'work',
    hint: 'Time is money',
  },
  {
    word: 'because',
    hint: 'Used to reason'
  },
  {
    word: 'everybody',
    hint: 'Every person'
  },
  {
    word: 'recent',
    hint: 'New, fresh'
  },
  {
    word: 'people',
    hint: 'Human being'
  },
  {
    word: 'private',
    hint: 'Special, exclusive'
  },
  {
    word: 'think',
    hint: 'consider, contemplate'
  }
];

export function getRandomWord() {
    return data[randomInt(0, data.length-1)]
}