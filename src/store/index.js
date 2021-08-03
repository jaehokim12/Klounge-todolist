import { createStore,applyMiddleware } from 'redux';
import myLogger from '../middlewares/myLogger';

const create = reducer => {
  return createStore(reducer,applyMiddleware(myLogger));
};
export default create;
