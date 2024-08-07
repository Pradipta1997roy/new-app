import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState(""); // Input Text useState.
    const [copyStatus, setCopyStatus] = useState(false); // Manage copy status

    // Input Text to Uppercase handler with success alert.
    const handleUpClick = () => { 
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert('Converted to Uppercase', 'success') // Alert Function Call
    }

    // Input Text to Lowercase handler with success alert.
    const handleLwClick = () => {
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert('Converted to Lowercase', 'success') // Alert Function Call
    }

    // Input Text to capitalize handler with success alert.
    const handleCpClick = () => {
        let newText = capitalize(text);
        setText(newText);
        props.showAlert('Converted to Capitalize', 'success') // Alert Function Call

    }
    const capitalize = (str) => {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    }

    // Input Text on change event for type the text.
    const handleOnChange = (event) => {
        setText(event.target.value); 
    }

    // Input Text All Cleared Function.
    const handleClearClick = () => {
        let newText = (''); // make Input blank
        setText(newText);
        props.showAlert('Cleared All The Texts', 'warning') // Alert Function Call
    }  

    // Input Text Copy Function.
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text) // Text copy js function
        setCopyStatus(true); // Show the "Text copied!" message
        setTimeout(() => setCopyStatus(false), 2000); // Hide it after 2 seconds
        props.showAlert('Texts are Copied to Clipboard', 'success') // Alert Function Call
    }

    // Function to count the words
    const countWords = (str) => {
        return str.trim().split(/\s+/).filter(word => word.length > 0).length;
    }

    return (
        <> 
            <section className="py-5" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 style={{color: props.mode==='light' ? '#000' : '#FFF'}}>{props.Heading}</h1>
                            <div className="mt-3"> 
                                <textarea className="form-control" placeholder='Enter Your Text' value={text} onChange={handleOnChange} id="changeText" rows="8" style={{color: props.mode==='light' ? '#000' : '#FFF', backgroundColor: props.mode==='light' ? '#FFF' : '#303030'}}></textarea>
                            </div>
                            <div className="d-flex gap-2 mt-3"> 
                                <button className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase </button>
                                <button className="btn btn-warning" onClick={handleLwClick}> Convert to Lowercase </button>
                                <button className="btn btn-success" onClick={handleCpClick}> Convert to Capitalize </button>
                                <button className="btn btn-danger" onClick={handleClearClick}>Clear All</button> 
                            </div>

                            <div className="mt-3"> 
                                <h2 style={{color: props.mode==='light' ? '#000' : '#FFF'}}>Your Text Summary</h2>

                                <div className="card mb-4" 
                                style={{color: props.mode==='light' ? '#000' : '#FFF', backgroundColor: props.mode==='light' ? '#FFF' : '#303030', borderColor: props.mode==='light'? '#0000002d' : '#FFF'}}
                                >
                                    <div className="card-body">
                                        <p> <strong>{countWords(text)}</strong> words and <strong>{text.length}</strong> characters </p>
                                        <p> You need <strong>{0.008 * text.split(" ").length}</strong> minutes to read this text </p> 
                                    </div>
                                </div>
                                <h2 style={{color: props.mode==='light' ? '#000' : '#FFF'}}>Preview</h2>
                                <div className="alert alert-info" role="alert">
                                    <button className="copy-icon" onClick={handleCopyClick}>
                                        {copyStatus ? ( <i className="fa-solid fa-check"></i> ) : ( <i className="fa-regular fa-clipboard"></i> )}
                                    </button>
                                    <p>{text.length>0?text:"Enter Something Above Textbox to Preview Here"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
