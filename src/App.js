import React from "react";
import "./App.css";
import {Feedback} from "./Feedback";

function App() {

  function handleSubmit() {
    return (
      console.log("Form Submitted")
    )
  }

  return (
    <div className="App">
      <Feedback onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
