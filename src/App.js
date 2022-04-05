import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

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
    <>
      <Navbar title="TextUtils" abt="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the Text to Analyze" mode={mode} alert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;