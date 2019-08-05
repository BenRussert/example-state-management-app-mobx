import React, { createContext, useState } from "react";

export const globalAppContext = createContext(null);

export function GlobalAppProvider({ children }) {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(4.0);
  return (
    <globalAppContext.Provider value={{ count, price, setCount, setPrice }}>
      {children}
    </globalAppContext.Provider>
  );
}
