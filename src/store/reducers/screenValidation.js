const initialState = {
    isFirstScreenValid: false,
    isSecondScreenValid: false,
}

export default function screenValidation (state = initialState, action) {
    switch(action.type) {
        case 'SET_FIRST_SCREEN_STATUS': 
            return {
                ...state, isFirstScreenValid: action.payload
            }
        case 'SET_SECOND_SCREEN_STATUS':
            return {
                ...state, isSecondScreenValid: action.payload
            }
        default: 
            return state;
    }
}
