import React from "react";
import Row from "./Row";

function Table(props) {
  const expenseData = [
    { date: "2/7/21", desc: "Video Game", loc: "Amazon", amount: "55" },
    { date: "1/15/21", desc: "Gum", loc: "Cornerstore", amount: "4" },
  ];

  const newRow = expenseData.map((item) => (
    <Row
      date={item.date}
      desc={item.desc}
      loc={item.loc}
      amount={item.amount}
    />
  ));
  return (
    <div>
      <table>
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

export default Table;
