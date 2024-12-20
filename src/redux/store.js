import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import catalogReducer from './catalog/catalogSlice';

const persistConfig = {
    key: 'catalog',
    storage,
    whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, catalogReducer);


const store = configureStore({
    reducer: {
        catalog: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});

export const persistor = persistStore(store);
export default store;
