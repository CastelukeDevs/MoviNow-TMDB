import {IEndpointPool} from './APIUtils';

/**
 * This endpoint pool types accepts
 * @type IEndpointPool
 */

const EndpointPool = [
  {
    endpoint: 'GET_MOVIE',
    url: 'discover/movie',
    method: 'get',
  },
  {
    endpoint: 'GET_GENRES',
    url: 'genre/movie/list',
    method: 'get',
  },
] as const;

export default EndpointPool;
