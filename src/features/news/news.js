import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { customFetchBerita } from '../../utils/axios';

const initialState = {
  data: [],
  singleDataBerita: [],
  dataBerita: [],

  edit: false,
  isLoading: true,

  judul: '',
  searchBerita: '',
};

const newBeritaThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchBerita.post('', data);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const beritaThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchBerita.get('');

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const singleBeritaThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchBerita.get(`/${data}`);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const deleteBeritaThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchBerita.delete(`/${data}`);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const updateBeritaThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchBerita.patch(`/${data.id}`, data);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

export const getDataBerita = createAsyncThunk('dataBerita', beritaThunk);
export const getSingleDataBerita = createAsyncThunk('singleBerita', singleBeritaThunk);
export const newDataBerita = createAsyncThunk('newBerita', newBeritaThunk);
export const deleteDataBerita = createAsyncThunk('deleteBerita', deleteBeritaThunk);
export const updateDataBerita = createAsyncThunk('updateBerita', updateBeritaThunk);

const newSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setDataNews(state, { payload }) {},
    setSearchBerita(state, { payload }) {
      state.searchBerita = payload.toLowerCase();
    },
    setEditBerita(state, { payload }) {
      state.edit = payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // ! Get All Data Berita
      .addCase(getDataBerita.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataBerita.fulfilled, (state, { payload }) => {
        payload.data.sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime));

        state.data = payload.data;
        state.isLoading = false;
      })
      .addCase(getDataBerita.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      // ! Create New Data Berita
      .addCase(newDataBerita.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newDataBerita.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(newDataBerita.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      // ! Get Single Data Berita
      .addCase(getSingleDataBerita.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleDataBerita.fulfilled, (state, { payload }) => {
        state.singleDataBerita = payload.data;
        state.isLoading = false;
      })
      .addCase(getSingleDataBerita.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(deleteDataBerita.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDataBerita.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(deleteDataBerita.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(updateDataBerita.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDataBerita.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(updateDataBerita.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { setDataUser, setSearchBerita, setEditBerita } = newSlice.actions;
export default newSlice.reducer;
