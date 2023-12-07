import { Route, Routes } from "react-router-dom";
// import { AwaitingApproval, Login, Signup } from "./auth";
import { AwaitingApproval, Login, ProtectedRoute, Signup } from "./auth";
import { Dashboard, Error, Home } from "./pages";
import Omit from "react";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Settings from "./pages/settings";
import RevealTokens from "./pages/settings/RevealTokens";
import NewUser from "./pages/settings/NewUser";
import ListBusinessUsers from "./pages/settings/ListBusinessUsers";
import Feedback from "./pages/feedback";

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

type LoadingParams = Omit<ToastParams, "autoClose" | "position" | "theme"> & {
  autoClose: boolean;
};

const loadingParams: LoadingParams = {
  ...toastParams,
  autoClose: false,
};

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
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Signup />} />
        <Route path="/awaiting" element={<AwaitingApproval />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/reveal-tokens" element={<RevealTokens />} />
        <Route path="/settings/new-user" element={<NewUser />} />
        <Route path="/settings/list-business-users" element={<ListBusinessUsers />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;
