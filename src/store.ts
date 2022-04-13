import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import * as api from "./Apis/user";
import modalReducer from "./features/Modal/modalSlice";
import { signUpReducer } from "./features/Signup/signUpSlice";
import { loginReducer } from "./features/login/loginSlice";
import { userReducer } from "./features/User/userSlice";

const extraArgument = {
  client: axios,
  api,
};
export type ThunkExraArguments = typeof extraArgument;
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    signUp: signUpReducer,
    login: loginReducer,
    user: userReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument,
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
