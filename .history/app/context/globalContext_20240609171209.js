"use client";

import React, { useContext, createContext, useState } from "react";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [contextState, setContextState] = useState("hello");

    return (
        <GlobalContext.Provider value={contextState}>
            <GlobalContextUpdate.Provider value={setContextState}>
                {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export const useGlobalContextUpdate = () => {
    return useContext(GlobalContextUpdate);
};
