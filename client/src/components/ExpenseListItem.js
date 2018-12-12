import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {updateExpense} from '../actions/expenseActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ExpenseListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      date: props.date,
      category: props.category,
      description: props.description,
      amount: props.amount,
      reimburse_percent: props.reimburse_percent,
      paid: props.paid,
      parentObligation: parseFloat(props.amount * props.reimburse_percent).toFixed(2)
    }
    this.handlePaidClick = this.handlePaidClick.bind(this);
    }

    handlePaidClick = () => {
      this.setState( state => ({
        paid: !state.paid
      }));
      this.props.updateExpense({
        expense: {
          paid: !this.state.paid
        },
        id: this.state.id
      })
    }

    render() {
      const paidObligation = parseFloat((-1)*this.state.parentObligation).toFixed(2);

      return (
        <React.Fragment>
        <tr>
        <td className="col mx-1 px-3">
        <Link className="text-dark" to={`/expenses/${this.state.id}`}>
        {this.state.date}
        </Link>
        </td>

        <td className="col mx-1 px-3">
        {this.state.category}
        </td>

        <td className="col mx-1 px-3">
        {this.state.description}
        </td>

        <td className="col mx-1 px-3">
        ${this.state.amount}
        </td>

        <td className="col mx-1 px-3">
        {this.state.reimburse_percent}
        </td>

        <td>
        ${this.state.parentObligation}
        </td>

        <td>
        ${this.state.paid ? paidObligation : this.state.parentObligation}
        </td>

        <td>
        <Button onClick={this.handlePaidClick}>
        {this.state.paid ? 'Paid' : 'Not Paid'}
        </Button>
        </td>

        </tr>
        </React.Fragment>
      )
    }
  }


  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      updateExpense: updateExpense
    }, dispatch);
  };

  export default connect(null, mapDispatchToProps)(ExpenseListItem);
