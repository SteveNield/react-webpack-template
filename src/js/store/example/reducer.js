import * as actionTypes from './action-types';

const incrementCount = state => {
  return {
    ...state,
    count: state.count + 1
  }
}

const reducerMap = {
  [actionTypes.INCREMENT_COUNT]: incrementCount
}

export default (state, action = {}) => {
  if(!reducerMap.hasOwnProperty(action.type)){
    return state;
  }

  return reducerMap[action.type](state, action);
}