import {ActionReducerMapBuilder, createAsyncThunk} from '@reduxjs/toolkit';
import APICall from '../../Utilities/APIs/APIRequest';
import {IDiscoverState} from '../Reducers/DiscoverReducer';
import {RootStateType} from '../Store';

export const fetchUpcoming = createAsyncThunk('FETCH_UPCOMING', async () => {
  const result = await APICall('GET_UPCOMING', {params: {language: 'en-US'}});

  return result;
});

export const fetchUpcomingNext = createAsyncThunk(
  'FETCH_UPCOMING_NEXT',
  async (args, {getState}) => {
    const discoverPage = getState() as RootStateType;
    console.log('discoverPage', discoverPage);
    const selectedPage = discoverPage.discover.pages;
    const fetch = await APICall('GET_UPCOMING', {
      params: {page: selectedPage + 1, language: 'en-US'},
    });

    return fetch;
  },
);

export default (builder: ActionReducerMapBuilder<IDiscoverState>) => {
  builder
    .addCase(fetchUpcoming.pending, state => {
      state.error = null;
      state.isLoading = true;
      state.isSuccess = null;
    })
    .addCase(fetchUpcoming.rejected, (state, action: any) => {
      state.error = {isError: true, message: action.payload.message};
      state.isLoading = false;
      state.isSuccess = false;
    })
    .addCase(fetchUpcoming.fulfilled, (state, action) => {
      const dataset = action.payload;
      state.error = {isError: false, message: null};
      state.isLoading = false;
      state.isSuccess = true;
      state.movies = dataset.results;
      state.pages = dataset.page;
    })
    .addCase(fetchUpcomingNext.pending, state => {
      state.error = null;
      state.isLoading = true;
      state.isSuccess = null;
    })
    .addCase(fetchUpcomingNext.rejected, (state, action: any) => {
      state.error = {isError: true, message: action.payload.message};
      state.isLoading = false;
      state.isSuccess = false;
    })
    .addCase(fetchUpcomingNext.fulfilled, (state, action) => {
      const dataset = action.payload;
      state.error = {isError: false, message: null};
      state.isLoading = false;
      state.isSuccess = true;
      state.pages = dataset.page;
      state.movies.push(...action.payload.results);
    });
};
