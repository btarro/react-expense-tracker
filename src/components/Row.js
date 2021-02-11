import React from "react";

class Row extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.desc}</td>
        <td>{this.props.loc}</td>
        <td className="amount">${this.props.amount}</td>
        <td>
          <button
            onClick={() => console.log("It's working!")}
            type="button"
            className="btn btn-secondary"
          >
            <i className="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default Row;
