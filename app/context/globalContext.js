"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [forecast, setForecast] = useState({});

    const fetchForecast = async () => {
        try {
            const res = await axios.get("/api/weather");
            setForecast(res.data);
        } catch (error) {
            console.error("Error fetching forecast data: ", error.message);
        }
    };

    useEffect(() => {
        fetchForecast();
    }, []);

    return (
        <GlobalContext.Provider value={{ forecast }}>
            <GlobalContextUpdate.Provider value={fetchForecast}>
                {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
