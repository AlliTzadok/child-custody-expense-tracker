import React, { Component } from 'react';

class ExpenseGridHeader extends Component {

  render() {
    const expenseHeaderNames = [
      {th: "Date"},
      {th: "Category"},
      {th: "Description"},
      {th: "Amount"},
      {th: "Reimbursement Percent"},
      {th: "Parent Obligation"},
      {th: "Expense Paid"},
      {th: ""}
    ];

    return (

      <tr>
      {expenseHeaderNames.map(expenseHeaderName =>
            <th className="col mx-1 px-3" key={expenseHeaderName.th}>
            {expenseHeaderName.th}
            </th>)}
          </tr>


    )
  }
}

export default ExpenseGridHeader;
