import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

import '../App.css';

class Header extends Component {

  componentDidMount() {
    //console.log('Header mounted')
  }

  render() {

    return (
      <header>

        <h1>Expensify</h1>

        <NavLink to='/' activeClassName='Is-Active' exact={true}>Dashboard</NavLink>

        <NavLink to='/create' activeClassName='Is-Active'>Create Expense</NavLink>

        <NavLink to='/help' activeClassName='Is-Active'>Help</NavLink>

      </header>

    );
  }
}

export default Header
