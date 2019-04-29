import {combineReducers} from 'redux';
import appReducer from './loader/reducer';
import homeReducer from './home/reducer';
import faqReducer from './faq/reducer';
import errorsReducer from './error/reducer';

export default combineReducers({
  app: appReducer,
  home: homeReducer,
  faq: faqReducer,
  errors: errorsReducer
});
