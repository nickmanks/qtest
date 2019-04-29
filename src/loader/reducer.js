import reducer from '../reducer';

const DefaultState = {
  logo: null,
  hero: null
};

export default reducer(DefaultState, {
  'loader/set-app-data': (state, {logo, hero})=> ({
    ...state,
    logo,
    hero
  })
});
