import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { customFetchAnak, customFetchKeluarga } from '../../utils/axios';

const initialState = {
  dataKeluarga: [],
  singleDataKeluarga: [],
  isLoading: true,
  message: '',
  edit: false,
};
const keluargaThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchKeluarga.get();

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const newKeluargaThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchKeluarga.post('', data);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
const deleteKeluargaThunk = async (id, thunkAPI) => {
  try {
    const resp = await customFetchAnak.delete(id);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

/*
const singleAnakThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchAnak.get(`/${data}`);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const updateAnakThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchAnak.patch('', data);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
}; */

export const getDataKeluarga = createAsyncThunk('getAllKeluarga', keluargaThunk);
export const newDataKeluarga = createAsyncThunk('newKeluarga', newKeluargaThunk);
export const deleteDataKeluarga = createAsyncThunk('deleteKeluarga', deleteKeluargaThunk);
/* 
export const getSingleDataAnak = createAsyncThunk('getSingleAnak', singleAnakThunk);
export const updateDataAnak = createAsyncThunk('updateAnak', updateAnakThunk); */

export const familySlice = createSlice({
  name: 'family',
  initialState,
  reducers: {
    setGraph(state, { payload }) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataKeluarga.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataKeluarga.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dataKeluarga = payload;
      })
      .addCase(getDataKeluarga.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(newDataKeluarga.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newDataKeluarga.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dataKeluarga = payload;
        state.message = 'Success created new keluarga.';
      })
      .addCase(newDataKeluarga.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteDataKeluarga.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDataKeluarga.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.message = 'Success deleted keluarga.';
      })
      .addCase(deleteDataKeluarga.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setGraph } = familySlice.actions;
export default familySlice.reducer;
