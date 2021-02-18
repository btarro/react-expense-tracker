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
        <td>{this.props.date}</td>
        <td>{this.props.desc}</td>
        <td>{this.props.loc}</td>
        <td className="amount">{currency}</td>
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
