/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const baseUrl: string = import.meta.env.VITE_APP_API_URL;
  
export const axiosCalls = async (
  path: string,
  method: AxiosRequestConfig["method"],
  data: any = null
): Promise<any> => {

  const token: string | null = sessionStorage.getItem("access_token");
  try {
    const config: AxiosRequestConfig = {
      method,
      url: `${baseUrl}${path}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response: AxiosResponse = await axios(config);

    if (response) {
      return response.data;
    }
  } catch (error: any) {
    if (error.response.data.message === "access denied") {
      return { err: "Access denied, kindly logout and login again" };
    }
    return { err: `An error has occured, ${error.response.data.message}`, success: error.response.data.success };
  }
};
