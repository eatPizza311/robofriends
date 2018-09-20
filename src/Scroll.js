import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{
      overflowY: 'scroll', //JSX
      border: '1px solid black',
      height: '540px'}
      //double curly braket means this is a js expression, and within this I'm returning an object that can have css style
    }>
      {props.children}
    </div>
  );
}

export default Scroll;