import React from "react";

const Table = (props) => {
  const tableData = props.tableData;
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
        <tbody>
          {tableData.map((expenseItem) => {
            return (
              <tr key={expenseItem.id}>
                <td>{expenseItem.date}</td>
                <td>{expenseItem.description}</td>
                <td>{expenseItem.location}</td>
                <td>{expenseItem.amount}</td>
                <td>
                  <button
                    onClick={(e) => props.deleteExpense(expenseItem.id)}
                    type="button"
                    className="btn delete"
                  >
                    <i className=" fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
