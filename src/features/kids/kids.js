import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { customFetchAnak } from '../../utils/axios';

const initialState = {
  dataAnak: [],
  nama: '',
  nik: '',
  tanggalLahir: '',
  namaIbu: '',
  isLoading: true,
  message: '',
};
const anakThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchAnak.get();

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const newAnakThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchAnak.post('', data);
    console.log(resp);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

export const getDataAnak = createAsyncThunk('getDataAnak', anakThunk);
export const newDataAnak = createAsyncThunk('newDataAnak', newAnakThunk);

export const kidSlice = createSlice({
  name: 'kids',
  initialState,
  reducers: {
    setDataAnak(state, { payload }) {
      /*      state.nama = payload.nama;
      state.nik = payload.nik;
      state.tanggalLahir = payload.tanggalLahir;
      state.namaIbu = payload.namaIbu; */
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAnak.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataAnak.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dataAnak = payload;
      })
      .addCase(getDataAnak.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(newDataAnak.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newDataAnak.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.message = 'Success created new data.';
      })
      .addCase(newDataAnak.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setDataAnak } = kidSlice.actions;
export default kidSlice.reducer;
