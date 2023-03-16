// @TODO1: Create a Greet button which replaces “Hello World” with “Hello <your name>” when clicked.

import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hello World</h1>;
    // return <h1>Hello {this.props.name}</h1>;
  }
}

ReactDOM.render(<Greeting name='Jason' />, document.getElementById('root'));