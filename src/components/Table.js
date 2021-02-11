import React from "react";
import Row from "./Row";

class Table extends React.Component {
  render() {
    const expenseData = [
      { date: "2/7/21", desc: "Video Game", loc: "Amazon", amount: "55" },
      { date: "1/15/21", desc: "Gum", loc: "Cornerstore", amount: "4" },
    ];

    const newRow = expenseData.map((item) => (
      <Row
        key={item.desc}
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
