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
// import rootReducer from "./reducers";
import amazonReducer from "../redux/amazonSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["products", "userInfo","wishList"],
};

const persistedReducer = persistReducer(persistConfig, amazonReducer);

export const store = configureStore({
  reducer: {amazon:persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);