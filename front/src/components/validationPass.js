const validationPass = (userData) => {
    let errorsPass = []

    if(!/.*\d+.*/.test(userData.pass)){
        errorsPass= "La contraseña debe contener al menos un numero"
    }

    if (userData.pass.length < 6 || userData.pass.length > 10){
        errorsPass= "La contraseña debe tener un tamaño entre 6 y 10 caracteres"
    }

    return errorsPass;
}

export default validationPass;