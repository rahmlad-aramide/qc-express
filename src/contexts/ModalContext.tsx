import { createContext, useContext, useState } from "react";
import { DownloadModal, FilterModal } from "../components";

const environment = sessionStorage.getItem("environment");

if (environment === null) {
  sessionStorage.setItem("environment", "sandbox");
}

interface DownloadModalProps {
  isOpen: boolean;
  isOpenFilter: boolean;
  _id: string;
  filterValues: InitialFilterValues;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setFilterValues: React.Dispatch<React.SetStateAction<InitialFilterValues>>;
}
type InitialFilterValues = {
  count_value: number;
  count_sort: string;
  delivery_from: string;
  delivery_to: string;
  date: string;
  user_email: string;
  environment?: string;
};
const initialFilterValues: InitialFilterValues = {
  count_value: 1,
  count_sort: "$lte",
  delivery_from: "",
  delivery_to: "",
  date: "",
  user_email: "",
  environment: environment || "",
};

const initialValues: DownloadModalProps = {
  isOpen: false,
  isOpenFilter: false,
  _id: "",
  filterValues: initialFilterValues,
  setIsOpen: () => {},
  setIsOpenFilter: () => {},
  setId: () => {},
  setFilterValues: () => {},
};

export const ModalContext = createContext(initialValues);

const ModalProvider = ({ children }: React.PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [_id, setId] = useState("");
  const [filterValues, setFilterValues] = useState(initialFilterValues);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        _id,
        setId,
        isOpenFilter,
        setIsOpenFilter,
        filterValues,
        setFilterValues,
      }}
    >
      {children}
      <DownloadModal />
      <FilterModal />
    </ModalContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext);
export default ModalProvider;
