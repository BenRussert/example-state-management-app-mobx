import React, { createContext, useState, useEffect, useContext } from "react";

export const globalAppContext = createContext(null);
export const GlobalAppProvider = globalAppContext.Provider;
