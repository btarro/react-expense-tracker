import React from "react";
import Table from "./Table";

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tableData: [] };

    this.gatherInput = this.gatherInput.bind(this);
    this.injectData = this.injectData.bind(this);
  }

  gatherInput() {
    const DESC = document.getElementById("desc").value;
    const LOC = document.getElementById("loc").value;
    const DATE = document.getElementById("date").value;
    const AMOUNT = document.getElementById("amount").value;

    const newData = {
      desc: DESC,
      loc: LOC,
      date: DATE,
      amount: AMOUNT,
    };

    this.injectData(newData);
    this.inputCleanup();
  }

  injectData(newData) {
    this.setState((prevState) => ({
      tableData: [...this.state.tableData, newData],
    }));
  }

  inputCleanup() {
    document.querySelectorAll(".form-control").forEach((formField) => {
      formField.value = "";
    });
  }

  removeData(props) {
    console.log("CALL INTO PARENT TEST");
  }

  render() {
    return (
      <div className="userinput">
        <div className="form-row">
          <div className="col">
            <input
              id="desc"
              type="text"
              className="form-control"
              placeholder="What was your expense?"
            ></input>
          </div>
          <div className="col">
            <input
              id="loc"
              type="text"
              className="form-control"
              placeholder="Expense location?"
            ></input>
          </div>
        </div>
        <br></br>
        <div className="form-row">
          <div className="col">
            <input id="date" type="date" className="form-control"></input>
          </div>
          <div className="col">
            <input
              id="amount"
              type="number"
              className="form-control"
              placeholder="$"
            ></input>
          </div>
        </div>
        <br></br>
        <div>
          <div className="form-row">
            <button
              className="btn btn-secondary form-control"
              onClick={this.gatherInput}
            >
              Add To-Do
            </button>
            <div className="container">
              <Table data={this.state.tableData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInput;
