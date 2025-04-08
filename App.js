import React, {createContext} from 'react';

import {Provider, useSelector} from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store/RootReducer';
import {addData, addInfo} from './src/redux/slice/studentDataSlice';
import {UserNameContext} from './src/screen/LoginPage';

export const App = () => {
  const userInfo = store?.getState()?.studentDataSlice?.userInfo;
  console.log('userInfo-=-=', userInfo);

  // console.log('storeUserInfo-=-=', store?.dispatch(addInfo(userInfo)));

  // console.log('store-=-=', store?.subscribe(userInfo));
  // console.log('store-=-=', store?.replaceReducer());

  return (
    <Provider store={store}>
      <UserNameContext.Provider>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />;
        </PersistGate>
      </UserNameContext.Provider>
    </Provider>
  );
};

export default App;
