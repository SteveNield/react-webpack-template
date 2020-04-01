import * as actionTypes from './action-types';

export const incrementCount = dispatch => {
  dispatch({ type: actionTypes.INCREMENT_COUNT });
}