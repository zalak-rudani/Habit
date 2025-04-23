import {makeApiCall} from './apiService';

const GET = 'GET';
const POST = 'POST';
const PATCH = 'PATCH';
const PUT = 'PUT';
const DELETE = 'DELETE';

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

export const postProductsData = async request => {
  console.log('request::', request);

  return makeApiCall({
    method: POST,
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

export const patchProductsData = async request => {
  console.log('request::', request);

  return makeApiCall({
    method: PATCH,
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

export const putProductsData = async request => {
  console.log('request::', request);

  return makeApiCall({
    method: PUT,
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

export const deleteProductsData = async request => {
  console.log('request::', request);

  return makeApiCall({
    method: DELETE,
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
