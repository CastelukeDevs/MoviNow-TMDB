import {createSlice} from '@reduxjs/toolkit';
import {IDefaultFetchState} from '../../Types/Types';
import {IMovie} from '../../Types/MovieTypes';
import DiscoverAction from '../Actions/DiscoverAction';

export type IDiscoverState = {
  pages: number;
  genre: number | 'all';
  movies: IMovie[];
} & IDefaultFetchState;

export const discoverInitialState: IDiscoverState = {
  isLoading: false,
  error: null,
  isSuccess: null,
  movies: [],
  pages: 1,
  genre: 'all',
};

const DiscoverReducer = createSlice({
  name: 'movie',
  initialState: discoverInitialState,
  reducers: {},
  extraReducers: DiscoverAction,
});

export const {} = DiscoverReducer.actions;
export default DiscoverReducer;
