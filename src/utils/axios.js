import axios from 'axios';
import Cookies from 'js-cookie';

const createAxiosInstance = (path, isExternal = false) => {
  const baseURL = isExternal ? path : `${import.meta.env.VITE_BASE_URL}/${path}`;

  const jwt = Cookies.get('jwt');

  if (jwt) {
    return axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    });
  } else {
    return axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

export const customFetchAnak = createAxiosInstance('kid');
export const customFetchKeluarga = createAxiosInstance('family');
export const customFetchKegiatan = createAxiosInstance('activity');
export const customFetchBerita = createAxiosInstance('news');
export const customFetchLogin = createAxiosInstance('user/login');
export const customFetchRegister = createAxiosInstance('user/register');
export const customFetchUser = createAxiosInstance('user');
