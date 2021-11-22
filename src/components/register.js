import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Register = (props) => {

   const [ username, setUsername ] = useState('')
   const [password, setPassword ] = useState('')


   const handleUserChange = (event) => {
      setUsername(event.target.value)
   }

   const handlePasswordChange = (event) => {
      setPassword(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      const userObject = {name: username, password:password, online: true}
      axios
<<<<<<< HEAD
      .post('https://lazy-dev-project-backend.herokuapp.com/api/user/register', userObject)
=======
      .post('https://lazy-dev-project-backend.herokuapp.com/api/guides', userObject)
>>>>>>> 5ae8efc8762bae55c419dd6c0fbdad1df320dc6e
      .then((response) => {

         //We want to log the user in after they sign up.
         console.log(response.data);

         props.setUser(response.data)
         window.localStorage.setItem('user', response.data)
      })
   }

   const closeRegister = () => {
      props.setShowRegister(false)
  }

   return(
      <>
         <div className='login'>
            <div className='loginForm'>
            <h1>Create Account</h1>
               <form onSubmit={handleSubmit}>
                  <input type="text" onChange={handleUserChange}/>
                  <input type="password" onChange={handlePasswordChange}/>
                  <input type="submit"/>
               </form>
               <button className="modalClose" onClick={closeRegister}>Back</button>
            </div>
         </div>
      </>
   )
}

export default Register
