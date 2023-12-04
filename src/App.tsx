import { Route, Routes } from "react-router-dom";
import { AwaitingApproval, Login, ProtectedRoute, Signup } from "./auth";
import { Home } from "./pages";
import Omit from "react";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Settings from "./pages/settings";

type ToastParams = {
  position: string;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined | number;
  theme: string;
};

const toastParams: ToastParams = {
  position: "top-right",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
};

type LoadingParams = Omit<ToastParams, "autoClose" | 'position' | 'theme'> & {
  autoClose: boolean;
};

const loadingParams: LoadingParams = {
  ...toastParams, 
  autoClose: false
}

//@ts-expect-error as progess is undefined
export const notify = (val: string) => toast.success(`${val}`, toastParams);
//@ts-expect-error as progess is undefined
export const warn = (val: string) => toast.error(`${val}`, toastParams);
//@ts-expect-error as progess is undefined
export const inform = (val: string) => toast.info(`${val}`, toastParams);
export const loadingToast = (val: string) =>
//@ts-expect-error as progess is undefined
  toast.info(`${val}`, loadingParams);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/onboarding" element={<Signup />} />
        <Route path="/awaiting" element={<AwaitingApproval />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
