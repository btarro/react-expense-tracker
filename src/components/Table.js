import React from "react";
import Row from "./Row";

class Table extends React.Component {
  render() {
    const expenseData = [this.props.data];

    const newRow = expenseData.map((item) => (
      <Row
        key={item.id}
        date={item.date}
        desc={item.desc}
        loc={item.loc}
        amount={item.amount}
      />
    ));
    return (
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Location</th>
              <th>Amount</th>
              <th>Del?</th>
            </tr>
          </thead>
          <tbody>{newRow}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
