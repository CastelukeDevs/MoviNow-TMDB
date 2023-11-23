import {ActionReducerMapBuilder, createAsyncThunk} from '@reduxjs/toolkit';
import APICall from '../../Utilities/APIs/APIRequest';
import {IEndpoint} from '../../Utilities/APIs/APIUtils';
import {IGenreState} from '../Reducers/GenreReducer';

const GetGenresPrefix: IEndpoint = 'GET_GENRES';

export const fetchGenres = createAsyncThunk(GetGenresPrefix, async () => {
  const result = await APICall('GET_GENRES', {params: {language: 'en'}});

  return result;
});

export default (builder: ActionReducerMapBuilder<IGenreState>) => {
  builder
    .addCase(fetchGenres.pending, state => {
      state.error = null;
      state.isLoading = true;
      state.isSuccess = null;
    })
    .addCase(fetchGenres.rejected, (state, action: any) => {
      state.error = {isError: true, message: action.payload.message};
      state.isLoading = false;
      state.isSuccess = false;
    })
    .addCase(fetchGenres.fulfilled, (state, action) => {
      state.error = {isError: false, message: null};
      state.isLoading = false;
      state.isSuccess = true;
      state.genresList = action.payload.genres;
    });
};
