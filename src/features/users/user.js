import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  role: 'admin',
  token: '',
  uuid: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDataUser(state, { payload }) {
      state.email = payload.email;
      state.token = payload.token;
      state.uuid = payload.uuid;
    },
  },
});

export const { setDataUser } = userSlice.actions;
export default userSlice.reducer;
