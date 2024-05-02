import {ActionTypes} from './actions';
import englishAlphabet from '../../languages/english.json';
import russianAlphabet from '../../languages/russian.json';
import ukrainianAlphabet from '../../languages/ukrainian.json';

const initialState = {
  currentLanguage: 'english',
  currentCase: 'upper',
  currentIndex: 0,
  alphabets: {
    english: englishAlphabet,
    russian: russianAlphabet,
    ukrainian: ukrainianAlphabet
  },
  stats: {
    showStats: true,
    correct: 0,
    incorrect: 0,
    skip: 0,
    corList: [],
    incList: [],
    pasList: []
  },
  test: {
    testStart: false,
    testCounter: 0
  },
  modals: {
    modal: false
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
        ...state,  currentIndex: action.payload.index
      };
    case ActionTypes.PREVIOUS_LETTER:
      const newIndex = state.currentIndex === 0 ? 25 : state.currentIndex - 1;
      return {
        ...state, currentIndex: newIndex
      };
    case ActionTypes.NEXT_LETTER:
      const newNextIndex = state.currentIndex === 25 ? 0 : state.currentIndex + 1;
      return {
        ...state, currentIndex: newNextIndex
      };
    case ActionTypes.CORRECT_LETTER:
      const newCorrectIndex = state.currentIndex === 25 ? 0 : state.currentIndex + 1;
      return {
        ...state,
        current: {...state.current, currentIndex: newCorrectIndex},
        stats: {...state.stats, corList: [...state.stats.corList, state.alphabets[state.currentLanguage][state.currentIndex].letter]}
      };
    case ActionTypes.WRONG_LETTER:
      const newIncorrectIndex = state.currentIndex === 25 ? 0 : state.currentIndex + 1;
      return {
        ...state,
         currentIndex: newIncorrectIndex,
        stats: {...state.stats, incList: [...state.stats.incList, state.alphabets[state.currentLanguage][state.currentIndex].letter]}
      };
    case ActionTypes.SKIP_LETTER:
      const newSkipIndex = state.currentIndex === 25 ? 0 : state.currentIndex + 1;
      return {
        ...state,
        currentIndex: newSkipIndex,
        stats: {...state.stats, pasList: [...state.stats.pasList, state.alphabets[state.currentLanguage][state.currentIndex].letter]}
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
      return {
        ...state,
        currentCase: action.payload.activeCase,
      };
    case ActionTypes.SET_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload.lang,
        currentIndex: 0
      };
    default:
      return state;
  }
};

export default alphabet;
