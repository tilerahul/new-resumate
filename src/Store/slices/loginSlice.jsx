import { createSlice } from '@reduxjs/toolkit';

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const initialState = {
  isLoggedIn: !!user,
  user: user,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      // Clear user data from localStorage
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
