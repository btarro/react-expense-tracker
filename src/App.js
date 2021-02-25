import React from "react";
import "./App.css";
import Title from "./components/Title";
import UserInput from "./components/UserInput";
import Table from "./components/Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      description: "",
      location: "",
      date: "",
      amount: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    //console.log("name ", name, "value ", value);
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Is this working?");

    const newExpense = {
      id: Math.random().toString(36).substr(2, 9),
      description: this.state.description,
      location: this.state.location,
      date: this.state.date,
      amount: this.state.amount,
    };

    this.setState({
      tableData: [...this.state.tableData, newExpense],
      description: "",
      location: "",
      date: "",
      amount: "",
    });
  }

  deleteExpense(id) {
    const tableDataMinusDeletedRow = this.state.tableData.filter(
      (row) => row.id !== id
    );

    this.setState({
      ...this.state,
      tableData: tableDataMinusDeletedRow,
    });
  }

  render() {
    return (
      <div className="App border">
        <div className="container">
          <Title />
          <UserInput
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            description={this.state.description}
            location={this.state.location}
            date={this.state.date}
            amount={this.state.amount}
          />
          <Table
            tableData={this.state.tableData}
            description={this.state.description}
            location={this.state.location}
            date={this.state.date}
            amount={this.state.amount}
            deleteExpense={this.deleteExpense}
          />
          <br></br>
        </div>
      </div>
    );
  }
}

export default App;
