
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'
import { useState } from "react";
// import { BrowserRouter,Routes,Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,typ:type
    })
  }
  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode Is Enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Is Enabled","success");
    }
  }
  return (
  <>
  {/* <BrowserRouter> */}
  <Navbar title="texttutils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about" element={<About />}>
          </Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/>}> */}
          <TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/>
          {/* </Route> */}
      {/* </Routes> */}
  </div>
  {/* </BrowserRouter> */}
  {/* <Navbar title="TextUtils" aboutText="About Us"/> */}
  {/* <Navbar /> */}
  </>
  );
}

export default App;
