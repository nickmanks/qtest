import React from 'react';
import {act, create} from 'react-test-renderer';
import Spinner from 'react-spinkit';
import Faq from '.';
import {loadFaqData} from './actions';
import {faqData} from './service';
import {unwrappedShallow, testStore} from '../testing/helpers';

describe('<FAQ Route />', ()=> {
  it('renders spinner if no faqs', ()=> {
    const store = testStore({
      faq: {faqs: []}
    });

    const wrapper = unwrappedShallow(<Faq store={store} />).shallow();

    expect(wrapper.find(Spinner).prop('name')).toEqual('line-scale-pulse-out');
  });

  it('dispatches with data after service load', async ()=> {
    const store = testStore({
      faq: {faqs: []}
    });

    let wrapper = null;
    // mount the component, but because it uses an async service
    // we will need to wait for useEffect to be called
    act(()=> {
      wrapper = create(<Faq store={store} />);
    });
    // Then we need to wait for the async service to return
    act(()=> {
      jest.runAllTimers();
    });
    // And then because it uses data from the service in a re-render
    // we will need to wait for the component to update
    act(()=> {
      wrapper.update();
    });

    await store.nextDispatch;

    expect(store).toDispatch(loadFaqData(faqData));
  });
});
