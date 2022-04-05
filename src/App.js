import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      message,
      type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode= ()=> {
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#121212'
      showAlert('Dark mode Enabled', 'primary')
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode Enabled', 'primary')
    }
  }

  return (
    <Router>
      <Navbar title="TextUtiliz" abt="About Us" mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert}/>

      <Routes>
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/" element={<TextForm heading="Enter the Text to Analyze" mode={mode} alert={showAlert}/>}/>
      </Routes>
    </Router>
  );
}

export default App;