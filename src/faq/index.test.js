import React from 'react';
import {act, create} from 'react-test-renderer';
import Spinner from 'react-spinkit';
import Faq from '.';
import {loadFaqData} from './actions';
import {unwrappedShallow, testStore} from '../testing/helpers';

/* eslint max-len: 0 */

const mockFaqData = {
  faqs: [
    {
      title: 'How can I check my estimated delivery window?',
      body:
        'Model 3 reservation holders can check their latest delivery timing estimate in their Tesla Account.'
    },
    {
      title:
        'When will I be invited to configure my Model 3, and when can I take delivery?',
      body:
        '<p>Model 3 reservation holders are receiving invitations to order and design Model 3 based on the time and date that they placed their reservation. Current Tesla owners have priority as a thank you for their support.</p><p>Deliveries will start in the United States first, with international deliveries starting in left-hand drive markets in late 2018, followed by right-hand drive markets in 2019.</p>'
    },
    {
      title: 'Which Model 3 features are currently available?',
      body:
        'Our first Model 3 in production comes with a long-range battery, 310 miles of range, rear-wheel drive and premium upgrades throughout, beginning at $49,000 USD. In early 2018, we will introduce the option for a standard battery with 220 miles of range and standard equipment, beginning at $35,000 USD.'
    }
  ]
};

jest.mock('../config', ()=> ({
  graphClient: {
    query: async ()=> ({
      data: mockFaqData
    })
  }
}));

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

    expect(store).toDispatch(loadFaqData(mockFaqData));
  });
});
