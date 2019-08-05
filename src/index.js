import React from "react";
import ReactDOM from "react-dom";

import { GlobalAppProvider } from "./global-app-provider";
import {
  CountTracker,
  PriceTracker,
  TotalCostTracker
} from "./tracker-components";

import "./styles.css";

function App() {
  return (
    <GlobalAppProvider>
      <div className="App">
        <CountTracker />
        <PriceTracker />
        <TotalCostTracker />
      </div>
    </GlobalAppProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
