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
import Register from './components/register.js'

const App = () => {


  let [guides, setGuides] = useState([])
  const [user, setUser] = useState({name:'guest'})

  const [ showLogin, setShowLogin ] = useState(false)
  const [showRegister, setShowRegister ] = useState(false)

    let [guides, setGuides] = useState([])
    const [user, setUser] = useState({})


    const getGuides = () => {
        axios
            .get('https://lazy-dev-project-backend.herokuapp.com/api/guides')
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
        .then((response) => {
            console.log(response)
            getGuides()
        })
    }
    const handleDelete = (event) => {
        axios
            .delete('https://lazy-dev-project-backend.herokuapp.com/api/guides/' + event.target.value)
            .then((response) => {
                getGuides()
            })
        }

    const handleUpdate = (editGuide) => {
        console.log(editGuide)
        axios
            .put('https://lazy-dev-project-backend.herokuapp.com/api/guides/' + editGuide.id, editGuide)
            .then((response) => {
            getGuides()
        })

      setUser({name:'guest'})
      window.localStorage.setItem('user', null)
  }

  const closeLogin = () => {
      setShowLogin(false)
  }

   return (
      <div className='main'>
         <Header handleLogout={handleLogout} setShowLogin={setShowLogin} setShowRegister={setShowRegister} user={user}/>
         {showRegister?
            <Register setUser={setUser} setShowRegister={setShowRegister}/>
            :
            null
         }
         {showLogin?
            <Login setUser={setUser} setShowLogin={setShowLogin}/>
            :
            null
         }
         <Add handleCreate={handleCreate} user={user}/>
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





    }

    const handleLogout = () => {
        let userObject = user
        axios
            .put('https://lazy-dev-project-backend.herokuapp.com/api/guides', userObject)
            .then((response) => {
                console.log(response.data);
            })
        setUser({})
        window.localStorage.setItem('user', null)
    }

    console.log(guides);
    return (
        <div className='main'>
            <Header handleLogout={handleLogout}/>
            <Register setUser={setUser}/>
            <Login setUser={setUser}/>
            <Add guides={guides} author={guides.author} user={user} handleCreate={handleCreate}/>
            <div className="guides">
                {guides.map((guide) => {
                    return (
                        <div className="guideOutline" key={guide.id}>
                        <TutorialCard user={user} guide={guide} handleDelete={handleDelete} handleUpdate={handleUpdate} />
                        </div>
                    )
            })}
        </div>
        <Footer />
        </div>

   )
}

export default App
