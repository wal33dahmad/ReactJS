import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = ()=>{
      setText(text.toUpperCase())
    }

    const handleLwClick = ()=>{
      setText(text.toLowerCase())
    }

    const handleDeleteClick = ()=> {
      setText("")
    }

    const handleOnChange = (event)=>{
      console.log("OnChange Clicked");
      setText(event.target.value)
    }

  return (
    <>
    <div className="container">
      <h1>{ props.heading} </h1>
      <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Start writing here...!'></textarea>
      </div>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={handleUpClick}>Upper Case</button>
        <button className="btn btn-primary" onClick={handleLwClick}>Lower Case</button>
      </div>
      <button className="btn btn-danger mx-2" onClick={handleDeleteClick}>Delete Text</button>
    </div>
    <div className="container my-3">
      <h3>Your text summary</h3>
      <div className='d-flex justify-content-between'>
        <p>{ text.split(" ").length } words and { text.length } characters</p>
        <p>{Math.round(0.008 * text.split(" ").length)} minutes read</p>
      </div>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}