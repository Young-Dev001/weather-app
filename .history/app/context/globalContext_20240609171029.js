"use Client"

import React, { useContext, createContext, useState } from "react";


const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [ contextState, setContextState] = useState("hello");

    return (
        <GlobalContext.Provider value={{ contextState  }}>
        <GlobalContextUpdate.Provider>{ children }</GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    );
};