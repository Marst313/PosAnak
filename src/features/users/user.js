import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    name: '',
    email: '',
    role: '',
  },
];

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDataUser(state, { payload }) {
      state.name = payload.name;
      state.email = payload.email;
      state.role = payload.email;
    },
  },
});

export const { setDataUser } = userSlice.actions;
export default userSlice.reducer;
