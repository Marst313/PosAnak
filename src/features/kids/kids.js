import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { customFetchAnak } from '../../utils/axios';

const initialState = {
  dataAnak: [],
  singleDataAnak: [],
  isLoading: true,
  message: '',
  graphShow: false,
  edit: false,
  searchAnak: '',
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

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const deleteAnakThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchAnak.delete(data);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

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
};

export const getDataAnak = createAsyncThunk('getAllAnak', anakThunk);
export const getSingleDataAnak = createAsyncThunk('getSingleAnak', singleAnakThunk);
export const newDataAnak = createAsyncThunk('newAnak', newAnakThunk);
export const deleteDataAnak = createAsyncThunk('deleteAnak', deleteAnakThunk);
export const updateDataAnak = createAsyncThunk('updateAnak', updateAnakThunk);

export const kidSlice = createSlice({
  name: 'kids',
  initialState,
  reducers: {
    setDataAnak(state, { payload }) {},
    setGraph(state, { payload }) {
      state.graphShow = payload;
    },
    setEditAnak(state, { payload }) {
      state.edit = payload;
    },
    setSearchAnak(state, { payload }) {
      state.searchAnak = payload.toLowerCase();
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
      })
      .addCase(deleteDataAnak.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDataAnak.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.message = 'Success delete data.';
      })
      .addCase(deleteDataAnak.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getSingleDataAnak.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleDataAnak.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.singleDataAnak = payload;

        state.message = 'Success get single data.';
      })
      .addCase(getSingleDataAnak.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateDataAnak.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDataAnak.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.singleDataAnak = payload;

        state.message = 'Success updating data.';
      })
      .addCase(updateDataAnak.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setDataAnak, setGraph, setEditAnak, setSearchAnak } = kidSlice.actions;
export default kidSlice.reducer;
