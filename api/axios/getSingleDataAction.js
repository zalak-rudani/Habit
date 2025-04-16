import {makeApiCall} from './apiService';

const GET = 'GET';

export const getSingleDataAction = async request => {
  console.log('request::', request);

  return makeApiCall({
    method: GET,
    url: `products/${request?.data?.id}`,
    data: {},
  })
    .then(response => {
      console.log('responsepopop==', response);
      if (request.onSuccess) request.onSuccess(response);
    })
    .catch(error => {
      console.log('error-->', error);
    });
};
