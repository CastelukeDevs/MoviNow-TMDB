import {createSlice} from '@reduxjs/toolkit';
import {IDiscoverState} from './DiscoverReducer';
import UpcomingAction from '../Actions/UpcomingAction';

export const upcomingInitialState: IDiscoverState = {
  isLoading: false,
  error: null,
  isSuccess: null,
  movies: [],
  pages: 1,
  genre: 'all',
};

const UpcomingReducer = createSlice({
  name: 'upcoming',
  initialState: upcomingInitialState,
  reducers: {},
  extraReducers: UpcomingAction,
});

export const {} = UpcomingReducer.actions;
export default UpcomingReducer;
