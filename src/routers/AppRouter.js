import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'

//import Redux101 from '../playground/redux-101'
//import ReduxExpensify from '../playground/redux-expensify'
// import Destructuring101 from '../playground/destructuring'

const AppRouter = () => (

    <BrowserRouter>

      <div>

        <Header />

        <Switch>

          <Route path='/' exact={true} component={ExpenseDashboardPage} />

          <Route path='/create' component={AddExpensePage} />

          <Route path='/edit/:id' component={EditExpensePage} />

          <Route path='/help' component={HelpPage} />

          <Route component={NotFoundPage} />

        </Switch>      

        {/*<Destructuring101 />*/}
        
      </div>

    </BrowserRouter>
)

export default AppRouter
