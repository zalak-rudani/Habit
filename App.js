import React from 'react';

import {Provider} from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store/RootReducer';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />;
      </PersistGate>
    </Provider>
  );
};

export default App;
  