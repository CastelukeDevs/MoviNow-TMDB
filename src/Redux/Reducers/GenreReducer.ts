import {createSlice} from '@reduxjs/toolkit';
import {IDefaultFetchState} from '../../Types/Types';
import GenreAction from '../Actions/GenreAction';
import {IGenre} from '../../Types/MovieTypes';

export type IGenreState = {
  genresList: IGenre[];
} & IDefaultFetchState;

export const defaultInitialState: IGenreState = {
  isLoading: false,
  error: null,
  isSuccess: null,
  genresList: [],
};

const GenreReducer = createSlice({
  name: 'genre',
  initialState: defaultInitialState,
  reducers: {},
  extraReducers: GenreAction,
});

export default GenreReducer;
