import { FaClipboard } from "react-icons/fa";
import MainContainer from "../../components/containers/MainContainer";
import { useEffect } from "react";
import { useState } from "react";

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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaG1sYWRhcmFtaWRlQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY1NjhmODI5YmY4NTc3MDAzZTVhYmMzZiIsInVzZXJuYW1lIjoiUmFobWxhZCBBcmFtaWRlIiwiZmlyc3RuYW1lIjoiNjU2OGY4MjhiZjg1NzcwMDNlNWFiYzNkIiwidHlwZSI6IkFDQ0VTU19UT0tFTiIsImlhdCI6MTcwMTY2NTQyMywiZXhwIjoxNzAxNjY5MDIzfQ.O4-9Bv4CNDFCBg02LSCQC8M26_H521hMN5FOLvVj7wI";

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
    <MainContainer activeTab="Settings">
      <div>
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
        </div>
      </div>
    </MainContainer>
  );
};

export default RevealTokens;
