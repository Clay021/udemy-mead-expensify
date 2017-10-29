import React from 'react';
import moment from 'moment';

import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now = moment()

console.log(now.format('MMM Do, YYYY'))

class ExpenseForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      description: props.expense ? props.expense.description : '',
      note:  props.expense ? props.expense.note : '',
      amount:  props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      errorOnForm: false,
    }
  }

  componentDidMount() {
    console.log('ExpenseForm mounted')
  }

  onDescChange(e) {

    const desc = e.target.value

    this.setState(prevState => ({
      description: prevState.description = desc
    }))
  }

  onTextAreaChange(e) {

    const txtA = e.target.value

    this.setState(prevState => ({
      note: prevState.note = txtA
    }))
  }

  onAmountChange(e) {

    const amountTxt = e.target.value

    if (!amountTxt || amountTxt.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(prevState => ({
        amount: prevState.amount = amountTxt
      }))
    }
  }

  onDateChange(createdAt) {
    if (createdAt) {
      this.setState(prevState => ({
        createdAt: prevState.createdAt = createdAt
      }))      
    }
  }

  onFocusChange({focused}) {
    this.setState(prevState => ({
      calendarFocused: prevState.calendarFocused = focused
    }))
  }

  onFormSubmit(e) {
    /*this.setState(prevState => ({
      calendarFocused: prevState.calendarFocused = focused
    }))*/
    e.preventDefault()

    if (!this.state.description || !this.state.amount) {

      this.setState(prevState => ({
        errorOnForm: prevState.errorOnForm = true
      }))
    } else {
      this.setState(prevState => ({
        errorOnForm: prevState.errorOnForm = false
      }))
      console.log('FORM SUBMITTED!')

      const formValues = {
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      }

      this.props.onFormSubmit(formValues)
    }
  }
  
  render() {

    return (
      <div>

        {this.state.errorOnForm 
          ? <p style={{color: 'red'}}>Please provide description and amount!</p> 
          : null}
        <form onSubmit={(e) => this.onFormSubmit(e)}>

          <input
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={(e) => this.onDescChange(e)} />


          <input
            type='text'
            placeholder='Amount'
            value={this.state.amount}
            onChange={(e) => this.onAmountChange(e)} />


          <br />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={(e) => this.onDateChange(e)}
            focused={this.state.calendarFocused}
            onFocusChange={(e) => this.onFocusChange(e)}
            numberOfMonths={1}
            isOutsideRange={() => false} />


          <textarea
            placeholder='Add A Note (optional)'
            value={this.state.note}
            onChange={(e) => this.onTextAreaChange(e)}></textarea>


          <button>Add Expense</button>

        </form>


      </div>

    );
  }
}

export default ExpenseForm;
