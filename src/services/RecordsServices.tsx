import axios from "axios";
import { setServiceHeaders } from "../helpers";
import { API_URL } from "../helpers/constant";


export const AddRecords = async (params: object) => {
    try {
      const res = await axios.post(`${API_URL}/records/add`, params, setServiceHeaders());
      return res.data;
    } catch (error: any) {
      return error.response.data;
    }
  };