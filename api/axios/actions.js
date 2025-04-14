import {makeApiCall} from './apiService';

const GET = 'GET';

export const getProductsData = async prop => {
  const {request, params} = prop;
  console.log('request::', request);

  return makeApiCall({
    method: GET,
    url: 'products',
    params: params,
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
