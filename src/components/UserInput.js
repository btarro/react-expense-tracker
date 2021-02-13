import React from "react";
import Table from "./Table";

class UserInput extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "0",
      desc: "first",
      loc: "amazon",
      date: "2/21/21",
      amount: "55",
    };

    this.gatherInput = this.gatherInput.bind(this);
    this.injectData = this.injectData.bind(this);
  }

  gatherInput() {
    // let desc = document.getElementById("desc").value;
    // let loc = document.getElementById("loc").value;
    // let date = document.getElementById("date").value;
    // let amount = document.getElementById("amount").value;

    const newData = {
      id: "1",
      desc: "a thing",
      loc: "walmart",
      date: "1/21/21",
      amount: "34",
    };

    this.injectData(newData);
  }

  injectData(newData) {
    this.setState((prevState) => {
      return {
        newData,
      };
    });

    // const oldData = [this.state];
    // console.log("OLD", oldData);

    // //const newArray = [...oldData, newData];
    // const newArray = [newData];
    // console.log("NEW", newArray);

    // this.setState(newArray);
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
              <Table data={this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInput;
