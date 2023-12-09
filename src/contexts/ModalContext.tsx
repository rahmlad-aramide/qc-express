import { createContext, useContext, useState } from "react";

interface DownloadModalProps {
    isOpen: boolean;
    _id: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setId: React.Dispatch<React.SetStateAction<string>>;
  }
const initialValues:DownloadModalProps = {
    isOpen: false,
    _id: '',
    setIsOpen: ()=> {},
    setId: ()=> {},
  }
export const ModalContext = createContext(initialValues);

const ModalProvider = ({children}:React.PropsWithChildren) => {
    const [isOpen, setIsOpen] = useState(false)
    const [_id, setId] = useState('')
    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen, _id, setId }}>
            {children}
        </ModalContext.Provider>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext);
export default ModalProvider;