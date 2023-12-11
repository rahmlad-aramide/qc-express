import { createContext, useContext, useState } from "react";
import { DownloadModal, FilterModal } from "../components";

interface DownloadModalProps {
    isOpen: boolean;
    isOpenFilter: boolean;
    _id: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
    setId: React.Dispatch<React.SetStateAction<string>>;
  }
const initialValues:DownloadModalProps = {
    isOpen: false,
    isOpenFilter: false,
    _id: '',
    setIsOpen: ()=> {},
    setIsOpenFilter: ()=> {},
    setId: ()=> {},
  }
export const ModalContext = createContext(initialValues);

const ModalProvider = ({children}:React.PropsWithChildren) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenFilter, setIsOpenFilter] = useState(false)
    const [_id, setId] = useState('')
   
    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen, _id, setId, isOpenFilter, setIsOpenFilter }}>
            {children}
            <DownloadModal />
            <FilterModal />
        </ModalContext.Provider>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext);
export default ModalProvider;