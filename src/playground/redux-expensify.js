import React, { Component } from 'react';
import uuid from 'uuid'
import { createStore, combineReducers } from 'redux'

// ACTION ARE:

// ADD_EXPENSE

const clickAgeArray = [
{name: 'Keith', age: 43}, {name: 'Ed', age: 42}, {name: 'Fred', age: 40}, {name: 'Cled', age: 40}]

const newAges = clickAgeArray.map(each => each.name === 'Cled'
  ? {...each, cool: 'yes'}
  : each)

console.log(newAges)

const addExpense = ({description = '', note = '', amount=0, createdAt=0} = {}) => ({
  type: 'ADD_EXPENSE',

  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  }
})




// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
})

const sortByDate = () => ({
  type: 'SORT_BY_DATE',
})

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})







const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {

  switch (action.type) {

    case 'ADD_EXPENSE':
      return [
        ...state, 
        action.expense
      ]

    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id)

    case 'EDIT_EXPENSE':
      return state.map(expense => expense.id === action.id
        ? { ...expense, ...action.updates}
        : expense
      )

    default:
      return state
  }
}

const filtersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
}

const filtersReducer = (state = filtersDefaultState, action) => {

  switch (action.type) {

    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text }

    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount'}

    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date'}

    case 'SET_START_DATE':
      return {...state, startDate: action.startDate}

    case 'SET_END_DATE':
      return {...state, endDate: action.endDate}

    default:
      return state
  }
}

//const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {

  const filteredExpenses = expenses.filter(expense => {

    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; 
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch

    }).sort((a, b) => {

      if (sortBy === 'date') {

        return a.createdAt < b.createdAt ? 1 : -1

      } else if (sortBy === 'amount') {

        return a.amount < b.amount ? 1 : -1

      }

    })

  return filteredExpenses

}




// STORE CREATION

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
}))

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log('visibleExpenses', visibleExpenses)
  //console.log('store is', store.getState())
})

const act1 = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 2000}));
const act2 = store.dispatch(addExpense({description: 'Coffee', amount: 200, createdAt: 1000}));
// const act3 = store.dispatch(removeExpense({id: act1.expense.id}))
// const act4 = store.dispatch(editExpense(act2.expense.id, { amount: 500}))
// const act5 = store.dispatch(setTextFilter('fee'))

const act7 = store.dispatch(sortByAmount())

// const act8 = store.dispatch(sortByDate())

// const act9 = store.dispatch(setStartDate(1200))
// // const act9a = store.dispatch(setStartDate())
// // const act9b = store.dispatch(setStartDate(333))
// const act10 = store.dispatch(setEndDate(4444))


// console.log(act1)
// console.log(act2)
// console.log(act3)
// console.log(act4)
// console.log(act5)
// console.log(act7)
// console.log(act8)

// console.log(act9)
// // console.log(act9a)
// // console.log(act9b)
// console.log(act10)

class ReduxExpensify extends Component {

  componentDidMount() {

    //console.log('ReduxExpensify mounted')

  }
  
  render() {

    return (
      <div>
        ReduxExpensify Component
      </div>

    );
  }
}

export default ReduxExpensify;

