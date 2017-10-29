import React from 'react';
import { connect } from 'react-redux'

import { addExpense } from '../actions'

import ExpenseForm from './ExpenseForm'

class AddExpensePage extends React.Component {

  componentDidMount() {
    console.log('AddExpensePage mounted')
  }

  submitExpenseForm(formValues) {


    const {dispatch, history } = this.props 
    console.log('submit expense form', formValues, dispatch)

    dispatch(addExpense(formValues))
    history.push('/')

  }

  render() {

    return (
      <div>
        <h1>Add Expense </h1>
        <ExpenseForm
          onFormSubmit={(e) => this.submitExpenseForm(e)} />
      </div>

    );
  }
}

export default connect()(AddExpensePage)
