import "./App.css";
import Title from "./components/Title";
import UserInput from "./components/UserInput";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Title />
        <UserInput />
        <br></br>
        <Table />
      </div>
    </div>
  );
}

export default App;
