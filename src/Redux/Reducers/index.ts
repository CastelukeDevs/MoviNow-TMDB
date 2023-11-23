import {combineReducers} from 'redux';
import DiscoverReducer from './DiscoverReducer';
import SubscribeReducer from './SubscribeReducer';
import GenreReducer from './GenreReducer';
import NowPlayingReducer from './NowPlayingReducer';
import UpcomingReducer from './UpcomingReducer';
import PopularReducer from './PopularReducer';

export default combineReducers({
  discover: DiscoverReducer.reducer,
  genre: GenreReducer.reducer,
  subscribe: SubscribeReducer.reducer,
  nowPlaying: NowPlayingReducer.reducer,
  upcoming: UpcomingReducer.reducer,
  popular: PopularReducer.reducer,
});
