//  @TODO1 - Create a React component that renders an emoji (😄)

//  @TODO2 - Make a button to toggle between the emojis (😄 and 😢)

//  @TODO5 - Import Calculator into App to be rendered under our Emoji component.

import React from 'react';

const happy = '😄';
const sad = '😢';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: happy };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood === happy ? sad : happy;
    this.setState({ mood: newMood });
  }

  render() {
    return (
        <div>
          <h1> {this.state.mood} </h1>
          <button onClick={this.toggleMood}>
            Change Mood
          </button>
        </div>
    );
  }
}

export default App;