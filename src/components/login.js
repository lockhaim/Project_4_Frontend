import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Login = (props) => {
   const [ username, setUsername ] = useState('')
   const [password, setPassword ] = useState('')
   const [user, setUser] = useState({})

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
      .put('http://localhost:8000/api/user/login', userObject)
      .then((response) => {
         setUser(response.data)
         window.localStorage.setItem('user', response.data)
         console.log(response.data);
      })
   }

   return(
      <div className='login'>
         <h1>Login</h1>
         <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleUserChange}/>
            <input type="text" onChange={handlePasswordChange}/>
            <input type="submit"/>
         </form>
      </div>
   )
}

export default Login
