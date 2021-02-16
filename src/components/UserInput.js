import React from "react";
import Table from "./Table";

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tableData: [{}] };
    //this.state = {};

    this.gatherInput = this.gatherInput.bind(this);
    this.injectData = this.injectData.bind(this);
  }

  gatherInput() {
    let desc = document.getElementById("desc").value;
    let loc = document.getElementById("loc").value;
    let date = document.getElementById("date").value;
    let amount = document.getElementById("amount").value;

    const newData = {
      //id: "1",
      desc: desc,
      loc: loc,
      date: date,
      amount: amount,
    };

    this.injectData(newData);
    console.log(newData);
  }

  injectData(newData) {
    this.setState((prevState) => ({
      tableData: [...this.state.tableData, newData],
    }));
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
              placeholder="What?"
            ></input>
          </div>
          <div className="col">
            <input
              id="loc"
              type="text"
              className="form-control"
              placeholder="Where?"
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
