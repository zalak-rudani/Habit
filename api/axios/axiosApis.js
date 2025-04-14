import axios from 'axios';
import {makeAPIRequest} from './makeApiRequest';

// Method: Get
export const getApiData = async (data, setData, setIsLoading) => {
  try {
    const response = await axios('https://dummyjson.com/products');
    console.log('response-=-=-=-', response.data.products);
    setData(response?.data?.products);
    if (data.length) {
      setIsLoading(false);
      return true;
    } else {
      setIsLoading(false);
      return false;
    }
  } catch (error) {
    console.error(error);
  }
};

export const callAPI = async request => {
  return makeAPIRequest({
    method: GET,
  })
    .then(response => {
      console.log('response', response);
    })
    .catch(error => {
      console.log('error', error);
    });
};
