import {ActionTypes} from './actions';

const initialState = {
  letters: [
    {letter: "A", words: "Apple", transaction: "[ei]"},
    {letter: "B", words: "Ball", transaction: "[bi:]"},
    {letter: "C", words: "Cat", transaction: "[ci:]"},
    {letter: "D", words: "Dog", transaction: "[di:]"},
    {letter: "E", words: "Eat", transaction: "[i:]"},
    {letter: "F", words: "Fox", transaction: "[ef]"},
    {letter: "G", words: "Grass", transaction: "[ʤi:]"},
    {letter: "H", words: "Hat", transaction: "[eiʧ]"},
    {letter: "I", words: "Ice", transaction: "[ai]"},
    {letter: "J", words: "Jam", transaction: "[ʤei]"},
    {letter: "K", words: "Kid", transaction: "[kei]"},
    {letter: "L", words: "Life", transaction: "[el]"},
    {letter: "M", words: "Mouse", transaction: "[em]"},
    {letter: "N", words: "Nose", transaction: "[en]"},
    {letter: "O", words: "Oak", transaction: "[ou]"},
    {letter: "P", words: "Pet", transaction: "[pi:]"},
    {letter: "Q", words: "Queen", transaction: "[kju:]"},
    {letter: "R", words: "Red", transaction: "[a:]"},
    {letter: "S", words: "Sport", transaction: "[es]"},
    {letter: "T", words: "Tab", transaction: "[ti:]"},
    {letter: "U", words: "Up", transaction: "[ju:]"},
    {letter: "V", words: "Van", transaction: "[vi:]"},
    {letter: "W", words: "Water", transaction: "[‘dablju:]"},
    {letter: "X", words: "Xenia", transaction: "[eks]"},
    {letter: "Y", words: "Yes", transaction: "[wai]"},
    {letter: "Z", words: "Zebra", transaction: "[zed]"}
  ],
  stats: {
    showStats: false,
    correct: 0,
    incorrect: 0,
    skip: 0,
    corList: [],
    incList: [],
    pasList: []
  },
  test: {
    alphabetForTest: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ],
    testStart: false,
    testCounter: 0
  },
  modals: {
    modal: false
  },
  current: {
    currentIndex: 0
  },
  upperLine: {
    showUpperLine: true
  },
  effects: {
    classNames: ["flipOutY", "flipOutX", "bounceIn", "bounceOut", "wobble", "tada", "swing", "rubberBand", "rotateIn", "rotateInDownLeft", "flip", "zoomInUp", "slideInUp"]
  }

}

const alphabet = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_LETTER_ON_CLICKED:
      return {
        ...state, current: {...state.current, currentIndex: action.payload.index}
      };
    case ActionTypes.PREVIOUS_LETTER:
      const newIndex = state.current.currentIndex === 0 ? 25 : state.current.currentIndex - 1;
      return {
        ...state, current: {...state.current, currentIndex: newIndex}
      };
    case ActionTypes.NEXT_LETTER:
      const newNextIndex = state.current.currentIndex === 25 ? 0 : state.current.currentIndex + 1;
      return {
        ...state, current: {...state.current, currentIndex: newNextIndex}
      };
    case ActionTypes.CORRECT_LETTER:
      const newCorrectIndex = state.current.currentIndex === 25 ? 0 : state.current.currentIndex + 1;
      return {
        ...state,
        current: {...state.current, currentIndex: newCorrectIndex},
        stats: {...state.stats, corList: [...state.stats.corList, state.letters[state.current.currentIndex].letter]}
      };
    case ActionTypes.WRONG_LETTER:
      const newIncorrectIndex = state.current.currentIndex === 25 ? 0 : state.current.currentIndex + 1;
      return {
        ...state,
        current: {...state.current, currentIndex: newIncorrectIndex},
        stats: {...state.stats, incList: [...state.stats.incList, state.letters[state.current.currentIndex].letter]}
      };
    case ActionTypes.SKIP_LETTER:
      const newSkipIndex = state.current.currentIndex === 25 ? 0 : state.current.currentIndex + 1;
      return {
        ...state,
        current: {...state.current, currentIndex: newSkipIndex},
        stats: {...state.stats, pasList: [...state.stats.pasList, state.letters[state.current.currentIndex].letter]}
      };
    case ActionTypes.NEXT_TEST_COUNTER:
      const newNextTestIndex = state.test.testCounter >= 25 ? 0 : state.test.testCounter + 1;
      return {
        ...state, test: {...state.test, testCounter: newNextTestIndex}
      };
    case ActionTypes.START_TEST:
      return {
        ...state,
        test: {...state.test, testCounter: 0, testStart: true},
        stats: {showStats: false, correct: 0, incorrect: 0, skip: 0, corList: [], incList: [], pasList: []}
      };
    case ActionTypes.TOGGLE_CASE:
      const alpCopy = state.test.alphabetForTest.map(el => action.payload.activeCase === 'upper' ? el.toUpperCase() :
        action.payload.activeCase === 'lower' ? el.toLowerCase() : el.toUpperCase() + el.toLowerCase()
      );
      return {
        ...state, test: {...state.test, alphabetForTest: alpCopy}
      };
    default:
      return state;
  }
};

export default alphabet;
