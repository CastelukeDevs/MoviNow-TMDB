import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IMovie} from '../../Types/MovieTypes';

export type ISubscribeState = {
  movies: IMovie[];
  isLoading: boolean;
};

export const defaultInitialState: ISubscribeState = {
  movies: [],
  isLoading: false,
};

const SubscribeReducer = createSlice({
  name: 'subscribe',
  initialState: defaultInitialState,
  reducers: {
    addSubscribe: (state: ISubscribeState, action: PayloadAction<IMovie>) => {
      state.movies = [...state.movies, action.payload];
    },
    removeSubscribe: (
      state: ISubscribeState,
      action: PayloadAction<number>,
    ) => {
      state.movies = state.movies.filter(item => item.id !== action.payload);
    },
  },
});

export const {addSubscribe, removeSubscribe} = SubscribeReducer.actions;
export default SubscribeReducer;
