import React from "react";
import "./App.css";
import Title from "./components/Title";
import UserInput from "./components/UserInput";

class App extends React.Component {
  render() {
    return (
      <div className="App border">
        <div className="container">
          <Title />
          <UserInput />
          <br></br>
        </div>
      </div>
    );
  }
}

export default App;
