import React from "react";

function UserInput() {
  return (
    <div className="userinput">
      <div className="form-row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="What?"
          ></input>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Where?"
          ></input>
        </div>
      </div>
      <br></br>
      <div className="form-row">
        <div className="col">
          <input type="date" className="form-control"></input>
        </div>
        <div className="col">
          <input type="number" className="form-control" placeholder="$"></input>
        </div>
      </div>
      <br></br>
      <div>
        <div className="form-row">
          <button className="btn btn-secondary form-control">Add To-Do</button>
        </div>
      </div>
    </div>
  );
}

export default UserInput;
