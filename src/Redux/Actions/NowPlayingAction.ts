import {ActionReducerMapBuilder, createAsyncThunk} from '@reduxjs/toolkit';
import APICall from '../../Utilities/APIs/APIRequest';
import {IDiscoverState} from '../Reducers/DiscoverReducer';
import {RootStateType} from '../Store';

export const fetchNowPlaying = createAsyncThunk(
  'FETCH_NOW_PLAYING',
  async () => {
    const result = await APICall('GET_NOW_PLAYING', {
      params: {language: 'en-US'},
    });

    return result;
  },
);

export const fetchNowPlayingNext = createAsyncThunk(
  'FETCH_NOW_PLAYING_NEXT',
  async (_, {getState}) => {
    const discoverPage = getState() as RootStateType;
    console.log('discoverPage', discoverPage);
    const selectedPage = discoverPage.discover.pages;
    const fetch = await APICall('GET_NOW_PLAYING', {
      params: {page: selectedPage + 1, language: 'en-US'},
    });

    return fetch;
  },
);

export default (builder: ActionReducerMapBuilder<IDiscoverState>) => {
  builder
    .addCase(fetchNowPlaying.pending, state => {
      state.error = null;
      state.isLoading = true;
      state.isSuccess = null;
    })
    .addCase(fetchNowPlaying.rejected, (state, action: any) => {
      state.error = {isError: true, message: action.payload.message};
      state.isLoading = false;
      state.isSuccess = false;
    })
    .addCase(fetchNowPlaying.fulfilled, (state, action) => {
      const dataset = action.payload;
      state.error = {isError: false, message: null};
      state.isLoading = false;
      state.isSuccess = true;
      state.movies = dataset.results;
      state.pages = dataset.page;
    })
    .addCase(fetchNowPlayingNext.pending, state => {
      state.error = null;
      state.isLoading = true;
      state.isSuccess = null;
    })
    .addCase(fetchNowPlayingNext.rejected, (state, action: any) => {
      state.error = {isError: true, message: action.payload.message};
      state.isLoading = false;
      state.isSuccess = false;
    })
    .addCase(fetchNowPlayingNext.fulfilled, (state, action) => {
      const dataset = action.payload;
      state.error = {isError: false, message: null};
      state.isLoading = false;
      state.isSuccess = true;
      state.pages = dataset.page;
      state.movies.push(...action.payload.results);
    });
};
