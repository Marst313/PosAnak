import axios from 'axios';

const createAxiosInstance = (baseURL) => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_AIRTABLE_SECRET_KEYS}`,
      'Content-Type': 'application/json',
    },
  });
};

export const customFetchAnak = createAxiosInstance('https://api.airtable.com/v0/appPtrtTsdUvnBk2e/child');
export const customFetchKeluarga = createAxiosInstance('https://api.airtable.com/v0/appPtrtTsdUvnBk2e/family');
export const customFetchKegiatan = createAxiosInstance('https://api.airtable.com/v0/appPtrtTsdUvnBk2e/activity');
export const customFetchBerita = createAxiosInstance('https://api.airtable.com/v0/appPtrtTsdUvnBk2e/news');
export const customFetchUser = createAxiosInstance('https://api.airtable.com/v0/appPtrtTsdUvnBk2e/user ');
