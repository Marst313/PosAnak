import axios from 'axios';

const createAxiosInstance = (baseURL) => {
  return axios.create({
    baseURL,
    headers: {
      // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmIxMTE1YjU0NzA5MTY5M2EzOTA4MiIsImlhdCI6MTcxODQzOTY4NSwiZXhwIjoxNzE4Njk4ODg1fQ.SBXDX5mEslDVhqMJCZhyy8y9YE8jbGO7npW7CFAglqg`,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0',
    },
  });
};

export const customFetchAnak = createAxiosInstance('https://api.airtable.com/v0/appPtrtTsdUvnBk2e/child');
export const customFetchKeluarga = createAxiosInstance('https://api.airtable.com/v0/appPtrtTsdUvnBk2e/family');
export const customFetchKegiatan = createAxiosInstance('http://127.0.0.1:3000/api/v1/activity');
export const customFetchBerita = createAxiosInstance('https://api.airtable.com/v0/appPtrtTsdUvnBk2e/news');
export const customFetchUser = createAxiosInstance('https://api.airtable.com/v0/appPtrtTsdUvnBk2e/user ');
