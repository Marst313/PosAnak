import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { customFetchKegiatan } from '../../utils/axios';

const initialState = {
  dataKegiatan: [],
  data: [],
  singleDataKegiatan: [],

  message: '',
  filterWaktu: '',
  filterKategori: '',
  filterNamaKegiatan: '',
  searchKegiatan: '',

  edit: false,
  openModalNewActivity: false,
  isLoading: true,

  newKegiatan: {
    judulKegiatan: '',
    deskripsiKegiatan: '',
    waktuMulai: '',
    waktuSelesai: '',
    tanggalKegiatan: '',
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
    const resp = await customFetchKegiatan.post('', data);

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

export const getDataKegiatan = createAsyncThunk('getAllKegiatan', kegiatanThunk);

export const newDataKegiatan = createAsyncThunk('newKegiatan', newKegiatanThunk);

export const deleteDataKegiatan = createAsyncThunk('deleteKegiatan', deleteKegiatanThunk);

export const getSingleDataKegiatan = createAsyncThunk('getSingleKegiatan', singleKegiatanThunk);
export const updateDataKegiatan = createAsyncThunk('updateKegiatan', updateKegiatanThunk);

export const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    //! Open Modal New Kegiatan
    setOpenModal(state, { payload }) {
      state.openModalNewActivity = payload;
    },

    // ! State activity edir or new activity
    setNewActivity(state, { payload }) {
      state.newKegiatan = payload;
    },

    //! Set Data Kegiatan
    setData(state, { payload }) {
      state.data = payload;
    },

    //! Open edit kegiatan
    setEditKegiatan(state, { payload }) {
      state.edit = payload;
    },

    // ! Filtering Data Kegiatan
    setFilterKegiatan(state, { payload }) {
      state.filterKategori = payload.kategori.toLowerCase();
      state.filterNamaKegiatan = payload.namaKegiatan.toLowerCase();
      state.filterWaktu = payload.waktu.toLowerCase();
    },

    // ! Searching Data Kegiatan
    setSearchKegiatan(state, { payload }) {
      state.searchKegiatan = payload.toLowerCase();
    },
  },
  extraReducers: (builder) => {
    builder

      // ! Get all data activity
      .addCase(getDataKegiatan.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getDataKegiatan.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        const sortedData = payload.data.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          // Membandingkan dua objek Date
          return dateA - dateB;
        });

        state.dataKegiatan = sortedData;
      })
      .addCase(getDataKegiatan.rejected, (state, action) => {
        state.isLoading = false;
      })

      // ! Create New Data Activity
      .addCase(newDataKegiatan.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(newDataKegiatan.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.message = 'Success created new kegiatan.';
      })
      .addCase(newDataKegiatan.rejected, (state, action) => {
        state.isLoading = false;
      })

      // ! Get Single Data Activity
      .addCase(getSingleDataKegiatan.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSingleDataKegiatan.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.singleDataKegiatan = payload.data;
        state.message = 'Success created new kegiatan.';
      })
      .addCase(getSingleDataKegiatan.rejected, (state, action) => {
        state.isLoading = false;
      })

      // ! Update Data Activity
      .addCase(updateDataKegiatan.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateDataKegiatan.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.message = 'Success update new kegiatan.';
      })
      .addCase(updateDataKegiatan.rejected, (state, action) => {
        state.isLoading = false;
      })

      // ! Delete Data Activity
      .addCase(deleteDataKegiatan.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteDataKegiatan.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.message = 'Success deleted kegiatan.';
      })
      .addCase(deleteDataKegiatan.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { setOpenModal, setNewActivity, setData, setEditKegiatan, setFilterKegiatan, setSearchKegiatan } = activitySlice.actions;
export default activitySlice.reducer;
