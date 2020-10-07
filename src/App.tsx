import React from "react";
import "./App.scss";
import ButtonComponent from "./ButtonComponent/ButtonComponent";
import DropdownComponent from "./DropdownComponent/DropdownComponent";
import MyChild from "./myChild/myChild";

function App() {
  return (
    <div >
      <div className="MyChild">
        <DropdownComponent label="Services" />
      </div>
      <div className="App">
        <ButtonComponent label="Services" />
      </div>
      <div className="MyChild">
        <MyChild label="Services" />
      </div>
    </div>
  );
}

export default App;
