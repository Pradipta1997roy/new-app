import './App.css'; 
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() { 

  // Global wise darkmode scripts
  const [mode, setMode] = useState('light'); // Mode useState 
  const [alert, setAlert] = useState(null); // Alert useState 

  // const [redMode, setRedMode] = useState('light'); // Red Mode useState 
  // const toggleRedMode = ()=>{
  //   if(redMode === "light" ){
  //     setRedMode("danger");
  //     document.body.style.backgroundColor = "#F44336";
  //     showAlert('Red Dark Mode is Enable', 'success')
  //   }
  //   else{
  //     setRedMode("light");
  //     document.body.style.backgroundColor = "#FFF";
  //     showAlert('Light Mode is Enable', 'success')
  //   }
  // }

  // Alert Arrow Function
  const showAlert = (massage, type)=>{
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // toggleMode Arrow Function
  const toggleMode = ()=>{
    if(mode === "light" ){
      setMode("dark");
      document.body.style.backgroundColor = "#303030";
      showAlert('Dark Mode is Enable', 'success')
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "#FFF";
      showAlert('Light Mode is Enable', 'success')

    }
  }
  return (
    <> 
      <Router>
        {/* Navbar send Props : logo props/about props/mode state props/toggleMode Function */} 
        <Navbar logo="TextFormatter" about="About" mode={mode} toggleMode={toggleMode} />
        {/* Alert send Props : alert state props */}
        <Alert alert={alert} type=""/> 
        
        <Routes>  
          <Route exact path="/" element={
            <TextForm showAlert={showAlert} heading="Type or paste your content here" mode={mode} />
          } />  
          <Route path="/about" element={<About />} />
        </Routes>  
      </Router>
    </>
  );
}

export default App;

 
