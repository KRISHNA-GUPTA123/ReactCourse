import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//let name = "Krishna Ji";
//const element = (<h1>Kanha</h1>);
function App() {
  const [alert, setAlert] = useState(null); // To show alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#292545';
      showAlert("Dark mode has been enabled", "success");
      //below is used to change the title of the page
      document.title = "TextUtils - Dark Mode";
      // setInterval is used to change the title of the page at regular intervals
          //  setInterval(() => {
          //    document.title = "TextUtils is Amazing";
          //  }, 2000);
          //   setInterval(() => {
          //     document.title = "Install TextUtils Now";
          //   }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // below is used to change the title of the page
      document.title = "TextUtils - Light Mode";

    }
  }
  return (
    <>
    {/* here title and aboutText are props passed to the Navbar component */}
    
  <Router>
   <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3" >
    <Routes>
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The text to analyze  below" mode={mode} />} />
    </Routes>
    </div>
  </Router>
   </>
  );
  
}

export default App;
