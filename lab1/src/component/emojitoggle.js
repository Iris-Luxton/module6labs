import React, { useState } from 'react';

function EmojiToggle() {
  const [emoji, setEmoji] = useState('😄');

  function toggleEmoji() {
    if (emoji === '😄') {
      setEmoji('😢');
    } else {
      setEmoji('😄');
    }
  }

  const happy = '😄';
  const sad = '😢';

  return (
    <div>
      <button onClick={toggleEmoji}>Toggle Emoji</button>
      <p>{emoji}</p>
      <p>{emoji === happy ? 'Happy' : 'Sad'}</p>
    </div>
  );
}

export default EmojiToggle;