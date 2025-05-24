//rfc is shortcut for creating a functional component
//below "useState" has been imported to use the state in functional component (hooks)
import React , {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+text)
        setText(text.toUpperCase());
        // setText("You have clicked on handleUpClick")
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked"+text)
        setText(text.toLowerCase());
        // setText("You have clicked on handleUpClick")
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked"+text)
        const result = window.confirm("Are you sure you want to clear the text?");
        if (result) {
            setText("");
        }
        // setText("You have clicked on handleUpClick")
        if(result){
            props.showAlert("Text Cleared!", "success");
        }
        
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
    }
    const handleCopy = () => {
        // var text = document.getElementById("myBox");
        // text.select();  
        //because we are using navigator.clipboard API to copy the text so we don't need to select the text as we were doing earlier on above two lines
        navigator.clipboard.writeText(text);
        // below is used to unselect the text after copying
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success"); 
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    //below is the use of hooks
    const [text, setText] = useState('');
    //text = "new text"; //wrong way to change the state
    //setText("new text"); //correct way to change the state
  return (
    <>
    <div className='container' style = {{color:props.mode==='dark'?'white':'black'}}>
    <h1 style={{fontSize: '2rem', textAlign: 'center'}}>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control"  value={text} onChange={handleOnChange} style = {{backgroundColor:props.mode==='dark'?'rgb(82 72 72)':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Covert to Uppercase</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Covert to Lowercase</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear All</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style = {{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.replace(/\s/g, '').length} characters</p>
        <p>{text.split(" ").filter((element)=> {return element.length!==0}).length*0.008} minutes taken to read this paragraph.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview."}</p>
    </div>
    </>
  )
}
