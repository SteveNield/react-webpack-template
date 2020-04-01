import React, { useContext } from 'react';

import Example from '../components/example';
import { ExampleContext } from '../store/example/context';
import { incrementCount } from '../store/example/actions';

export default () => {
    const { state, dispatch } = useContext(ExampleContext);
    const { message, count } = state;

    const onIncrement = () => incrementCount(dispatch);

    return (
        <Example
            message={message}
            count={count}
            onIncrementClick={onIncrement} />
    );
}