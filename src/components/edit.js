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
console.log(guide);
  return (
    <>
      <details>
        <summary>Edit Guide</summary>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={props.name}
          onChange={handleChange}
        />
        <br />
        <br />
        {/* <label htmlFor="author">author_id : </label> */}
        <input
          type="hidden"
          name="author"
          onChange={handleChange}

          value={props.author_id}

          placeholder={props.author_id}
          value={props.user.author}

        />
        <label htmlFor="main_power">likes: </label>
          <input
            type="text"
            name="likes"
            value={props.likes}
            onChange={handleChange}
          />
          <label htmlFor="content">content: </label>
          <input
            type="text"
            name="content"
            onChange={handleChange}
            value={props.content}
          />
          <label htmlFor="image">image: </label>
          <input
            type="text"
            name="image"
            onChange={handleChange}
            value={props.image}
          />
          <label htmlFor="rating">rating: </label>
          <input
            type="text"
            name="rating"
            onChange={handleChange}
            value={props.rating}
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
