import { FaClipboard } from "react-icons/fa";
import MainContainer from "../../components/containers/MainContainer";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { IoChevronBackOutline } from "react-icons/io5";
import { Loader } from "../../components";
import Skeleton from "react-loading-skeleton";

const RevealTokens = () => {
  const [loading, setLoading] = useState(false);
  const storedUserString = sessionStorage.getItem("user");
  const clientId = storedUserString ? JSON.parse(storedUserString)._id : "";
  const [tokens, setTokens] = useState({
    production: "",
    staging: "",
  });
  const [showToken, setShowToken] = useState({
    clientId: false,
    production: false,
    staging: false,
  });
  const [copied, setCopied] = useState({
    clientId: false,
    production: false,
    staging: false,
  });

  const access_token = sessionStorage
    .getItem("access_token")
    ?.replace(/["']/g, "");

  const revealToken = (token: string) => {
    if (token === "staging") {
      setShowToken({
        ...showToken,
        staging: true,
      });
    } else if (token === "production") {
      setShowToken({
        ...showToken,
        production: true,
      });
    } else if (token === "clientId") {
      setShowToken({
        ...showToken,
        clientId: true,
      });
    }
  };

  const copyToClipboard = (token: string) => {
    if (token === "clientId") {
      navigator.clipboard.writeText(clientId);
      setCopied({
        ...copied,
        clientId: true,
      });
      setTimeout(() => {
        setCopied({
          ...copied,
          clientId: false,
        });
      }, 1000);
    } else if (token === "staging") {
      navigator.clipboard.writeText(tokens.staging);
      setCopied({
        ...copied,
        staging: true,
      });
      setTimeout(() => {
        setCopied({
          ...copied,
          staging: false,
        });
      }, 1000);
    } else if (token === "production") {
      navigator.clipboard.writeText(tokens.production);
      setCopied({
        ...copied,
        production: true,
      });
      setTimeout(() => {
        setCopied({
          ...copied,
          production: false,
        });
      }, 1000);
    }
  };

  const handleRefresh = () => {
    setLoading(true);
    fetch(
      "https://qcbackend.onrender.com/api/v1/business_admin/tokens/refresh",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          toast.success("Tokens refreshed successfully", {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      });
  };

  const backToSettings = () => {
    window.history.back();
  };
  useEffect(() => {
    fetch(
      "https://qcbackend.onrender.com/api/v1/business_admin/tokens/expose",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setTokens({
          production: data.data.production_api_key,
          staging: data.data.staging_api_key,
        });
      });
  }, [access_token]);

  return (
    <MainContainer activeTab="Settings">
      <ToastContainer />
      <div>
        <button
          onClick={backToSettings}
          className="cursor-pointer flex items-center text-sm font-semibold"
        >
          <IoChevronBackOutline size={18} className="mr-1" />
          Back
        </button>
        <h2 className="text-lg font-semibold mt-2">Reveal Tokens</h2>
        <div className="w-[70%] mt-8">
          {tokens.production !== "" ? (
            <div className="space-y-8">
              <div className="flex flex-col space-y-2">
                <h2 className="font-medium">Client ID</h2>
                <div className="flex items-center justify-between cursor-pointer bg-[#f1f1f1] text-[#808080] py-2 px-4 rounded-lg">
                  <p onClick={() => revealToken("clientId")} className="italic">
                    {showToken.clientId ? clientId : "click to reveal"}
                  </p>
                  {copied.clientId ? (
                    <p className="text-[#4169e2] text-[12px]">copied!</p>
                  ) : (
                    <div onClick={() => copyToClipboard("clientId")}>
                      <FaClipboard />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="font-medium">Production API Key</h2>
                <div className="flex items-center justify-between cursor-pointer bg-[#f1f1f1] text-[#808080] py-2 px-4 rounded-lg">
                  <p
                    onClick={() => revealToken("production")}
                    className="italic"
                  >
                    {showToken.production
                      ? tokens.production
                      : "click to reveal"}
                  </p>
                  {copied.production ? (
                    <p className="text-[#4169e2] text-[12px]">copied!</p>
                  ) : (
                    <div onClick={() => copyToClipboard("production")}>
                      <FaClipboard />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <h2 className="font-medium">Staging API Key</h2>
                <div className="flex items-center justify-between cursor-pointer bg-[#f1f1f1] text-[#808080] py-2 px-4 rounded-lg">
                  <p onClick={() => revealToken("staging")} className="italic">
                    {showToken.staging ? tokens.staging : "click to reveal"}
                  </p>
                  {copied.staging ? (
                    <p className="text-[#4169e2] text-[12px]">copied!</p>
                  ) : (
                    <div onClick={() => copyToClipboard("staging")}>
                      <FaClipboard />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex flex-col space-y-2">
                <div className="w-[15%]">
                  <Skeleton />
                </div>
                <div className="w-[100%]">
                  <Skeleton />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="w-[15%]">
                  <Skeleton />
                </div>
                <div className="w-[100%]">
                  <Skeleton />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="w-[15%]">
                  <Skeleton />
                </div>
                <div className="w-[100%]">
                  <Skeleton />
                </div>
              </div>
            </div>
          )}
          <div
            onClick={handleRefresh}
            className="text-[#4169e2] text-[15px] cursor-pointer mt-8"
          >
            {loading ? <Loader /> : "Refresh tokens"}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default RevealTokens;
