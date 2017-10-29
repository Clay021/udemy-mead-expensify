import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class NotFoundPage extends Component {

  componentDidMount() {
    console.log('NotFoundPage mounted')
  }

  render() {

    return (
        <div>
          404! <Link to='/'>HOME</Link>
        </div>

    );
  }
}

export default NotFoundPage

