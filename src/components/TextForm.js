import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleloClick=()=>{
        let newtext=text.toLocaleLowerCase();
        settext(newtext);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleClearClick=()=>{
        let newtext="";
        settext(newtext);
        props.showAlert("text Cleared","success");
    }

    const handleOnChange=(event)=>{
        settext(event.target.value)
    }
    
    const [text, settext] = useState("");
  return (
   <>
   <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
   <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black' }} id="exampleFormControlTextarea1" rows="5"></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={handleloClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
   </div>
   <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes is required to read this </p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter Something here to preiview it'}</p>
   </div>
      

   </>
  )
}

