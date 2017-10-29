import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

import logger from 'redux-logger'

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f)
console.log(enhancers)

export default () => {
  const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
    }), enhancers, applyMiddleware(logger)
  )

  return store

}






