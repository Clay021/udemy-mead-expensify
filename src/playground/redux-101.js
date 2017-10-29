import React, { Component } from 'react';
import { createStore } from 'redux'

const countReducer = (state = { count: 0 }, action) => {

  switch (action.type) {

    case 'INCREMENT':

      const incrementAmount = action.incrementBy ? action.incrementBy : 1

      return {
        count: state.count + incrementAmount
      }

    case 'DECREMENT':
      return {
        count: state.count - 1
      }

    case 'RESET':
      return {
        count: state.count = 0
      }

    default:
      return state
  }

}


const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())  
})


// I want to increment the cound

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
})

store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'DECREMENT'
})


/*
store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'RESET'
})
*/
unsubscribe()

class Redux101 extends Component {

  componentDidMount() {

    //console.log('Redux101 mounted')

  }
  
  render() {

    return (
      <div>
        Redux101 Component
      </div>

    );
  }
}

export default Redux101;

