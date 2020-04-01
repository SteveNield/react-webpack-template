import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  message: 'hello there',
  count: 0
};

const ExampleContext = createContext(initialState);

const ExampleProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <ExampleContext.Provider value={{ state, dispatch }}>
      { children }
    </ExampleContext.Provider>
  );
}

export {
  ExampleContext,
  ExampleProvider
}

