import axios from 'axios';

export const customFetchAnak = axios.create({
  baseURL: 'https://api.airtable.com/v0/appPtrtTsdUvnBk2e/child',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APP_AIRTABLE_SECRET_KEYS}`,
    'Content-Type': 'application/json',
  },
});
