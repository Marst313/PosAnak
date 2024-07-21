import axios from "axios";
import Cookies from "js-cookie";

const createAxiosInstance = (path, isExternal = false) => {
  const baseURL = isExternal
    ? path
    : `${import.meta.env.VITE_BASE_URL}/${path}`;
  const jwt = Cookies.get("jwt");

  const headers = {
    "Content-Type": "application/json",
  };

  if (jwt) {
    headers["Authorization"] = `Bearer ${jwt}`;
  }

  return axios.create({
    baseURL,
    headers,
  });
};

const calculateAxiosInstance = () => {
  return axios.create({
    baseURL: "https://absolute-lamprey-posanak-41bfd0ab.koyeb.app/",
  });
};

export const customFetchCalculate = calculateAxiosInstance();
export const customFetchAnak = createAxiosInstance("kid");
export const customFetchKeluarga = createAxiosInstance("family");
export const customFetchKegiatan = createAxiosInstance("activity");
export const customFetchBerita = createAxiosInstance("news");
export const customFetchLogin = createAxiosInstance("user/login");
export const customFetchRegister = createAxiosInstance("user/register");
export const customFetchUser = createAxiosInstance("user");
export const customFetchChat = createAxiosInstance("chat");
