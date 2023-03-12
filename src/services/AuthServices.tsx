import axios from "axios";

export const UserLogin = async (params: object) => {
  try {
    const res = await axios.post("/api/auth/login", params);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const UserRegister = async (params: object) => {
  try {
    const res = await axios.post("/api/auth/register", params);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};
