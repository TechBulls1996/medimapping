import axios from "axios";
import { setServiceHeaders } from "../helpers";
import { API_URL } from '../helpers/constant';

export const GetNetworks = async (params: object) => {
    try {
      const config = {
        ...setServiceHeaders(),
        params,
      };
      const res = await axios.get(`${API_URL}/user/network`, config);
      return res.data;
    } catch (error: any) {
      return error.response.data;
    }
  };