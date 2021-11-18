import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/add'
import Edit from './components/edit'
import Header from './components/header'
import Footer from './components/footer'
import './views/normalize.css'
import './views/skeleton.css'

const App = () => {

  let [guides, setGuides] = useState([])
  

  const getGuides = () => {
    axios
      .get('http://localhost:8000/api/characters')
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
      .post('http://localhost:8000/api/characters', addGuide)
      .then((response) => {
        console.log(response)
        getGuides()
      })
  }
  const handleDelete = (event) => {
    axios
      .delete('http://localhost:8000/api/characters/' + event.target.value)
      .then((response) => {
        getGuides()
      })
  }

  const handleUpdate = (editGuide) => {
    console.log(editGuide)
    axios
      .put('http://localhost:8000/api/characters/' + editGuide.id, editGuide)
      .then((response) => {
        getGuides()
      })
  }

  return (
    
    <>
    <Header />
    <Add handleCreate={handleCreate}/>
      <div className="people">
      
    {guides.map((guide) => {
      return (
     <div className="person" key={guide.id}>
       <h4>Name: {guide.name}</h4>
       <h5>author_id: {guide.author_id}</h5>
       <h5>likes: {guide.likes}</h5>
       <h5>content: {guide.content}</h5>
       <h5>image: {guide.image}</h5>
       <h5>rating: {guide.rating}</h5>

       <Edit handleUpdate={handleUpdate} id={guide.id}/>
       <button onClick={handleDelete} value={guide.id}>
                X
              </button>
     </div>
   )
 })}
 <Footer />
</div>
    </>
  )
}

export default App
