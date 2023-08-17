import React, { useState } from "react";
import "./index.css"

const App = () =>{

  let color = "purple"

  const [bg, setbg] = useState(color)

  let text = "Click Me";
  const [ctext, setText] = useState(text);

  const bgChange = () =>{
    color = "red"
    setbg(color)
    setText("OHO!🙁")
  }

  const texChange = () =>{
    color = 'green'
    setbg(color);
    setText("Wah! 🙅‍♀️ ");
  }

  return(
    <>
      <div style={{backgroundColor:bg}}>
      <button onMouseOver={bgChange} onMouseLeave={texChange}>{ctext}</button>
      </div>
    </>
  )

}




export default App;
