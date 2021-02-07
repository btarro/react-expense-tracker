import React from "react";

function UserInput() {
  return (
    <div>
      <input type="text" placeholder="What?"></input>
      <input type="text" placeholder="Where?"></input>
      <br></br>
      <input type="date"></input>
      <input type="number" placeholder="$$"></input>
      <br></br>
      <button>SUBMIT</button>
    </div>
  );
}

export default UserInput;
