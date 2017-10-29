import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import './index.css';

import registerServiceWorker from './registerServiceWorker';

import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore'

import getVisibleExpenses from './selectors/expenses'

import { addExpense } from './actions'

const store = configureStore()

/*
store.dispatch(addExpense({description: 'Water Bill 1', amount: 1100, createdAt: 5000}))
store.dispatch(addExpense({description: 'Yeah Bill 2', amount: 1022, createdAt: 7000}))
store.dispatch(addExpense({description: 'Third B Bill 3', amount: 922, createdAt: 9000}))


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log('visible: ', visibleExpenses)


console.log(store.getState())
*/

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, document.getElementById('root'));

registerServiceWorker();


/*

import React, { Component } from 'react';

class XXX extends Component {

  componentDidMount() {
    console.log('XXX mounted')
  }
  
  render() {

    return (
      <div>
        XXX Component
      </div>

    );
  }
}

export default XXX;




import React from 'react';

const XXX = () => (

  <div>
    XXX
  </div>

)

export default XXX;
*/
