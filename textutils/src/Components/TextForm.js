//rfc is shortcut for creating a functional component
//below "useState" has been imported to use the state in functional component (hooks)
import React , {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+text)
        setText(text.toUpperCase());
        // setText("You have clicked on handleUpClick")
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked"+text)
        setText(text.toLowerCase());
        // setText("You have clicked on handleUpClick")
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked"+text)
        const result = window.confirm("Are you sure you want to clear the text?");
        if (result) {
            setText("");
        }
        // setText("You have clicked on handleUpClick")
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();  
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    //below is the use of hooks
    const [text, setText] = useState('');
    //text = "new text"; //wrong way to change the state
    //setText("new text"); //correct way to change the state
  return (
    <>
    <div className='container'>
    <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Covert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear All</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length*0.008} minutes taken to read this paragraph.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
