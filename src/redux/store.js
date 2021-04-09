import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsAppReducer from './contacts/contacts-reducer';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  contactsApp: contactsAppReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = { ...getDefaultMiddleware(), logger };

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
