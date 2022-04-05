import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = ()=>{
      setText(text.toUpperCase())
      props.alert("Converted to UpperCase", "success")
    }

    const handleLwClick = ()=>{
      setText(text.toLowerCase())
      props.alert("Converted to LowerCase", "success")

    }

    const handleRMSClick = ()=>{
      let newText = text.split(/[  ]+/)
      setText(newText.join(" "))
      props.alert("Extra Spaces removed", "primary")
    }

    const handleCopyClick = ()=>{
      navigator.clipboard.writeText(text)
      props.alert("Text copied to Clipboard", "success")
    }

    const handleDeleteClick = ()=> {
      setText("")
      props.alert("Text cleared", "danger")
    }

    const handleOnChange = (event)=>{
      setText(event.target.value)
    }

  return (
    <div className="container my-3">
      <div className="container" style={{color: props.mode === 'light'?'#000': '#f6f6f6'}}>
        <h1>{ props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light'? 'white':'#333', color: props.mode === 'light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8" placeholder='Start writing here...!'></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleUpClick}>Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleLwClick}>Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleRMSClick}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-danger m-2" onClick={handleDeleteClick}>Delete Text</button>
        <h3 className='mt-3'>Your text summary</h3>
        <div className='d-flex justify-content-between'>
          <p>{ text.split(/\s+/).filter((word)=>{return word.length!==0}).length } words and { text.length } characters</p>
          <p>{Math.round(0.008 * text.split(" ").length)} minutes read</p>
        </div>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Nothing to Preview'}</p>
      </div>
    </div>
  )
}