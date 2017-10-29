import React from 'react';

import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

import { connect } from 'react-redux'

import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions'

class ExpenseListFilters extends React.Component {

  state = {
    calendarFocused: null,
  }

  componentDidMount() {
    console.log('ExpenseListFilters mounted')
  }

  onDatesChange({startDate, endDate}) {
    console.log('ExpenseListFilters mounted')
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange(calendarFocused) {
    this.setState(() => ({ calendarFocused }))
  }
  
  render() {

    return (
      <div>

      <h2>FILTERS</h2>
        <input
          type='text'
          value={this.props.filters.text}
          onChange={(e) => {this.props.dispatch(setTextFilter(e.target.value))}} />

        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {

            if (e.target.value === 'date') {

              this.props.dispatch(sortByDate())

            } else if (e.target.value === 'amount') {

              this.props.dispatch(sortByAmount())
              
            }

          }}>

          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
          
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={(e) => this.onDatesChange(e)}
          focusedInput={this.state.calendarFocused}
          onFocusChange={(e) => this.onFocusChange(e)}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false} />
     
      </div>

    );
  }
}

//export default ExpenseListFilters;

const mapStateToProps = (state) => ({
  filters: state.filters
})

const ConnectedExpenseListFilters = connect(mapStateToProps)(ExpenseListFilters)

export default ConnectedExpenseListFilters;
