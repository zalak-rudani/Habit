import {makeApiCall} from './apiService';

const GET = 'GET';

export const getProductsData = async request => {
  console.log('request::', request);

  return makeApiCall({
    method: GET,
    url: 'products/search',
    params: request?.params,
    data: request?.data,
  })
    .then(response => {
      console.log('responsepopop==', response);

      if (request.onSuccess) request.onSuccess(response);
    })
    .catch(error => {
      console.log('error-->', error);
    });
};
