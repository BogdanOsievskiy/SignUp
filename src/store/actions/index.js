export const setEmail = (email) => {
    return {
        type: 'SET_EMAIL',
        payload: email
    }
}

export function setPass (password) {
    return {
        type: 'SET_PASS',
        payload: password
    }
}

export function setDate (date) {
    return {
        type: 'SET_DATE',
        payload: date
    }
}

export function setGender (gender)  {
    return {
        type: 'SET_GENDER',
        payload: gender
    }
}

export function setAnswer (answer) {
    return {
        type: 'SET_ANSWER',
        payload: answer
    }
}

export function setFirstScreenValidStatus (status) {
    return {
        type: 'SET_FIRST_SCREEN_STATUS',
        payload: status
    }
}

export function setSecondScreenValidStatus (status) {
    return {
        type: 'SET_SECOND_SCREEN_STATUS',
        payload: status
    }
}