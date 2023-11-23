import {ActionReducerMapBuilder, createAsyncThunk} from '@reduxjs/toolkit';
import APICall from '../../Utilities/APIs/APIRequest';
import {IDiscoverState} from '../Reducers/DiscoverReducer';
import {RootStateType} from '../Store';

export const fetchDiscover = createAsyncThunk('FETCH_DISCOVER', async () => {
  const result = await APICall('GET_MOVIE', {params: {language: 'en-US'}});

  return result;
});

export const fetchDiscoverNext = createAsyncThunk(
  'FETCH_DISCOVER_NEXT',
  async (args, {getState}) => {
    const discoverPage = getState() as RootStateType;
    console.log('discoverPage', discoverPage);
    const selectedPage = discoverPage.discover.pages;
    const fetch = await APICall('GET_MOVIE', {
      params: {page: selectedPage + 1, language: 'en-US'},
    });

    return fetch;
  },
);

export default (builder: ActionReducerMapBuilder<IDiscoverState>) => {
  builder
    .addCase(fetchDiscover.pending, state => {
      state.error = null;
      state.isLoading = true;
      state.isSuccess = null;
    })
    .addCase(fetchDiscover.rejected, (state, action: any) => {
      state.error = {isError: true, message: action.payload.message};
      state.isLoading = false;
      state.isSuccess = false;
    })
    .addCase(fetchDiscover.fulfilled, (state, action) => {
      const dataset = action.payload;
      state.error = {isError: false, message: null};
      state.isLoading = false;
      state.isSuccess = true;
      state.movies = dataset.results;
      state.pages = dataset.page;
    })
    .addCase(fetchDiscoverNext.pending, state => {
      state.error = null;
      state.isLoading = true;
      state.isSuccess = null;
    })
    .addCase(fetchDiscoverNext.rejected, (state, action: any) => {
      state.error = {isError: true, message: action.payload.message};
      state.isLoading = false;
      state.isSuccess = false;
    })
    .addCase(fetchDiscoverNext.fulfilled, (state, action) => {
      const dataset = action.payload;
      state.error = {isError: false, message: null};
      state.isLoading = false;
      state.isSuccess = true;
      state.pages = dataset.page;
      state.movies.push(...action.payload.results);
    });
};
