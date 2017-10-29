import React, { Component } from 'react';

import ExpenseListFilters from './ExpenseListFilters'

import ExpenseList from './ExpenseList'


class ExpenseDashboardPage extends Component {

  componentDidMount() {
    //console.log('ExpenseDashboardPage mounted')
  }

  render() {

    return (
      <div>
      
        <ExpenseListFilters />

        <ExpenseList />
        
      </div>

    );
  }
}

export default ExpenseDashboardPage
