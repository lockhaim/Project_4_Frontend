import React, { useState, useEffect } from 'react'


const TutorialCard = (props) => {
    const {guide, handleDelete, editCar} = props;
    let emptyGuide = { name: '', author_id: '', likes:'', content:'', image: '', rating: '' }
//   const [guide, setGuide] = useState(emptyGuide)


    return(
        <div className="person" key={guide.id}>
        <h4>Name: {guide.name}</h4>
        <h5>author_id: {guide.author_id}</h5>
        <h5>likes: {guide.likes}</h5>
        <h5>content: {guide.content}</h5>
        <h5>image: {guide.image}</h5>
        <h5>rating: {guide.rating}</h5>
 
       
      </div>
    );
  }
  export default TutorialCard