import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/add'
import Edit from './components/edit'
import Header from './components/header'
import Footer from './components/footer'
import TutorialCard from './components/tutorialCard'
import './views/normalize.css'
import './views/skeleton.css'
import './views/styles.css'
import Login from './components/login.js'

const App = () => {

  let [guides, setGuides] = useState([])
  const [user, setUser] = useState({})

  const getGuides = () => {
    axios
      .get('https://lazy-dev-project-backend.herokuapp.com/api/guides')
      // https://lazy-dev-project-backend.herokuapp.com/api/guides
      .then(
        (response) => setGuides(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
   }

   useEffect(() => {
    getGuides()
   }, [])

   const handleCreate = (addGuide) => {
    axios
      .post('https://lazy-dev-project-backend.herokuapp.com/api/guides', addGuide)
      // https://lazy-dev-project-backend.herokuapp.com/api/guides
      .then((response) => {
        console.log(response)
        getGuides()
      })
  }
  const handleDelete = (event) => {
    axios
      .delete('https://lazy-dev-project-backend.herokuapp.com/api/guides/' + event.target.value)
      // https://lazy-dev-project-backend.herokuapp.com/api/guides
      .then((response) => {
        getGuides()
      })
  }

  const handleUpdate = (editGuide) => {
    console.log(editGuide)
    axios
      .put('https://lazy-dev-project-backend.herokuapp.com/api/guides/' + editGuide.id, editGuide)
      // https://lazy-dev-project-backend.herokuapp.com/api/guides
      .then((response) => {
        getGuides()
      })
  }

  const handleLogout = () => {
     // userObject = window.localStorage.getItem('user')
     let userObject = {name:'Lorens', password:'123', online:true}
     axios
        .put('https://lazy-dev-project-backend.herokuapp.com/api/user/login', userObject)
        .then((response) => {
           setUser({})
           window.localStorage.setItem('user', null)
           console.log(response.data);
        })
  }

   return (
      <div className='main'>
         <Header handleLogout={handleLogout}/>
         <Login setUser={setUser}/>
         <Add handleCreate={handleCreate}/>
         <div className="guides">
            {guides.map((guide) => {
               return (
                  <div className="guideOutline" key={guide.id}>
                  <TutorialCard guide={guide} handleDelete={handleDelete} handleUpdate={handleUpdate} />
                  </div>
               )
            })}
         </div>
         <Footer />
      </div>
      
      
      
      
   )
}

export default App
