import React from 'react';

import {Provider, useSelector} from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store/RootReducer';
import {addData, addInfo} from './src/redux/slice/studentDataSlice';

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
