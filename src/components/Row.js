import React from "react";

class Row extends React.Component {
  render(props) {
    const AMNT = this.props.amount;

    let currency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(AMNT);

    return (
      <tr className="align-middle">
        <td className="align-middle">{this.props.date}</td>
        <td className="align-middle">{this.props.desc}</td>
        <td className="align-middle">{this.props.loc}</td>
        <td className="amount align-middle">{currency}</td>
        <td>
          <button
            onClick={(e) => this.props.deleteExpense(this.props.id)}
            type="button"
            className="btn delete"
          >
            <i className="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default Row;
