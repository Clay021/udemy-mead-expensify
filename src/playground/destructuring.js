import React, { Component } from 'react';

const info = (props) => (

  <div>
    <h2>Info</h2>
    <p>The Info Is: {props.info}</p>
  </div>

)


class Destructuring101 extends Component {

  componentDidMount() {

    console.log('Destructuring101 mounted')

  }
  
  render() {

    return (
      <div>
        Destructuring101 Component
      </div>

    );
  }
}

export default Destructuring101;

