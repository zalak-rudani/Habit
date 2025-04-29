// **** // using concept of redux toolkit

import React, {createContext, useContext, useState} from 'react';

import {Provider, useSelector} from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store/RootReducer';

export const App = () => {
  const userInfo = store?.getState()?.studentDataSlice?.userInfo;
  console.log('userInfo-=-=', userInfo);

  // console.log('storeUserInfo-=-=', store?.dispatch(addInfo(userInfo)));

  // console.log('store-=-=', store?.subscribe(userInfo));
  // console.log('store-=-=', store?.replaceReducer());

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />;
      </PersistGate>
    </Provider>
  );
};

export default App;

// **** // using concept of 'useReducer' & 'useContext' hook

// import React from 'react';

// import RootNavigator from './src/navigation/RootNavigator';

// import {StudentDataProvider} from './src/context/studentDataContext';

// export const App = () => {
//   return (
//     <StudentDataProvider>
//       <RootNavigator />;
//     </StudentDataProvider>
//   );s
// };

// export default App;
