import React, { useState, useEffect } from 'react'

const Add = (props) => {
   let emptyGuide = { name: '', author_id: '', likes:'', content:'', rating: '' }
   const [guide, setGuide] = useState(emptyGuide)

   const [selectedFile, setSelectedFile] = useState(null)
   const [ name, setName ]= useState('')
   const [ author, setAuthor ]= useState('')
   const [ likes, setLikes ]= useState(0)
   const [ content, setContent ]= useState('')
   const [ rating, setRating ]= useState(0)

   const handleChange = (event) => {
    setGuide({ ...guide, [event.target.name]: event.target.value })
   }

    const formData = new FormData()
    formData.append("file", selectedFile);
    // formData.append("name", name)
    // formData.append("author_id", author)
    // formData.append("likes", likes)
    // formData.append("content", content)
    // formData.append("raing", rating)


   const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(formData)
   }

   return (
      <div className='addForm'>
         <form onSubmit={handleSubmit} method="POST" enctype="multipart/form-data">
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
            type="file"
            name="image"
            onChange={(event) => setSelectedFile(event.target.files[0])}
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
    </div>
  )
}

export default Add
