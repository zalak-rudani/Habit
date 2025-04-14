// import axios from 'axios';

// export const makeAPIRequest = async props => {
//   console.log('props::', props);

//   const {method, url, data, headers = {}, params, ignoreError} = props;

//   const baseURL = 'https://dummyjson.com/';

//   let header = {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//     Authorization: JSON.parse(userToken) || null,
//     ...headers,
//   };

//   return new Promise((resolve, reject) => {
//     const options = {
//       method: method,
//       url: baseURL + url,
//       data: data,
//       headers: header,
//       params: params,
//     };
//     console.log('options:::::;;', options);

//     axios(options)
//       .then(response => {
//         if (response.status === 200 || response.status === 201) {
//           resolve(response.data);
//         } else {
//           reject(response?.data);
//         }
//       })
//       .catch(error => {
//         if (ignoreError) {
//           reject();
//         } else {
//           console.log('error API', error);
//           reject(error?.response?.data);
//         }

//         if (axios.isCancel(error)) {
//           console.log('Request canceled:', error.message);
//         } else {
//           console.log('Error:', error?.message);
//         }
//       });
//   });
// };

// import axios, {Method, AxiosRequestConfig, AxiosResponse} from 'axios';

// // import {getEnvVars} from './config';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const makeAPIRequest = async props => {
//   const {method} = props;
//   console.log('method:', method);

//   //   const baseURL = getEnvVars()?.base_url;
//   const baseURL = 'https://dummyjson.com/products';
//   //   const endPoint/url = 'products';

//   //   let header = {
//   //     'Content-Type': 'application/json',
//   //     Accept: 'application/json',
//   //   };

//   return new Promise((resolve, reject) => {
//     console.log('options ==========>>>>>>>... ');
//     const options = {
//       method: method,
//       baseURL: baseURL,
//       //   data: data,
//       //   headers: header,
//       //   params: params,
//     };

//     console.log('options ========== ', options);

//     axios(options)
//       .then(response => {
//         console.log('response------', response);
//         if (response.status === 200 || response.status === 201) {
//           resolve(response.data);
//         } else {
//           reject(response?.data);
//         }
//       })
//       .catch(error => {
//         if (ignoreError) {
//           reject();
//         } else {
//           console.log('error API', error);
//           reject(error?.response?.data);
//         }

//         if (axios.isCancel(error)) {
//           console.log('Request canceled:', error.message);
//         } else {
//           console.log('Error:', error?.message);
//         }
//       });
//   });
// };
