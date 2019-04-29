import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import {window} from './globals';

function getReduxDevTools() {
  const {__REDUX_DEVTOOLS_EXTENSION__} = window;
  let enhancer = (arg)=> arg;

  /* istanbul ignore if */
  if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancer = __REDUX_DEVTOOLS_EXTENSION__();
  }
  return enhancer;
}

const initialState = {};

export const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunkMiddleware),
    getReduxDevTools()
  )
);
