import { createStore } from 'redux';

const create = reducer => {
  return createStore(reducer);
};
export default create;
