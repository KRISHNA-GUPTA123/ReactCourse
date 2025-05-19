import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm';
//let name = "Krishna Ji";
//const element = (<h1>Kanha</h1>);
function App() {
  return (
    <>
    {/* here title and aboutText are props passed to the Navbar component */}
   <Navbar title="TextUtils" aboutText="About Page"/>
   <div className="container my-3" >
    <TextForm heading = "Enter The text to analyze  below"/>
    {/* <About/> */}
    </div>
   </>
  );
  
}

export default App;
