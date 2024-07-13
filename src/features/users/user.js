import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  customFetchLogin,
  customFetchRegister,
  customFetchUser,
} from "../../utils/axios";
import Cookies from "js-cookie";

const initialState = {
  allUser: [],
  singleUser: [],
  allUserNikKids: [],

  role: "",
  token: "",
  uuid: "",
  jwt: "",

  profile: {
    name: "",
    email: "",
    photo: "",
  },

  message: {
    open: false,
    text: "",
    status: "success",
  },

  editProfile: false,
  openPopUp: false,
};

const updateThunkProfile = async (data, thunkAPI) => {
  try {
    const resp = await customFetchUser.post("/updateMe", data);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const loginThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchLogin.post("", data);

    if (resp.data.token) {
      // Save the token
      Cookies.set("jwt", resp.data.token, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });

      ``;
    }

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const userThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchUser.get(`/${data}`);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const registerThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchRegister.post(`/`, {
      name: data.name,
      email: data.email,
      password: data.password,
    });

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

export const loginUser = createAsyncThunk("loginUser", loginThunk);
export const registerUser = createAsyncThunk("registerUser", registerThunk);

export const getSingleUser = createAsyncThunk("singleUser", userThunk);
export const updateUserProfile = createAsyncThunk(
  "updateUserProfile",
  updateThunkProfile,
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDataUser(state, { payload }) {
      state.email = payload.email;
      state.token = payload.token;
      state.uuid = payload.uuid;
    },
    setSingleUser(state, { payload }) {
      state.singleUser = payload;
    },
    setToken(state, { payload }) {
      state.jwt = payload.jwt;
      state.uuid = payload.id;
    },
    setOpenPopUp(state, { payload }) {
      state.openPopUp = payload;
    },

    setMessage(state, { payload }) {
      state.message.open = payload.open;
      state.message.status = payload.status;
      state.message.text = payload.text;
    },

    setJwt(state, { payload }) {
      state.jwt = payload;
    },

    setEditProfiles(state, { payload }) {
      state.editProfile = payload;
    },

    setMessageOpenProfile(state, { payload }) {
      state.message.open = payload;
    },
  },
  extraReducers: (builder) => {
    builder

      //! Get Single User
      .addCase(getSingleUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.role = payload.data.role;
        state.uuid = payload.data._id;

        state.profile.email = payload.data.email;
        state.profile.name = payload.data.name;
        state.profile.photo = payload.data.photo;

        state.allUserNikKids = payload.data.nikKids;
      })
      .addCase(getSingleUser.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      //! REGISTER User
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      //! LOGIN
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.profile.email = payload.data.user.email;
        state.profile.name = payload.data.user.name;
        state.profile.photo = payload.data.user.photo;

        state.role = payload.data.user.role;
        state.jwt = payload.data.user.token;
        state.uuid = payload.data.user._id;

        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;

        state.message.open = true;
        state.message.status = "error";
        state.message.text = payload;
      })

      // ! Update Profiles
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.message.status = "success";
        state.message.open = true;
        state.message.text = "Berhasil update profile!";
      })
      .addCase(updateUserProfile.rejected, (state, { payload }) => {
        state.isLoading = false;

        state.message.status = "error";
        state.message.open = true;
        state.message.text = payload;
      });
  },
});

export const {
  setDataUser,
  setSingleUser,
  setToken,
  setOpenPopUp,
  setMessage,
  setJwt,
  setEditProfiles,
  setMessageOpenProfile,
} = userSlice.actions;
export default userSlice.reducer;
