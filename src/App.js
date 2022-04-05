import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {
  const [mode, setmode] = useState("light")

  const toggleMode= ()=> {
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#121212'
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar title="TextUtils" abt="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the Text to Analyze" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;