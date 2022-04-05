import React, { useState } from 'react'

export default function About() {

    const [accButtonColor, setaccButtonColor] = useState( {
        backgroundColor: '#fff',
        color: '#000'
    })
    
    const [accBodyColor, setaccBodyColor] = useState({
        color: '#000'
    })

    const [darkBtnText, setDarkBtnText] = useState("Enable Dark Mode")

    const handleDarkModeBtn = ()=>{
        if (accButtonColor.backgroundColor === '#333') {
            setaccButtonColor({
                backgroundColor: '#fff',
                color: '#000'
            })
            setaccBodyColor()
            setDarkBtnText("Enable Dark Mode")
        } else {
            setaccButtonColor({
                backgroundColor: '#333',
                color: '#fff'
            })
            setaccBodyColor({
                backgroundColor: '#000',
                color: '#fff'
            })
            setDarkBtnText("Enable Light Mode")
        }
    }

  return (
    <div className="container p-5" style={accButtonColor}>
        <h1>About Us</h1>
        <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item" style={accButtonColor}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={accBodyColor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={accButtonColor}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={accBodyColor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={accButtonColor}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={accBodyColor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        <div className="container">
            <button className="btn btn-primary" onClick={handleDarkModeBtn}>{darkBtnText}</button>
        </div>
    </div>
  )
}
