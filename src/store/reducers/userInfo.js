const initialState = {
    email: '',
    passWord: '',
    birthDate: NaN,
    gender: 'male',
    answer: ''
}

export default function userInfo (state = initialState, action) {
    switch(action.type) {
        case 'SET_EMAIL': 
            return {
                ...state, email: action.payload
            }
        case 'SET_PASS':
            return {
                ...state, passWord: action.payload
            }
        case 'SET_DATE':
            return {
                ...state, birthDate: action.payload
            }
        case 'SET_GENDER':
            return {
                ...state, gender: action.payload
            }
        case 'SET_ANSWER':
            return {
                ...state, answer: action.payload
            }
        default: 
            return state;
    }
}