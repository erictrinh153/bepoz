import axios from "axios";
import { loginFailure, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};