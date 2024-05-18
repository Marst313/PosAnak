import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { customFetchUser } from '../../utils/axios';

const initialState = {
  name: '',
  email: '',
  role: '',
  token: '',
  uuid: '',
  allUser: [],
  singleUser: [],
};

const userThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchUser.get();

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const newUserThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchUser.post('', data);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const singleUserThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchUser.get(`/${data}`);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const updateUserThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchUser.patch('', data);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

export const getAllDataUser = createAsyncThunk('allUser', userThunk);
export const getSingleDataUser = createAsyncThunk('singleUser', singleUserThunk);
export const newDataUser = createAsyncThunk('newUser', newUserThunk);
export const updateDataUser = createAsyncThunk('updateUser', updateUserThunk);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDataUser(state, { payload }) {
      if (payload.email === 'admin@gmail.com') {
        state.role = 'admin';
      } else {
        state.role = 'user';
      }

      state.email = payload.email;
      state.token = payload.token;
      state.uuid = payload.uuid;
    },
    setSingleUser(state, { payload }) {
      state.singleUser = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(newDataUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newDataUser.fulfilled, (state, { payload }) => {
        payload.records.sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime));

        state.isLoading = false;
      })
      .addCase(newDataUser.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(getAllDataUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllDataUser.fulfilled, (state, { payload }) => {
        state.allUser = payload;
        state.isLoading = false;
      })
      .addCase(getAllDataUser.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { setDataUser, setSingleUser } = userSlice.actions;
export default userSlice.reducer;
