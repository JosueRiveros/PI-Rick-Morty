const validationEmail = (userData) => {
    let errorsEmail= []

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errorsEmail = "El email ingresado no es válido"
    }

    if(!userData.email){
        errorsEmail = "Ingrese un email"
    }

    if(userData.email.length > 35){
        errorsEmail = "El email no debe superar los 35 caracteres"
    }

    return errorsEmail;
}

export default validationEmail;