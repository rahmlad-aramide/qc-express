import { createContext, useState } from "react";

interface DownloadModalProps {
    isOpen: boolean;
    // onRequestClose: () => void;
    // isLoading: boolean;
    // download: () => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    // setIsOpen: (isOpen: boolean) => void;
    // children: React.ReactNode
  }
const initialValues:DownloadModalProps = {
    isOpen: false,
    // onRequestClose: ()=>{},
    // isLoading: false,
    // download: ()=>{},
    setIsOpen: ()=> {},
    // children: null
  }
export const ModalContext = createContext(initialValues);

const ModalProvider = ({children}:React.PropsWithChildren) => {
    // const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    // const download = () => {}
    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </ModalContext.Provider>
    )
}
export default ModalProvider;