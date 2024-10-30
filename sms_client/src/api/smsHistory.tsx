import axios from "axios";

// const apiURL: string = "http://localhost:1234/api";
const apiURL: string = "https://ewebal-sms-api.onrender.com/api";

export const createMessageHistoryAPI = async (userID: string, data: any) => {
  try {
    return await axios
      .post(`${apiURL}/${userID}/send-bulk-sms`, data)
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};

export const populateMessageAPI = async (userID: string) => {
  try {
    return await axios
      .get(`${apiURL}/${userID}/populate-sms-history`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const deleteSmsMessage = async (userID: string, smsID: string) => {
  try {
    return await axios
      .delete(`${apiURL}/${userID}/${smsID}/delete-sms-message`)
      .then((res: any) => {
        return res.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const viewOneSmsMessage = async (smsID: string) => {
  try {
    return await axios
      .get(`${apiURL}/${smsID}/view-one-sms`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const viewAllSmsMessageAPI = async () => {
  try {
    return await axios
      .get(`${apiURL}/view-all-sms-messages`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    return error;
  }
};
