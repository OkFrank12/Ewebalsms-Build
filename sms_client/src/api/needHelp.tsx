import axios from "axios";

// const apiUrl: string = "http://localhost:1234/api";
const apiUrl: string = "https://ewebal-sms-api.onrender.com/api";

export const sendNeedHelpMailAPI = async (data: any) => {
  try {
    return await axios.post(`${apiUrl}/need-help`, data).then((res) => {
      return res;
    });
  } catch (error: any) {
    return error;
  }
};
