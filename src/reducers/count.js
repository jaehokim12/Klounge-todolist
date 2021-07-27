import * as actions from '../actions/count';

const initialState = {
  count: 0,
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case actions.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
export default countReducer;
