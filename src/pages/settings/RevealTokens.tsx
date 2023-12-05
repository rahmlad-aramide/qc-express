import { FaClipboard } from "react-icons/fa";
import MainContainer from "../../components/containers/MainContainer";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { IoChevronBackOutline } from "react-icons/io5";

const RevealTokens = () => {
  const [tokens, setTokens] = useState({
    production: "",
    staging: "",
  });
  const [showToken, setShowToken] = useState({
    production: false,
    staging: false,
  });
  const [copied, setCopied] = useState({
    production: false,
    staging: false,
  });
  const access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5YW5mZW9sdXdhYWtpbmRlbGUyNEBnbWFpbC5jb20iLCJ1c2VySWQiOiI2NTZkODk3ZTVhMjBlYzAwM2VlYzU4NGUiLCJ1c2VybmFtZSI6IkF5YW5mZW9sdXdhIEFraW5kZWxlIiwiZmlyc3RuYW1lIjoiNjU2ZDg5N2U1YTIwZWMwMDNlZWM1ODRjIiwidHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMTY5MjcwMSwiZXhwIjoxNzAxNjk2MzAxfQ.gmJvdCIloGIIuu5QJueeyaauk7K-975dIanCZg8QQwo";
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
    }
  };

  const copyToClipboard = (token: string) => {
    if (token === "staging") {
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
  }, []);

  return (
    <MainContainer>
      <ToastContainer />
      <div>
        <span
          onClick={backToSettings}
          className="cursor-pointer flex items-center text-lg font-semibold"
        >
          <IoChevronBackOutline size={25} className="mr-2" />
          Back
        </span>
        <h2 className="text-[32px] font-semibold">Reveal Tokens</h2>
        <div className="w-[70%] mt-8 space-y-8">
          <div className="flex flex-col space-y-2">
            <h2 className="font-semibold">Production API Key</h2>
            <div className="flex items-center justify-between cursor-pointer bg-[#f1f1f1] text-[#808080] py-2 px-4 rounded-lg">
              <p onClick={() => revealToken("production")} className="italic">
                {showToken.production ? tokens.production : "click to reveal"}
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
            <h2 className="font-semibold">Staging API Key</h2>
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
          <p
            onClick={handleRefresh}
            className="text-[#4169e2] text-[15px] cursor-pointer"
          >
            Refresh tokens
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

export default RevealTokens;
