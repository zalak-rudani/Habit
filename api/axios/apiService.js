import axios from 'axios';
import {Platform} from 'react-native';

export const makeApiCall = async props => {
  console.log('props::', props);

  const {method, url, data, headers = {}, params, ignoreError} = props;

  const baseURL = 'https://dummyjson.com/';

  let header = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: null,
    ...headers,
  };

  return new Promise((resolve, reject) => {
    const options = {
      method: method,
      url: baseURL + url,
      headers: header,
      params: params,
    };
    console.log('options:::::;;', options);
    console.log('url:::::;;', url);

    if (Object.keys(data)?.length != 0) {
      options.data = data;
    }

    axios(options)
      .then(response => {
        console.log('response:============', response?.data);
        console.log('response:============', response);

        if (response.status === 200 || response.status === 201) {
          resolve(response.data);
        } else {
          reject(response?.data);
        }
      })
      .catch(error => {
        if (ignoreError) {
          reject();
        } else {
          console.log('error API', error);
          reject(error?.response?.data);
        }

        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.log('Error:', error?.message);
        }
      });
  });
};
