import axios from "axios";
import { setServiceHeaders } from "../helpers";

export const SendRequest = async (params: object) => {
  try {
    const res = await axios.post("/api/request", params, setServiceHeaders());
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const GetRequest = async (params: object) => {
  try {
    const config = {
      ...setServiceHeaders(),
      params,
    };
    const res = await axios.get("/api/request", config);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const createLike = async (params?: object) => {
  try {
    const res = await axios.post(
      "/api/request/like/create",
      params,
      setServiceHeaders()
    );
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};