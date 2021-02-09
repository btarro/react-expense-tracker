import React from "react";

function Row(props) {
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.desc}</td>
      <td>{props.loc}</td>
      <td className="amount">${props.amount}</td>
      <td>
        <button type="button" className="btn btn-secondary">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default Row;
