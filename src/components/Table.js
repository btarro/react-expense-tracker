import React from "react";
import Row from "./Row";
import EmptyTable from "./EmptyTable";

class Table extends React.Component {
  render() {
    const EXPENSEDATA = this.props.data;

    if (EXPENSEDATA.length === 0) {
      return <EmptyTable />;
    }

    const NEWROW = EXPENSEDATA.map((item) => (
      <Row
        deleteExpense={this.props.rd}
        key={item.id}
        id={item.id}
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
            </tr>
          </thead>
          <tbody>{NEWROW}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
