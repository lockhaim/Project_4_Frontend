import React, { useState } from 'react'

const Edit = (props) => {
  let emptyGuide = { id:props.id, name: '', author: '', likes:'', content:'', image: '', rating: '' }
  const [guide, setGuide] = useState(emptyGuide)

  const handleChange = (event) => {
    setGuide({ ...guide, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(guide)
    setGuide({ name: '', author: '', likes:'', content:'', image: '', rating: '' })
  }

  return (
    <>
      <details>
        <summary>Edit Guide</summary>
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
        <label htmlFor="author">author_id : </label>
        <input
          type="number"
          name="author"
          onChange={handleChange}
          value={guide.author}
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

          <br />
          <br />
          <input id='sub-button2' type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit
