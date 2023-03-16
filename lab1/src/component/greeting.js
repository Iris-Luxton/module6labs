// lab1
// class Greeting extends React.Component {
//   render() {
//     return <div>Hello {this.props.name}</div>;
//   }
// }

// lab2

import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');

  const handleGreetClick = () => {
    const yourName = prompt('What is your name?');
    setName(yourName);
  }
// after the button is clicked, name will be updated using yourName and then will be refreshed
  return (
    <div>
      <h1>Hello {name || 'World'}</h1>
      <button onClick={handleGreetClick}>Greet</button>
    </div>
  );
}

export default Greeting;

// class will use render, function will use return