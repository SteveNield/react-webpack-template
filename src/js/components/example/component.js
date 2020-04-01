import React from 'react';

import './style.scss';

export default ({
  message, 
  count, 
  onIncrementClick
}) => {
  return (
    <div className="example-component">
      <div 
        className="message">
        {message}
        <span>
          ({count})
        </span>
      </div>
      <button 
        onClick={onIncrementClick}>
        Click Here to Increment!
      </button>
    </div>
  );
}