import axios from "axios";

const apiUrl: string = `https://ewebal-sms-api.onrender.com/api`;
// const apiUrl: string = "http://localhost:1234/api";

export const submitTransferDetailsAPI = async (userID: string, data: any) => {
  try {
    const config: any = {
      "Content-Type": "multipart/form-data",
    };
    return await axios
      .post(`${apiUrl}/${userID}/submit-transfer-details`, data, config)
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};

export const deleteTransferDetails = async (
  userID: string,
  transferID: string
) => {
  try {
    return await axios
      .delete(`${apiUrl}/${userID}/${transferID}/delete-details`)
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};

export const populateTransferDetailsAPI = async (userID: string) => {
  try {
    return await axios
      .get(`${apiUrl}/${userID}/user-transfer-details`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const buySmsWithPayStackAPI = async (
  email: string,
  amount: any,
  proposedUnits: any
) => {
  try {
    return await axios
      .post(`${apiUrl}/paystack-payment`, { email, amount, proposedUnits })
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const verifyPayStackPaymentAPI = async (
  reference: string,
  userID: string,
  data: any
) => {
  try {
    return await axios
      .post(`${apiUrl}/transaction/verify/${reference}/${userID}`, data)
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};

export const viewAllTransactionsAPI = async () => {
  try {
    return await axios
      .get(`${apiUrl}/view-all-transactions`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    return error;
  }
};
