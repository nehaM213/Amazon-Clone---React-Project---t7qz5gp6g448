import { configureStore } from "@reduxjs/toolkit";// for creating store
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
  reducer: { amazon: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // you should specifically ignore all the action types it dispatches
  // core usage principles for Redux is that you should not put non-serializable values in state or actions.
  //if yes then use above code to prevent error
});

export let persistor = persistStore(store);