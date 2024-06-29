import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetchKegiatan } from "../../../utils/axios";

const initialState = {
  dataKegiatan: [],
  data: [],
  singleDataKegiatan: [],

  message: "",
  filterWaktu: "",
  filterKategori: "",
  filterNamaKegiatan: "",
  searchKegiatan: "",

  edit: false,
  openModalNewActivity: false,
  isLoading: true,

  newKegiatan: {
    judulKegiatan: "",
    deskripsiKegiatan: "",
    waktuMulai: "",
    waktuSelesai: "",
    tanggalKegiatan: "",
  },
};
const kegiatanThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchKegiatan.get();

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const newKegiatanThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchKegiatan.post("", data);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const deleteKegiatanThunk = async (id, thunkAPI) => {
  try {
    const resp = await customFetchKegiatan.delete(`/${id}`);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const singleKegiatanThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchKegiatan.get(`/${data}`);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const updateKegiatanThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchKegiatan.patch(`/${data.id}`, data);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

export const getDataKegiatan = createAsyncThunk(
  "getAllKegiatan",
  kegiatanThunk,
);

export const newDataKegiatan = createAsyncThunk(
  "newKegiatan",
  newKegiatanThunk,
);

export const deleteDataKegiatan = createAsyncThunk(
  "deleteKegiatan",
  deleteKegiatanThunk,
);

export const getSingleDataKegiatan = createAsyncThunk(
  "getSingleKegiatan",
  singleKegiatanThunk,
);
export const updateDataKegiatan = createAsyncThunk(
  "updateKegiatan",
  updateKegiatanThunk,
);

export const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    //! Open Modal New Kegiatan
    setOpenModal(state, { payload }) {
      state.openModalNewActivity = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataKegiatan.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getDataKegiatan.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(getDataKegiatan.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const {
  setOpenModal,
  setNewActivity,
  setData,
  setEditKegiatan,
  setFilterKegiatan,
  setSearchKegiatan,
} = activitySlice.actions;
export default activitySlice.reducer;
