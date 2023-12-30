import React, { createContext, useState, useContext } from "react";
import { Data, DataFilter } from "../pages/types";

interface DataContextProps {
  resData: Data | null;
  setResData: React.Dispatch<React.SetStateAction<Data | null>>;
  moreData: DataFilter | null;
  setMoreData: React.Dispatch<React.SetStateAction<DataFilter | null>>;
}
const initialData = {
  bookingCount: 0,
  topBooking: [],
  trackingResult: [],
  stateCount: [],
  totalValue: [],
};
const initialMoreData = {
  docs: [],
  totalDocs: 0,
  limit: 15,
  totalPages: null,
  page: 1,
  pagingCounter: null,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: null,
  nextPage: null,
};
const initialValues: DataContextProps = {
  resData: initialData,
  setResData: () => {},
  moreData: initialMoreData,
  setMoreData: () => {},
};

export const DataContext = createContext(initialValues);

const DataProvider = ({ children }: React.PropsWithChildren) => {
  const [resData, setResData] = useState<Data | null>(null);
  const [moreData, setMoreData] = useState<DataFilter | null>(null);
  return (
    <DataContext.Provider
      value={{ resData, setResData, moreData, setMoreData }}
    >
      {children}
    </DataContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => useContext(DataContext);
export default DataProvider;
