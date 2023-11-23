import {IEndpointPool} from './APIUtils';

/**
 * This endpoint pool types accepts
 * @type IEndpointPool
 */

const EndpointPool = [
  {
    endpoint: 'GET_POPULAR',
    url: 'movie/popular',
    method: 'get',
  },
  {
    endpoint: 'GET_MOVIE',
    url: 'discover/movie',
    method: 'get',
  },
  {
    endpoint: 'GET_NOW_PLAYING',
    url: 'movie/now_playing',
    method: 'get',
  },
  {
    endpoint: 'GET_UPCOMING',
    url: 'movie/upcoming',
    method: 'get',
  },
  {
    endpoint: 'GET_GENRES',
    url: 'genre/movie/list',
    method: 'get',
  },
] as const;

export default EndpointPool;
