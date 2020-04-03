import React, { useContext } from 'react';

import Example from '../components/example';

import useViewmodel from './viewmodel.hook';

export default () => {
  const {
    message,
    count,
    onIncrement
  } = useViewmodel();

  return (
    <Example
      message={message}
      count={count}
      onIncrementClick={onIncrement} />
  );
}