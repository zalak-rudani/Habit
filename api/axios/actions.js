import {makeApiCall} from './apiService';

const GET = 'GET';
const POST = 'POST';
const PATCH = 'PATCH';
const PUT = 'PUT';
const DELETE = 'DELETE';

export const getProductsData = async request => {
  console.log('get request::', request?.params);
  console.log('get request::', request);

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
      console.log('geterror=-=-', error);
      if (request.onFail) request.onFail(error);
    });
};

export const postProductsData = async request => {
  console.log('post request::', request);
  console.log('post request::', request?.params);

  return makeApiCall({
    method: POST,
    url: 'products/add',
    params: request?.params,
    data: request?.data,
  })
    .then(response => {
      console.log('postresponse======', response);
      if (request.onSuccess) request.onSuccess(response);
    })
    .catch(error => {
      console.log('posterror=-=-=-=-', error);
      if (request.onFail) request.onFail(error);
    });
};

export const patchProductsData = async request => {
  console.log('patch request::', request);
  console.log('patchID::', request?.params?.id);

  return makeApiCall({
    method: PATCH,
    url: `products/${request?.params?.id}`,
    data: request?.data,
  })
    .then(response => {
      console.log('patchresponse ==-=-=-', response);
      if (request.onSuccess) request.onSuccess(response);
    })
    .catch(error => {
      console.log('patcherror -=-=--=', error);
      if (request.onFail) request.onFail(error);
    });
};

export const putProductsData = async request => {
  console.log('put request::', request);
  console.log('putID::', request?.params?.id);

  return makeApiCall({
    method: PUT,
    url: `products/${request?.params?.id}`,
    data: request?.data,
  })
    .then(response => {
      console.log('putresponse ==-=-=-', response);
      if (request.onSuccess) request.onSuccess(response);
    })
    .catch(error => {
      console.log('puterror -=-=--=', error);

      if (request.onFail) request.onFail(error);
    });
};

export const deleteProductsData = async request => {
  console.log('deleterequest::', request);
  console.log('deleteID::', request?.params?.id);

  return makeApiCall({
    method: DELETE,
    url: `products/${request?.params?.id}`,
  })
    .then(response => {
      console.log('deleteresponse ==-=-=-', response);
      if (request.onSuccess) request.onSuccess(response);
    })
    .catch(error => {
      console.log('deleteerror -=-=--=', error);
      if (request.onFail) request.onFail(error);
    });
};
