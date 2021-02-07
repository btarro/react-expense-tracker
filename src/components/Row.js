import React from "react";

function Row(props) {
  console.log(props);
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.desc}</td>
      <td>{props.loc}</td>
      <td>${props.amount}</td>
      <td>
        <button>Del</button>
      </td>
    </tr>
  );
}

export default Row;
