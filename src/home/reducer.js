import reducer from '../reducer';

const DefaultState = {
  title: null,
  description: null,
  dealImg: null
};

export default reducer(DefaultState, {
  'home/set-info': (state, {title, description, dealImg})=> ({
    ...state,
    title,
    description,
    dealImg
  })
});
