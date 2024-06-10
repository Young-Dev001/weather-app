import { createContext } from "react";


const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [state, useState] = useState("hello");

    return (
        <GlobalContext.Provider value={{ state }}>
        <GlobalContextUpdate.Provider>{ children }</GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    )
}