
import { useState } from "react";
import validationEmail from "../validationEmail";
import validationPass from "../validationPass";


const Form = ({login}) => {
   
   const EMAIL = "riveritos@gmail.com"
   const PASSWORD = "river123"

   const [errorsEmail, setErrorsEmail] = useState([])

   const [errorsPass, setErrorsPass] = useState([])

   const [userDataEmail, setUserDataEmail] = useState({
   email:""
   })

   const [userDataPass, setUserDataPass] = useState({
   pass:""
   })

   const handleOnChangeEmail = (event) => {
     setUserDataEmail({
        ...userDataEmail,
        [event.target.name]:event.target.value
     })

     setErrorsEmail(validationEmail({
        ...userDataEmail,
        [event.target.name]:event.target.value
     }))

   }

   const handleOnChangePass = (event) => {
    
      setUserDataPass({
       ...userDataPass,
       [event.target.name]:event.target.value
    })
 
      setErrorsPass(validationPass({
         ...userDataPass,
         [event.target.name]:event.target.value
      }))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      login(userDataEmail, userDataPass)
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <h1>Rick & Morty</h1>

            <label htmlFor="email">Email: </label>
            <input name="email" type="text" placeholder="Ingrese un e-mail" value={userDataEmail.email} onChange={handleOnChangeEmail}/>
            {errorsEmail && <p style={{color:"red"}}>{errorsEmail}</p>}
            <hr/>
            <label htmlFor="pass">Password: </label>
            <input name="pass" type="text" placeholder="Ingrese una contraseña" value={userDataPass.pass} onChange={handleOnChangePass}/>
            {errorsPass && <p style={{color:"red"}}>{errorsPass}</p>}
            <hr/>
            <button disabled={userDataEmail.email!==EMAIL || userDataPass.pass!==PASSWORD}>Ingresar</button>
            
        </form>
        
    )
}

export default Form;