import React, { useState, useEffect } from 'react'
import Edit from './edit'


const TutorialCard = (props) => {
    const {guide, handleDelete, handleUpdate} = props;
    let emptyGuide = { name: '', author_id: '', likes:'', content:'', image: '', rating: '' }
//   const [guide, setGuide] = useState(emptyGuide)


    return(
        <div className="person" key={guide.id}>
        
        <h4>Name: {guide.name}</h4>
        <h5>author_id: {guide.author_id}</h5>
        <h5>likes: {guide.likes}</h5>
        <h5>content: {guide.content}</h5>
<<<<<<< HEAD
        <img src = {guide.image} alt={guide.name} />
        <h5>rating: {guide.rating}</h5>


=======
        <h5>image: {guide.image}</h5>
        {/* <img src={guide.image} /> */}
        
        <Edit handleUpdate={handleUpdate} id={guide.id}/>
       <button onClick={handleDelete} value={guide.id}>
                X
              </button>
       
>>>>>>> 94d6be974f47812f5efd13d8a719a0a99d37a0cc
      </div>
    );
  }
  export default TutorialCard
