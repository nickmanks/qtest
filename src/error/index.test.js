import React from 'react';
import {unwrappedShallow, testStore} from '../testing/helpers';
import ServiceAlert from '.';

describe('<ServiceAlert />', ()=> {
  it('is not open if there are no errors', ()=> {
    const store = testStore({
      errors: {errors: []}
    });

    const wrapper = unwrappedShallow(<ServiceAlert store={store} />);

    expect(wrapper.prop('open')).toEqual(false);
  });

  it('shows the correct error message', ()=> {
    const store = testStore({
      errors: {
        errors: [
          {
            service: 'Test',
            message: 'test message'
          }
        ]
      }
    });

    const wrapper = unwrappedShallow(<ServiceAlert store={store} />);

    expect(wrapper.prop('message')).toEqual('Test Service Error: test message');
  });

  it('clears the error if onClearError is called', ()=> {
    const store = testStore({
      errors: {
        errors: [
          {
            service: 'Test',
            message: 'test message'
          }
        ]
      }
    });

    const wrapper = unwrappedShallow(<ServiceAlert store={store} />);
    wrapper.prop('onClearError')();

    expect(store.getState().errors.errors).toEqual([]);
  });
});
