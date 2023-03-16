import React from 'react';

function Emoji(props) {
   
  return (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ''}
      aria-hidden={props.label ? 'false' : 'true'}
    >
      {props.symbol}
    </span>
  );
}

export default Emoji;
// The aria-label attribute is used to describe the purpose or nature of the element to screen readers and other assistive technology.
// The value of aria-label is set to props.label if it exists, or an empty string ('') if it doesn't exist.
// The aria-hidden attribute is used to indicate whether the element should be hidden from screen readers and other assistive technology. 
// The value of aria-hidden is set to 'false' if props.label exists (meaning the Emoji symbol has a label), 
// indicating that the element should not be hidden. If props.label does not exist (meaning the Emoji symbol does not have a label), 
// the value of aria-hidden is set to 'true', indicating that the element should be hidden.