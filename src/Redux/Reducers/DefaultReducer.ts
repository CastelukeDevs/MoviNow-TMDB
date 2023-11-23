import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IDefaultFetchState, IErrorMessage, IUser} from '../../Types/Types';
import DefaultAction from '../Actions/DefaultAction';
import {IGenre, IMovie, IMovieLite} from '../../Types/MovieTypes';

export type IDefaultState = {
  genresList: IGenre[];
  subscribedList: IMovieLite[];
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
    // setUser: (state: IDefaultState, action: PayloadAction<IUser>) => {
    //   const userData = action.payload;
    //   state.userData = userData;
    // },
    // removeUser: (state: IDefaultState) => {
    //   state.userData = null;
    //   state.isLoading = false;
    //   state.error = null;
    // },
  },
  extraReducers: DefaultAction,
});

export const {} = DefaultReducer.actions;
export default DefaultReducer;
