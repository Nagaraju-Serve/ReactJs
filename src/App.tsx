import React from "react";
import "./App.scss";
import ButtonComponent from "./ButtonComponent/ButtonComponent";
import DropdownComponent from "./DropdownComponent/DropdownComponent";

function App() {
  return (
    <div >
      <div>
        <DropdownComponent />
      </div>
      <div className="App">
        <ButtonComponent label="Services" />
      </div>
    </div>
  );
}

export default App;
