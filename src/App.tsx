/* eslint-disable react-refresh/only-export-components */
import { Route, Routes } from "react-router-dom";
import {
  AwaitingApproval,
  ForgotPassword,
  Login,
  ProtectedRoute,
  Signup,
} from "./auth";
import {
  Dashboard,
  Error,
  Home,
  ShipmentDetails,
  ShipmentTracking,
} from "./pages";

import { ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Settings from "./pages/settings";
import RevealTokens from "./pages/settings/RevealTokens";
import NewUser from "./pages/settings/NewUser";
import ListBusinessUsers from "./pages/settings/ListBusinessUsers";
import Feedback from "./pages/feedback";
import { DataProvider, ModalProvider } from "./contexts";
import ResetPassword from "./auth/reset";
import SettingsResetPassword from "./pages/settings/ResetPassword";

const toastParams: ToastOptions = {
  position: "top-right",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const loadingParams: ToastOptions = {
  ...toastParams,
  autoClose: false,
};

export const notify = (val: string) => {
  toast.success(`${val}`, { ...toastParams, toastId: "success" });
};
export const warn = (val: string) => {
  toast.error(`${val}`, { ...toastParams, toastId: "error" });
};
export const inform = (val: string) => {
  toast.info(`${val}`, { ...toastParams, toastId: "info" });
};
export const loadingToast = (val: string) =>
  toast.info(`${val}`, loadingParams);

function App() {
  return (
    <>
      <DataProvider>
        <ModalProvider>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Login />} />
            <Route path="/reset" element={<ResetPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/onboarding" element={<Signup />} />
            <Route path="/forget-password" element={<ForgotPassword />} />
            <Route path="/request-success" element={<AwaitingApproval />} />
            <Route path="/home" element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/shipment/:trackingId"
                element={<ShipmentDetails />}
              />
              <Route
                path="/tracking/:trackingId"
                element={<ShipmentTracking />}
              />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/settings/reveal-tokens"
                element={<RevealTokens />}
              />
              <Route path="/settings/new-user" element={<NewUser />} />
              <Route
                path="/settings/reset-password"
                element={<SettingsResetPassword />}
              />
              <Route
                path="/settings/list-business-users"
                element={<ListBusinessUsers />}
              />
              <Route path="/feedback" element={<Feedback />} />
            </Route>
          </Routes>
        </ModalProvider>
      </DataProvider>
    </>
  );
}

export default App;
