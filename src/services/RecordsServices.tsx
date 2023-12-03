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

  export const GetRecords = async (params: object) => {
    try {
      const config = {
        ...setServiceHeaders(),
        params,
      };
      const res = await axios.get(`${API_URL}/records`, config);
      return res.data;
    } catch (error: any) {
      return error.response.data;
    }
  };  

  export const GetRecord = async (recordId: string | undefined) => {
    try {
      const config = {
        ...setServiceHeaders(),
      };
      const res = await axios.get(`${API_URL}/records/${recordId}`, config);
      return res.data;
    } catch (error: any) {
      return error.response.data;
    }
  };  