import React from "react";
import Table from "./Table";

class UserInput extends React.Component {
  constructor() {
    super();
    this.state = [
      { desc: "a thing", loc: "walmart", date: "1/21/21", amount: "34" },
    ];

    this.gatherInput = this.gatherInput.bind(this);
  }

  gatherInput() {
    // let desc = document.getElementById("desc").value;
    // let loc = document.getElementById("loc").value;
    // let date = document.getElementById("date").value;
    // let amount = document.getElementById("amount").value;

    let newState = this.state;
  }

  render() {
    const gatherInput = this.gatherInput;
    //console.log(newState);

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
              onClick={gatherInput}
            >
              Add To-Do
            </button>
            <div className="container">
              <Table />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInput;
