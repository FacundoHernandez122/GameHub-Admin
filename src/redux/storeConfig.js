 

 

import { configureStore } from '@reduxjs/toolkit';

import {

  persistStore,

  persistReducer,

  FLUSH,

  REHYDRATE,

  PAUSE,

  PERSIST,

  PURGE,

  REGISTER,

} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { PersistGate } from 'redux-persist/integration/react';

import { combineReducers } from 'redux';

import adminReducer from './adminSlice';

import cartReducer from './cartSlice'

 

const rootReducer = combineReducers({

  admin: adminReducer,

  cart: cartReducer,

});

 

const persistConfig = { key: 'root', storage };

const persistedReducer = persistReducer(persistConfig, rootReducer);

 

const store = configureStore({

  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware({

      serializableCheck: {

        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],

      },

    }),

});

 

const persistor = persistStore(store);

 


 

export { store, persistor };

 