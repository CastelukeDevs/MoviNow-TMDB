import {combineReducers} from 'redux';
import DiscoverReducer from './DiscoverReducer';
import DefaultReducer from './DefaultReducer';

export default combineReducers({
  discover: DiscoverReducer.reducer,
  default: DefaultReducer.reducer,
});
