const initialState = {
    letters: [
        {
            letter: 'a',
            words: 'apple',
            transaction: '[ei]'
        }
    ],
    stats: {
        correct:0,
        incorrect:0,
        skip:0
    },
    test: {
        testStart: false
    },
    modals:{
        modal:false
    }

}

const alphabet = (state = initialState, action) => {
    switch (action.type) {

        case 'CHANGE_CREATE_MODAL':
            return {
                ...state, modals: {...state.modals, modalsIsOpen: action.payload.value}
            }
        default:
            return state
    }
}
export default alphabet;