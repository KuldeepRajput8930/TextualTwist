import React, { useState } from "react";

export default function Home(props) {

  /*---------------------------------------- States---------------------------------------------- */

  const [text, setText] = useState("");
  const [result, setResult] = useState("email will be displayed here...");
  const str = text;

  /*---------------------------------------- Functionality---------------------------------------------- */

  /*--------- Uppercase function------- */
  const handleUpClick = () => {
    if (text.split(" ").filter((element) => { return element.length === 0 }).length) {
      props.showAlert("Please enter the text", "No! text found")
    }
    else {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase", "Success")
    }
  };

  /*--------- Lowercase function------- */

  const handleLowClick = () => {
    if (text.split(" ").filter((element) => { return element.length === 0 }).length) {
      props.showAlert("Please enter the text", "No! text found")
    }
    else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase", "Success")
    }
  };

  /*--------- Onchange function------- */

  const handleOnChage = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = (event) => {
    let newText = " ";
    setText(newText);
    props.showAlert("All text are cleared", "Success")
  };

  /*--------- Copy function------- */

  const handleCopy = () => {
    var text = document.getElementById("my-box");
    text.select();
    if (text.value.length > 0) {
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "Success")
    }
    else {
      props.showAlert("Enter the text to copy", "Warning")
    }
  };

  /*--------- Extra space function------- */

  const handleExtraSpaces = () => {
    if (text.length === 0) {
      props.showAlert("Enter the text to remove extra space", "Warning")
    }
    else {

      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra space has been removed", "Success")
    }
  };

  /*--------- Extract email function------- */

  const extractEmail = (str) => {
    if (text.split(" ").filter((element) => { return element.length === 0 }).length) {
      props.showAlert("Please enter the text to extract email", "No! text found")
    }
    else {
      const email = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
      let newResult = str.match(email);
      setResult(newResult ? newResult.join(", ") : "No emails found");
      props.showAlert("Email extracted and result shown below ", "Success")
    }
  };

  return (
    <>

      {/*---------------------------------------- Textarea---------------------------------------------- */}
      <div className="container mt-6">
        <h3>Enter the text to analyze below</h3>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.mode} text-${props.mode === 'light' ? "dark" : "light"} my-4`}
            value={text}
            onChange={handleOnChage}
            id="my-box"
            rows="8"
          ></textarea>
        </div>

        {/*---------------------------------------- Buttons---------------------------------------------- */}


        <button className="btn mx-3 my-3" style={{ backgroundColor: props.theme.buttonColor, color: props.theme.buttonTextColor }} onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn mx-3 my-3" style={{ backgroundColor: props.theme.buttonColor, color: props.theme.buttonTextColor }} onClick={handleLowClick}>
          LowerCase
        </button>
        <button
          className="btn  mx-3 my-3" style={{ backgroundColor: props.theme.buttonColor, color: props.theme.buttonTextColor }}
          onClick={() => extractEmail(str)}
        >
          Extract Email
        </button>
        <button
          className="btn mx-3 my-3" style={{ backgroundColor: props.theme.buttonColor, color: props.theme.buttonTextColor }}
          onClick={handleExtraSpaces}
        >
          Remove Extra Space
        </button>
        <button className="btn mx-3 my-3" style={{ backgroundColor: props.theme.buttonColor, color: props.theme.buttonTextColor }} onClick={handleCopy}>
          Copy
        </button>
        <button
          className="btn mx-3 my-3" style={{ backgroundColor: props.theme.buttonColor, color: props.theme.buttonTextColor }}
          onClick={handleClearClick}
        >
          Clear
        </button>


        {/*---------------------------------------- TextUtils---------------------------------------------- */}

        <div className="container">
          <h4>Your text summary</h4>
          <p>
            {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} chracters
          </p>
          <h3>Time required to read</h3>
          <p>{0.008 * (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length)} Minutes</p>
          <h3>Preview</h3>
          <p>{text.length > 0 ? text : "Nothing to preview..."}</p>
          <h4>Email</h4>
          <p>{result}</p>
        </div>
      </div>
    </>
  );
}
