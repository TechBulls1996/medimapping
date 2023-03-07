import axios from "axios";

export const UserLogin = async (params: object) => {
  try {
    const res = await axios.post("/auth/login", params);
    return res.data;
  } catch (error) {
    console.log("Error: ", error);
    return false;
  }
};
