import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetchAnak } from "../../utils/axios";

const initialState = {
  dataAnak: [],
  singleDataAnak: [],
  allDataAnakNik: [],
  dataPertumbuhan: [],

  tambahDataAnak: false,
  isLoading: true,
  graphShow: false,
  edit: false,

  searchAnak: "",

  newAnak: {
    nama: "",
    nik: "",
    namaIbu: "",
    tanggalLahir: "",
  },

  isKidsThere: false,

  kidsBio: {
    nama: "",
    nik: 0,
    namaIbu: "",
  },

  message: {
    open: false,
    text: "",
    status: "success",
  },
};

const connectAnakThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchAnak.post(`/connect`, data);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

const getNikAnakThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetchAnak.post(`/nik`, { nikKids: data });
    console.log(data);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
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
    const resp = await customFetchAnak.post("", data);

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
    const resp = await customFetchAnak.patch(`/${data.id}`, data);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

export const connectDataAnak = createAsyncThunk(
  "connectDataAnak",
  connectAnakThunk,
);

export const getSingleDataAnak = createAsyncThunk(
  "getSingleAnak",
  singleAnakThunk,
);

export const newDataAnak = createAsyncThunk("newAnak", newAnakThunk);
export const deleteDataAnak = createAsyncThunk("deleteAnak", deleteAnakThunk);
export const updateDataAnak = createAsyncThunk("updateAnak", updateAnakThunk);
export const getDataAnak = createAsyncThunk("getAllAnak", anakThunk);
export const getNikDataAnak = createAsyncThunk("getNikAnak", getNikAnakThunk);

export const kidSlice = createSlice({
  name: "kids",
  initialState,
  reducers: {
    // ? Setting new anak to redux
    setNewAnak(state, { payload }) {
      state.newAnak.nama = payload.nama;
      state.newAnak.namaIbu = payload.namaIbu;
      state.newAnak.nik = payload.nik;
      state.newAnak.tanggalLahir = payload.tanggalLahir;
    },

    // ? Setting new anak to redux
    setDataPertumbuhan(state, { payload }) {
      state.dataPertumbuhan = payload;
    },

    // ? Change Status is kids There
    setIsKidThere(state, { payload }) {
      state.isKidsThere = payload;
    },

    // ? Open Modal Tambah Data Anak
    setTambahDataAnak(state, { payload }) {
      state.tambahDataAnak = payload;
    },

    // ? Setting graphic true or false
    setGraph(state, { payload }) {
      state.graphShow = payload;
    },

    // ? Setting edit true or false
    setEditAnak(state, { payload }) {
      state.edit = payload;
    },

    // ? Search data anak
    setSearchAnak(state, { payload }) {
      state.searchAnak = payload.toLowerCase();
    },

    // ? open the open pop up
    setMessageOpen(state, { payload }) {
      state.message.open = payload;
    },
  },
  extraReducers: (builder) => {
    //! Getting All Data Anak
    builder
      .addCase(getDataAnak.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataAnak.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.dataAnak = payload.data;
      })
      .addCase(getDataAnak.rejected, (state) => {
        state.isLoading = false;
      })

      //! Creating New Data Anak
      .addCase(newDataAnak.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newDataAnak.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.message.open = true;
        state.message.text = "Berhasil membuat data baru.";
        state.message.status = "success";
      })
      .addCase(newDataAnak.rejected, (state, { payload }) => {
        state.isLoading = false;

        state.message.open = true;
        state.message.text = payload;
        state.message.status = "error";
      })

      //! Delete Data Anak
      .addCase(deleteDataAnak.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDataAnak.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.message.text = "Berhasil menghapus data anak.";
        state.message.open = true;
        state.message.status = "error";
      })
      .addCase(deleteDataAnak.rejected, (state) => {
        state.isLoading = false;
      })

      //! Get Single Data Anak
      .addCase(getSingleDataAnak.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleDataAnak.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.singleDataAnak = payload.data;
        state.message.open = false;
      })
      .addCase(getSingleDataAnak.rejected, (state) => {
        state.isLoading = false;
      })

      //! Update Data Anak
      .addCase(updateDataAnak.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDataAnak.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.singleDataAnak = payload;

        state.message.text = "Berhasil update data anak.";
        state.message.open = true;
        state.message.status = "success";
      })
      .addCase(updateDataAnak.rejected, (state) => {
        state.isLoading = false;
      })

      //! Connect Data Anak
      .addCase(connectDataAnak.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(connectDataAnak.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isKidsThere = true;
      })
      .addCase(connectDataAnak.rejected, (state) => {
        state.isLoading = false;
      })

      //! Nik Data Anak
      .addCase(getNikDataAnak.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNikDataAnak.fulfilled, (state, { payload }) => {
        state.allDataAnakNik = payload.data;
        state.isLoading = false;
        state.isKidsThere = true;
      })
      .addCase(getNikDataAnak.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  setNewAnak,
  setDataPertumbuhan,
  setTambahDataAnak,
  setGraph,
  setEditAnak,
  setSearchAnak,
  setMessageOpen,
  setIsKidThere,
} = kidSlice.actions;
export default kidSlice.reducer;
