import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// global configurations
import "./utils/i18n";
import { store, storePersistor } from "./utils/store";

import AppContainer from "./AppContainer";
import AppRoutes from "./AppRoutes";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="*"
      element={
        <AppContainer>
          <AppRoutes />
        </AppContainer>
      }
    />,
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={storePersistor} loading={null}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
