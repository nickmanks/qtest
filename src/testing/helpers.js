/* eslint-env jest */
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {shallow} from 'enzyme';
import reducers from '../reducers';

export function unwrappedShallow(cmp, options) {
  const shallowOptions = options || {context: {}};

  return cmp.type && cmp.type.WrappedComponent
    ? shallow(cmp, shallowOptions).shallow(shallowOptions)
    : shallow(cmp, shallowOptions);
}

export function event() {
  let resolver = null;

  const promise = new Promise((resolve)=> {
    resolver = resolve;
  });
  promise.fire = ()=> resolver();

  return promise;
}

export const testStore = (state = {}, middlewares = [])=> {
  const capture = jest.fn();

  const store = createStore(
    reducers,
    state,
    applyMiddleware(
      thunkMiddleware,
      ...middlewares,
      ()=> (next)=> (action)=> {
        capture(action);
        store.nextDispatch.fire();
        store.nextDispatch = event();
        return next(action);
      }
    )
  );
  store.nextDispatch = event();
  store.dispatchSpy = capture;

  return store;
};
