import React, { Component } from 'react';

import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'

import { editExpense, removeExpense } from '../actions'

class EditExpensePage extends Component { 

  componentDidMount() {
    console.log('EditExpensePage mounted')
  }

  removeButtonClick() {

    const {dispatch, history} = this.props

    console.log('remove button clicked@!', this.props.expense.id)

    dispatch(removeExpense({id: this.props.expense.id}))

    history.push('/')

  }

  submitExpenseForm(formValues) {

    console.log('submitting! ', formValues)

    const {dispatch, history} = this.props
    
    dispatch(editExpense(this.props.expense.id, formValues))

    history.push('/')

  }
  
  render() {

    console.log('edit expense page props are: ', this.props)

    return (
      <div>
        Editing Expense to match <code>{this.props.match.params.id}</code>
        <ExpenseForm
          expense={this.props.expense}
          onFormSubmit={(e) => this.submitExpenseForm(e)} />

      <button onClick={() => this.removeButtonClick()}>&times;</button>

      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

export default connect(mapStateToProps)(EditExpensePage);