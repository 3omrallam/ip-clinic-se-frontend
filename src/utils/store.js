import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import {
  persistStore,
  persistReducer,
  persistCombineReducers,
} from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";

import dynamicMiddlewares from "redux-dynamic-middlewares";

import { isProduction } from "../configs";

import { appSlice, mfeRegistered } from "../state/appSlice";

import { genericAPI } from "../state/services/generic";
import { appToDoListApi } from "../state/services/toDolist";
import { administration } from "../state/services/adminstration";

import { applicationsTable } from "../state/applicationsTableSlice";
import { Toast } from "../state/toastSlice";

// default configs, should be present all the time
const appReducers = {
  // slices
  [appSlice.name]: appSlice.reducer,
  [applicationsTable.name]: applicationsTable.reducer,
  [Toast.name]: Toast.reducer,
  // services
  [genericAPI.reducerPath]: genericAPI.reducer,
  [appToDoListApi.reducerPath]: appToDoListApi.reducer,
  [administration.reducerPath]: administration.reducer,
};
const appMiddlewares = [
  thunk,
  genericAPI.middleware,
  appToDoListApi.middleware,
  administration.middleware,
];

const persistConfigs = {
  storage,
  key: "root",
  debug: !isProduction,
};
const persistedAppReducers = persistReducer(
  persistConfigs,
  persistCombineReducers(persistConfigs, appReducers),
);

export const store = configureStore({
  reducer: persistedAppReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      dynamicMiddlewares,
      ...appMiddlewares,
    ),
  devTools: !isProduction,
});

export const storePersistor = persistStore(store);

export const dispatch = store.dispatch;

setupListeners(dispatch);

// MFEs injection handlers
store.mfesRegistered = ["appContainer"]; // injected micro-frontends names
store.mfesReducersRegistered = { ...appReducers }; // injected micro-frontends' reducers
store.injectReducers = (mfeName, reducers) => {
  const mfesRegistered = store.getState().app._mfesRegistered;
  // if (mfesRegistered.indexOf(mfeName) > -1) return;

  // add micro-frontend name to registered
  store.mfesRegistered = [...store.mfesRegistered, mfeName];
  // add micro-frontend's reducers to registered
  store.mfesReducersRegistered = {
    ...store.mfesReducersRegistered,
    ...reducers,
  };
  store.dispatch(mfeRegistered(mfeName));

  const newPersistedReducers = persistReducer(
    persistConfigs,
    persistCombineReducers(persistConfigs, store.mfesReducersRegistered),
  );
  store.replaceReducer(newPersistedReducers);
  storePersistor.persist();
};
