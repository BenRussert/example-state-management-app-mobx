import React, { createContext, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";

import { GlobalAppProvider } from "./global-app-provider";
import {
  CountTracker,
  PriceTracker,
  TotalCostTracker
} from "./tracker-components";

import "./styles.css";

function App() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(4.0);

  return (
    <GlobalAppProvider value={{ count, price, setCount, setPrice }}>
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
