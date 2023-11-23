import {ActionReducerMapBuilder, createAsyncThunk} from '@reduxjs/toolkit';
import APICall from '../../Utilities/APIs/APIRequest';
import {IDiscoverState} from '../Reducers/DiscoverReducer';
import {RootStateType} from '../Store';

export const fetchPopular = createAsyncThunk('FETCH_POPULAR', async () => {
  const result = await APICall('GET_POPULAR', {params: {language: 'en-US'}});

  return result;
});

export default (builder: ActionReducerMapBuilder<IDiscoverState>) => {
  builder
    .addCase(fetchPopular.pending, state => {
      state.error = null;
      state.isLoading = true;
      state.isSuccess = null;
    })
    .addCase(fetchPopular.rejected, (state, action: any) => {
      state.error = {isError: true, message: action.payload.message};
      state.isLoading = false;
      state.isSuccess = false;
    })
    .addCase(fetchPopular.fulfilled, (state, action) => {
      const dataset = action.payload;
      state.error = {isError: false, message: null};
      state.isLoading = false;
      state.isSuccess = true;
      state.movies = dataset.results;
      state.pages = dataset.page;
    });
};
