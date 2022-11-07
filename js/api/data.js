import { randomInt } from "../helpers.js";

// Some words
const data = [
  {
    word: 'absent',
    hint: 'Not in place',
  },
  {
    word: 'actor',
    hint: 'She perfoms on TV',
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
    word: 'come',
    hint: 'Travel a particular distance',
  },
  {
    word: 'cereal',
    hint: 'Food made from the grain of cereals',
  },
  {
    word: 'centre',
    hint: 'The middle point of sth',
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
    word: 'deep',
    hint: 'Strong and dark',
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
    word: 'gravid',
    hint: 'Pregnant',
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
];

export function getRandomWord() {
    return data[randomInt(0, data.length-1)]
}