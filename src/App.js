import React from "react";
import Routes from "./routes/Routes";
import { isAuthenticated } from "./services/Auth";
import Dashboard from "./pages/dashboard";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return <Routes />;
}

export default App;
