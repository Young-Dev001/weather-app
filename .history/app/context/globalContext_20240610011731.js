"use client";

import React, { useContext, createContext, useState } from "react";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [forecast, setForecast] = useState({});

    const fetchForecast = async () => {
        try {
            
        } catch (error) {
            console.log("Error fetching forecast data: ", error.message);           
        }
    };

    useEffect(() => {
        fetchForecast();
    }, []);

    return (
        <GlobalContext.Provider value="hello">
            <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);

export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
