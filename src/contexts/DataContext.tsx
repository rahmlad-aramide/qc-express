import React, { createContext, useState, useContext } from "react";
import { Data } from "../pages/types";

interface DataContextProps {
    resData: Data|null;
    setResData: React.Dispatch<React.SetStateAction<Data|null>>
}
const initialData = {
    bookingCount: 0,
    topBooking: [],
    trackingResult: [],
    stateCount: [],
    totalValue: []
  }
const initialValues: DataContextProps = {
    resData: initialData,
    setResData: ()=>{}
}

export const DataContext = createContext(initialValues);


const DataProvider= ({ children }:React.PropsWithChildren) => {
    const [resData, setResData] = useState<Data|null>(null);
    return <DataContext.Provider value={{ resData, setResData }}>{children}</DataContext.Provider>;
};
// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => useContext(DataContext)
export default DataProvider;
