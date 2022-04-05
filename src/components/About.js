import React from 'react'

export default function About(props) {
    let containerStyle = {
        color: props.mode==='light'?'#121212':'white',
        backgroundColor: props.mode==='light'?'white':'#121212'
    }
    let accStyle = {
        color: props.mode==='light'?'black':'white',
        backgroundColor: props.mode==='light'?'white':'#333'
    }
  return (
    <div className="container p-5 pt-2" style={containerStyle}>
        <h1 className="mb-4">About TextUtils</h1>
        <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item" style={{ borderColor: props.mode==='light'?'rgba(0,0,0,.125)':'#333'}}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color: props.mode==='dark'?'white':'#000', backgroundColor: props.mode==='light'?'white':'#000'}}>
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={accStyle}>
                    <strong>TextUtils</strong> gives you a way to analyze your text quickly and effeciently. Be it word count, character count or other day to day tasks.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{ borderColor: props.mode==='light'?'rgba(0,0,0,.125)':'#333'}}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: props.mode==='dark'?'white':'#000', backgroundColor: props.mode==='light'?'white':'#000'}}>
                    <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={accStyle}>
                    <strong>TextUtils</strong> is a free character counter tool that provides instant character count and word count statistics for a given text. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{ borderColor: props.mode==='light'?'rgba(0,0,0,.125)':'#333'}}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: props.mode==='dark'?'white':'#000', backgroundColor: props.mode==='light'?'white':'#000'}}>
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={accStyle}>
                    This word counter works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
