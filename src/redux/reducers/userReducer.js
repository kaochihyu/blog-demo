import { createSlice } from '@reduxjs/toolkit';
import { loginAPI, registerAPI, getMe } from '../../WebAPI';
import { setAuthToken } from '../../utils';

export const userReducer = createSlice({
  name: 'users',
  initialState: {
    user: null,
    isLoadingUser: false,
    errorMessage: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoadingUser: (state, action) => {
      state.isLoadingUser = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  setUser,
  setIsLoadingUser,
  setErrorMessage,
} = userReducer.actions;

export const register = (nickname, username, password) => (dispatch) => {
  return registerAPI(nickname, username, password).then((res) => {
    if (res.ok === 0) {
      dispatch(setErrorMessage(res.message));
      return;
    }
    setAuthToken(res.token);
    return getMe().then((res) => {
      if (res.ok !== 1) {
        setAuthToken(null);
        dispatch(setErrorMessage(res.toString()));
        return;
      }
      dispatch(setUser(res.data));
      return res;
    });
  });
};

export const login = (username, password) => (dispatch) => {
  return loginAPI(username, password).then((res) => {
    if (res.ok === 0) {
      dispatch(setErrorMessage(res.message));
      return;
    }
    setAuthToken(res.token);
    return getMe().then((res) => {
      if (res.ok !== 1) {
        setAuthToken(null);
        dispatch(setErrorMessage(res.toString()));
        return;
      }
      dispatch(setUser(res.data));
      return res;
    });
  });
};

export const getUser = () => (dispatch) => {
  dispatch(setIsLoadingUser(true));
  getMe().then((res) => {
    if (res.ok) {
      dispatch(setUser(res.data));
      dispatch(setIsLoadingUser(false));
    }
  });
};

export default userReducer.reducer;
