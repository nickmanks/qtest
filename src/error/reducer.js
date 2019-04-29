import reducer from '../reducer';

const DefaultState = {
  errors: []
};

export default reducer(DefaultState, {
  'errors/set-error': (state, {error})=> ({
    ...state,
    // Only need to show one error of a given service
    errors: state.errors.some((err)=> err.service === error.service)
      ? [...state.errors]
      : [...state.errors, error]
  }),

  'errors/clear-error': (state)=> {
    state.errors.shift();

    return {
      ...state,
      errors: [...state.errors]
    };
  },

  'errors/clear-all': (state)=> ({
    ...state,
    errors: []
  })
});
