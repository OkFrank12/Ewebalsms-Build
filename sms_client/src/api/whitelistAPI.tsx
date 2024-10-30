import axios from "axios";

// const apiUrl: string = `http://localhost:1234/api`;
const apiUrl: string = `https://ewebal-sms-api.onrender.com/api`;

export const sourceWhitelistAPI = async (userID: string, senderName: any) => {
  try {
    return await axios
      .post(`${apiUrl}/${userID}/source-whitelist`, senderName)
      .then((res: any) => {
        return res.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const ipWhitelistAPI = async (userID: string, ip: any) => {
  try {
    return await axios
      .post(`${apiUrl}/${userID}/ip-whitelist`, ip)
      .then((res: any) => {
        return res.data;
      });
  } catch (error: any) {
    return error;
  }
};
