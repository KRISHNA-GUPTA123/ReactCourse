import React , {useState} from 'react'


export default function About(props) {

    // const [myStyle,setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#0427423',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        border: props.mode === 'dark' ? '1px solid white' : '1px solid #042743',
        color: props.mode === 'dark' ? 'white' : '#042743'
        
    }

    //const [btntext,setBtnText] = useState("Enable dark Mode");

    // const toggleStyle = () => {
    //     if(myStyle.color === "black"){
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white"
    //         })
    //         //setBtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white",
    //         })
    //         //setBtnText("Enable Dark Mode");
    //     }
    // }
    
  return (
    <div className='container' >
        <h1 className='my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h1>
        <div className="accordion px-2" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button "style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or reading time.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        {/* <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
        TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        TextUtils is compatible with all browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. 
      </div>
    </div>
  </div>
</div>

{/* <div className="container">
<button className="btn btn-primary my-2" onClick = {toggleStyle} type='button'>{btntext}</button>
</div>   */}
    </div>
  )
}

