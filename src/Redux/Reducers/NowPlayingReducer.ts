import {createSlice} from '@reduxjs/toolkit';
import DiscoverAction from '../Actions/DiscoverAction';
import {IDiscoverState} from './DiscoverReducer';
import NowPlayingAction from '../Actions/NowPlayingAction';

export const nowPlayingInitialState: IDiscoverState = {
  isLoading: false,
  error: null,
  isSuccess: null,
  movies: [],
  pages: 1,
  genre: 'all',
};

const NowPlayingReducer = createSlice({
  name: 'now-playing',
  initialState: nowPlayingInitialState,
  reducers: {},
  extraReducers: NowPlayingAction,
});

export const {} = NowPlayingReducer.actions;
export default NowPlayingReducer;
