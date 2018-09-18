import React from 'react';

const Card = ({ id, name, email }) => { //Destructuring in parameter
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}/set_set3?size=200x200`} alt="robot"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;