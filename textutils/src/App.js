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


  // below function is used to remove the body classes when the mode is changed so that the body does not have multiple classes at the same time
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning'); 
  }

  const toggleMode = (cls) =>{
    removeBodyClasses();
    console.log(cls);
    // below is used to add the class to the body
    //document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#292545';
      showAlert("Dark mode has been enabled", "success");
      //below is used to change the title of the page
      document.title = "TextUtils - Dark Mode";
      //setInterval is used to change the title of the page at regular intervals
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
      //below is used to change the title of the page
      document.title = "TextUtils - Light Mode";

    }
  }
  return (
    <>
    {/* here title and aboutText are props passed to the Navbar component */}
    {/* Routing is used to navigate between different pages without reloading the page */}
  <Router>
   <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3" >
    <Routes>
      <Route exact path="/about" element={<About mode={mode} />} />
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter , Character counter , Remove Extra Space " mode={mode} />} />
    </Routes>
    {/* <TextForm showAlert={showAlert} heading="Enter The text to analyze  below" mode={mode} /> */}
    </div>
  </Router>
   </>
  );
  
}

export default App;
