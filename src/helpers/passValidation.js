export const passValidation = (pass) => {
    return pass.length >= 6
}

export const confirmPassValidation = (pass, confPass) => {
    return  pass === confPass;
}