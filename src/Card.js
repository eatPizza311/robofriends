import React from 'react';

const Card = () => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src="https://robohash.org/test/set_set3?size=200x200" alt="robot"/>
      <div>
        <h2>Name</h2>
        <p>Name@gmail.com</p>
      </div>
    </div>
  );
}

export default Card;