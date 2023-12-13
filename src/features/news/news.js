import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { customFetchBerita } from '../../utils/axios';

const initialState = [
  {
    judul: '',
    data: '',
    edit: false,
    isLoading: true,
  },
];

const newBeritaThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchBerita.post('', data);

    console.log('berhasil');
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
export const newDataBerita = createAsyncThunk('newAnak', newBeritaThunk);

const newSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setDataNews(state, { payload }) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(newDataBerita.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newDataBerita.fullfiled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(newDataBerita.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { setDataUser } = newSlice.actions;
export default newSlice.reducer;
