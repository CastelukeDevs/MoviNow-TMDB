import {createSlice} from '@reduxjs/toolkit';
import {IDiscoverState} from './DiscoverReducer';
import PopularAction from '../Actions/PopularAction';

export const popularInitialState: IDiscoverState = {
  isLoading: false,
  error: null,
  isSuccess: null,
  movies: [],
  pages: 1,
  genre: 'all',
};

const PopularReducer = createSlice({
  name: 'popular',
  initialState: popularInitialState,
  reducers: {},
  extraReducers: PopularAction,
});

export default PopularReducer;
