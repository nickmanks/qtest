import reducer from '../reducer';

const DefaultState = {
  faqs: []
};

export default reducer(DefaultState, {
  'faq/set-faqs': (state, {faqs})=> ({
    ...state,
    faqs
  })
});
