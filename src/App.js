import React from "react";
import "./App.css";
import Title from "./components/Title";
import UserInput from "./components/UserInput";
import Table from "./components/Table";

class App extends React.Component {
  render() {
    return (
      <div className="App border">
        <div className="container">
          <Title />
          <UserInput />
          <br></br>
          <Table />
        </div>
      </div>
    );
  }
}

export default App;
