import React from 'react';
import Greeting from './component/greeting';
import Emoji from './component/emoji';
import EmojiToggle from './component/emojitoggle';
const name = 'John';
class App extends React.Component {
  render() {
    return (
      <div>
        <Greeting name={name} />
        <Emoji symbol="🚀" label="rocket" />
        <EmojiToggle />
      </div>
    );
  }
}

export default App;
