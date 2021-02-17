import React from "react";
import Row from "./Row";
import EmptyTable from "./EmptyTable";

class Table extends React.Component {
  render() {
    const EXPENSEDATA = this.props.data;

    if (EXPENSEDATA.length === 0) {
      return <EmptyTable />;
    }

    const newRow = EXPENSEDATA.map((item) => (
      <Row
        key={item.index}
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
