import { useContext } from 'react';

import { ExampleContext } from '../store/example/context';
import { incrementCount } from '../store/example/actions';

export default () => {
  const { state, dispatch } = useContext(ExampleContext);
  const { message, count } = state;

  const onIncrement = () => incrementCount(dispatch);

  return {
    message,
    count,
    onIncrement
  }
}