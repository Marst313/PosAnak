import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  role: 'admin',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDataUser(state, { payload }) {
      console.log(payload);
      state.name = payload.name;
      state.email = payload.email;
      // state.role = payload.role;
    },
  },
});

export const { setDataUser } = userSlice.actions;
export default userSlice.reducer;
