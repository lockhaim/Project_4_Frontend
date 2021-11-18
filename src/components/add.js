import React, { useState, useEffect } from 'react'

const Add = (props) => {
    let emptyGuide = { name: '', author_id: '', likes:'', content:'', image: '', rating: '' }
  const [guide, setGuide] = useState(emptyGuide)

  const handleChange = (event) => {
    setGuide({ ...guide, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(guide)
    setGuide({ name: '', author_id: '', likes:'', content:'', image: '', rating: '' })
  }

  return (
    <>
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
        <label htmlFor="author_id ">author_id : </label>
        <input
          type="number"
          name="author_id"
          onChange={handleChange}
          value={guide.author_id}
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
        <input type="submit" />
      </form>
    </>
  )
}

export default Add