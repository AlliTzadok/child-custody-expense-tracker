import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createExpense } from '../actions/expenseActions';
import { Form, Button, FormControl } from 'react-bootstrap';

class ExpenseForm extends Component {
  constructor(props){
    super(props);



    this.state = {
      date: '',
      category: '',
      description: '',
      amount: '',
      reimburse: '',
      paid: ''
    };
  }

  // componentDidMount(){
  //   this.props.fetchCategories()
  // }

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createExpense(this.state);
    this.props.history.push('/expenses')
  }

  render() {

    return (
      <div className="expenseForm">

      <Form id="expense-form" onSubmit={this.handleOnSubmit}>

              <FormControl
                label="Date"
                ref="dateInput"
                type="text"
                name="date"
                placeholder="YYYY-MM-DD"
                value={this.state.date}
                onChange={this.handleOnChange}
                />

                <FormControl
                ref="categoryInput"
                type="text"
                name="category"
                placeholder="Category"
                value={this.state.category}
                onChange={this.handleOnChange}
                />

                <FormControl
                ref="descriptionInput"
                type="text"
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleOnChange}
                />

                <FormControl
                ref="amountInput"
                type="text"
                name="amount"
                placeholder="Amount"
                value={this.state.amount}
                onChange={this.handleOnChange}
                />

                <FormControl
                ref="reimburseInput"
                type="text"
                name="reimbursement"
                placeholder="Reimburse Factor"
                value={this.state.reimburse}
                onChange={this.handleOnChange}
                />

                <FormControl
                componentClass="select"
                ref="paidInput"
                name="paid"
                placeholder="Paid?"
                value={this.state.paid}
                onChange={this.handleOnChange}
                >
                <option value="true">Paid</option>
                <option value="false">Not Paid</option>
                </FormControl>

              <button className="btn btn-sm" type="submit">Submit Expense</button>
      </Form>
    </div>
    )
  }
}

export default connect()(ExpenseForm);