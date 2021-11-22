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
      .post('https://lazy-dev-project-backend.herokuapp.com/api/user/register', userObject)
      .then((response) => {
         props.setUser(response.data)
         window.localStorage.setItem('user', response.data)
         console.log(response.data);
      })
   }

   return(
      <>
         <div className='login'>
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
               <input type="text" onChange={handleUserChange}/>
               <input type="password" onChange={handlePasswordChange}/>
               <input type="submit"/>
            </form>
         </div>
      </>
   )
}

export default Register
