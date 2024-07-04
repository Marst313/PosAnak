import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetchChat, customFetchKegiatan } from "../../utils/axios";

const initialState = {
  message: "",
  currentActive: 0,

  isLoading: true,
  idChat: 0,

  multiChat: [],
  allChat: [],
};

const generateNewChatThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchChat.post("", { message: data });

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const getCurrentUserChatThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchChat.post("/user", { id: data });

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const getSingleChatThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchChat.get(`/${data}`);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const generateNextChatThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchChat.post(`/${data.id}`, {
      message: data.message,
    });

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const deleteChatThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchChat.delete(`/${data}`);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

export const generateNewChat = createAsyncThunk(
  "newChat",
  generateNewChatThunk,
);

export const generateNextChat = createAsyncThunk(
  "nextChat",
  generateNextChatThunk,
);
export const getCurrentUserChat = createAsyncThunk(
  "currentUserChat",
  getCurrentUserChatThunk,
);
export const getSingleChat = createAsyncThunk("singleChat", getSingleChatThunk);
export const deleteSingleChat = createAsyncThunk("deleteChat", deleteChatThunk);

export const activitySlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    //! Open Modal New Kegiatan
    setOpenModal(state, { payload }) {
      state.openModalNewActivity = payload;
    },

    //! Chat Message
    setChat(state, { payload }) {
      state.message = payload;
    },

    //! Current Chat
    setCurrentChat(state, { payload }) {
      state.currentActive = payload;
    },

    setIdChat(state, { payload }) {
      state.idChat = payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // ! Create new chat
      .addCase(generateNewChat.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(generateNewChat.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.idChat = payload.id;
      })
      .addCase(generateNewChat.rejected, (state, action) => {
        state.isLoading = false;
      })

      // ! Create next
      .addCase(generateNextChat.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(generateNextChat.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(generateNextChat.rejected, (state, action) => {
        state.isLoading = false;
      })

      // ! Get Current user chat
      .addCase(getCurrentUserChat.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUserChat.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.allChat = payload.data;
      })
      .addCase(getCurrentUserChat.rejected, (state, action) => {
        state.isLoading = false;
      })

      // ! Get Single user chat
      .addCase(getSingleChat.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSingleChat.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.multiChat = JSON.parse(payload.data.multiChat);
      })
      .addCase(getSingleChat.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      // ! Delete Single user chat
      .addCase(deleteSingleChat.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteSingleChat.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(deleteSingleChat.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { setOpenModal, setChat, setCurrentChat, setIdChat } =
  activitySlice.actions;
export default activitySlice.reducer;
