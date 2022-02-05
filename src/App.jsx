import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "./App.css";
import RoutingService from "./services/RoutingService";
import { store } from "../src/app/store";
import { sagaMiddleware } from "./app/store";
import rootSaga from "./app/api/rootSaga";

sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {" "}
        <RoutingService />
      </PersistGate>
    </Provider>
  );
}

export default App;
