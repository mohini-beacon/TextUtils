import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    // text = "new text" // Wrong way to change the state
    // setText("new Text") // correct way to change the state
    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.showAlert("Removed extra spaces!", "success");
    }



    const handleOnchange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }


    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#42778b' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#42778b'
                    }} id="myBox" rows="10"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#42778b' }}>
                <h1>Your Text Summary</h1>
                <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} word and {text.length} charecters</p>
                <p>{0.008 * text.split(' ').length} Minutes may required to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the above textbox to preview here"}</p>
            </div >
        </>
    )
}
