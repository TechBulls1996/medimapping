import axios from "axios";
const API_URL = process.env.API_URL;

export const UserLogin = async (params: object) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, params);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const UserRegister = async (params: object) => {
  try {
    const res = await axios.post(`${API_URL}/auth/register`, params);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};
