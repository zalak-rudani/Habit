// import studentDetailsSlice from '../slice/studentDetailsSlice';

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import studentDataSlice from '../slice/studentDataSlice';

const appReducer = combineReducers({
  studentDataSlice: studentDataSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['studentDataSlice'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const rootReducer = (state, action) => {
  return persistedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export {store, persistor};
