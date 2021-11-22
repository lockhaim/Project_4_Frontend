import React, { useState, useEffect } from 'react'
import Edit from './edit'


const TutorialCard = (props) => {
    const {user, guide, handleDelete, handleUpdate} = props;
    let emptyGuide = { name: '', author: '', likes:'', content:'', image: '', rating: '' }
    //const [guide, setGuide] = useState(emptyGuide)


    return(
        <div className="guide" key={guide.id}>

        <h4>Name: {guide.name}</h4>
        <h5>author_id: {user.id}</h5>
        <h5>likes: {guide.likes}</h5>
        <h5>content: {guide.content}</h5>

        <img src = {guide.image} alt={guide.name} />
        <h5>rating: {guide.rating}</h5>

        <h5>image: {guide.image}</h5>

        

        <Edit user={user} handleUpdate={handleUpdate} id={guide.id} name={guide.name} author_id={guide.author_id} likes={guide.likes} content={guide.content} image={guide.image} rating={guide.rating}/>
       <button id='sub-button3' onClick={handleDelete} value={guide.id}>
                DELETE
              </button>

      </div>
    );
  }
  export default TutorialCard
