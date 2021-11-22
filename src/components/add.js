import React, { useState, useEffect } from 'react'

const Add = (props) => {
    let emptyGuide = { name: '', author: '', likes:'', content:'', image: '', rating: '' }
  const [guide, setGuide] = useState(emptyGuide)

  const handleChange = (event) => {
    setGuide({ ...guide, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(guide)
    setGuide({ name: '', author: '', likes:'', content:'', image: '', rating: '' })
  }

  return (
    <div className='addForm'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={guide.name}
        />
        <br />
        <br />
        
        <input
          type="hidden"
          name="author"
          onChange={handleChange}
          
          value={props.user.id}
        />
        <label htmlFor="main_power">likes: </label>
          <input
            type="text"
            name="likes"
            onChange={handleChange}
            value={guide.likes}
          />
          <label htmlFor="content">content: </label>
          <input
            id="contentForm"
            contentEditable
            type="text"
            name="content"
            onChange={handleChange}
            value={guide.content}
          />
          <label htmlFor="image">image: </label>
          <input
            type="text"
            name="image"
            onChange={handleChange}
            value={guide.image}
          />
          <label htmlFor="rating">rating: </label>
          <input
            type="text"
            name="rating"
            onChange={handleChange}
            value={guide.rating}
          />
          <br/>
        <input id='sub-button' type="submit" />
      </form>
    </div>
  )
}

export default Add
