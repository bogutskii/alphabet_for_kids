export const ActionTypes = {
  CHANGE_LETTER_ON_CLICKED: 'CHANGE_LETTER_ON_CLICKED',
  PREVIOUS_LETTER: 'PREVIOUS_LETTER',
  NEXT_LETTER: 'NEXT_LETTER',
  CORRECT_LETTER: 'CORRECT_LETTER',
  WRONG_LETTER: 'WRONG_LETTER',
  SKIP_LETTER: 'SKIP_LETTER',
  NEXT_TEST_COUNTER: 'NEXT_TEST_COUNTER',
  START_TEST: 'START_TEST',
  STOP_TEST: 'STOP_TEST',
  TOGGLE_CASE: 'TOGGLE_CASE',
  SET_LANGUAGE: 'SET_LANGUAGE'

};

export const changeLetterOnClicked = (index) => ({
  type: ActionTypes.CHANGE_LETTER_ON_CLICKED,
  payload: {index}
});

export const previousLetter = () => ({
  type: ActionTypes.PREVIOUS_LETTER
});

export const nextLetter = () => ({
  type: ActionTypes.NEXT_LETTER
});

export const correctLetter = (value) => ({
  type: ActionTypes.CORRECT_LETTER,
  payload: {value}
});

export const wrongLetter = (value) => ({
  type: ActionTypes.WRONG_LETTER,
  payload: {value}
});

export const skipLetter = (value) => ({
  type: ActionTypes.SKIP_LETTER,
  payload: {value}
});

export const nextTestCounter = () => ({
  type: ActionTypes.NEXT_TEST_COUNTER
});

export const startTest = (value) => ({
  type: ActionTypes.START_TEST,
  payload: {value}
});
export const stopTest = () => ({
  type: ActionTypes.STOP_TEST,
});

export const toggleCase = (activeCase) => ({
  type: ActionTypes.TOGGLE_CASE,
  payload: {activeCase}
});
export const setLanguage = (lang) => ({
  type: ActionTypes.SET_LANGUAGE,
  payload: {lang}
});
