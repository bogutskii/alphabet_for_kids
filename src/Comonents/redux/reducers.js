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
        testStart: false
    },
    modals: {
        modal: false
    },
    current: {
        currentIndex: 0
    },
    upperLine: {
        showUpperLine: true
    }

}

const alphabet = (state = initialState, action) => {
    switch (action.type) {

        case 'CHANGE_LETTER_ON_CLICKED':
            return {
                ...state, current: {...state.current, currentIndex: action.payload.index}
            }
        case 'PREVIOUS_LETTER':
            let newIndex = state.current.currentIndex
            if (newIndex === 0) {
                newIndex = 25;
            } else {
                --newIndex
            }
            return {
                ...state, current: {...state.current, currentIndex: newIndex}
            }
        case 'NEXT_LETTER':
            let newNextIndex = state.current.currentIndex
            if (newNextIndex === 25) {
                newNextIndex = 0;
            } else {
                newNextIndex++
            }
            return {
                ...state, current: {...state.current, currentIndex: newNextIndex}
            }
        case 'CORRECT_LETTER':
            let newCorrectIndex = state.current.currentIndex
            if (newCorrectIndex === 25) {
                newCorrectIndex = 0;
            } else {
                newCorrectIndex++
            }
            return {
                ...state, current: {...state.current, currentIndex: newCorrectIndex},
                stats: {...state.stats, corList: [...state.stats.corList, state.letters[action.payload.value].letter]}

            }
        case 'WRONG_LETTER':
            let newIncorrectIndex = state.current.currentIndex
            if (newIncorrectIndex === 25) {
                newIncorrectIndex = 0;
            } else {
                newIncorrectIndex++
            }
            return {
                ...state, current: {...state.current, currentIndex: newIncorrectIndex},
                stats: {...state.stats, incList: [...state.stats.incList, state.letters[action.payload.value].letter]}

            }
        case 'SKIP_LETTER':
            let newSkipIndex = state.current.currentIndex
            if (newSkipIndex === 25) {
                newSkipIndex = 0;
            } else {
                newSkipIndex++
            }
            return {
                ...state, current: {...state.current, currentIndex: newSkipIndex},
                stats: {...state.stats, pasList: [...state.stats.pasList, state.letters[action.payload.value].letter]}

            }

        default:
            return state
    }
}
export default alphabet;