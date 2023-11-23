import axios, {AxiosError} from 'axios';
import {IAPIsCallOption, IEndpoint, getEndpoint} from './APIUtils';
import {BASE_URL, TMDB_ACCESS_TOKEN} from '@env';

const BaseURL = BASE_URL;
const Token = TMDB_ACCESS_TOKEN;

const APICall = async (endpoint: IEndpoint, options?: IAPIsCallOption) => {
  axios.defaults.baseURL = BaseURL;

  const selectEndpoint = getEndpoint(endpoint)!;
  console.log('new Api call with detail:', {
    endpoint,
    options: options,
    selectEndpoint,
  });

  return await axios({
    method: selectEndpoint.method,
    url: selectEndpoint.url,
    data: options?.payload,
    params: options?.params,
    cancelToken: options?.cancelToken,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${Token}`,
    },
  })
    .then(result => {
      console.info('axios request success', result);
      return result.data;
    })
    .catch((error: AxiosError) => {
      console.error('axios error on request', error.config?.url);
      console.error('axios error', error);
      return error;
    });
};

export default APICall;
