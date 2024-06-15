import axios from 'axios';

const createAxiosInstance = (baseURL) => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmIxMTE1YjU0NzA5MTY5M2EzOTA4MiIsImlhdCI6MTcxODQ2MTcyNywiZXhwIjoxNzE4NzIwOTI3fQ.ECmJE84GUpp2A64O62qt9yroTB4nx9LnhiFJf9x2br8`,
      'Content-Type': 'application/json',
    },
  });
};

export const customFetchAnak = createAxiosInstance('http://127.0.0.1:3000/api/v1/kid');
export const customFetchKeluarga = createAxiosInstance('http://127.0.0.1:3000/api/v1/family');
export const customFetchKegiatan = createAxiosInstance('http://127.0.0.1:3000/api/v1/activity');
export const customFetchBerita = createAxiosInstance('http://127.0.0.1:3000/api/v1/news');
export const customFetchUser = createAxiosInstance('https://api.airtable.com/v0/appPtrtTsdUvnBk2e/user ');
