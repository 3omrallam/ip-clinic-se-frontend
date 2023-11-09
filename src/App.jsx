import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import AppContainer from "./AppContainer";

// global configurations
import "./utils/i18n";
import { store, storePersistor } from "./utils/store";

function App({ children }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={storePersistor} loading={null}>
        <AppContainer>{children}</AppContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
