import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IDefaultFetchState} from '../../Types/Types';
import DefaultAction from '../Actions/DefaultAction';
import {IGenre, IMovie, IMovieLite} from '../../Types/MovieTypes';

export type IDefaultState = {
  genresList: IGenre[];
  subscribedList: IMovie[];
} & IDefaultFetchState;

export const defaultInitialState: IDefaultState = {
  isLoading: false,
  error: null,
  isSuccess: null,
  genresList: [],
  subscribedList: [],
};

const DefaultReducer = createSlice({
  name: 'default',
  initialState: defaultInitialState,
  reducers: {
    addSubscribe: (state: IDefaultState, action: PayloadAction<IMovie>) => {
      state.subscribedList = [...state.subscribedList, action.payload];
    },
    removeSubscribe: (state: IDefaultState, action: PayloadAction<number>) => {
      state.subscribedList = state.subscribedList.filter(
        item => item.id !== action.payload,
      );
    },
  },
  extraReducers: DefaultAction,
});

export const {addSubscribe, removeSubscribe} = DefaultReducer.actions;
export default DefaultReducer;
