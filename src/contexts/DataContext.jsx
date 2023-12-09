import React, { createContext, useState, useContext } from "react";
// import { Data } from "../pages/types";


export const DataContext = createContext(null);


const DataProvider= ({ children }) => {
    const [resData, setResData] = useState(null);
    return <DataContext.Provider value={{ resData, setResData }}>{children}</DataContext.Provider>;
};
// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => useContext(DataContext)
export default DataProvider;
