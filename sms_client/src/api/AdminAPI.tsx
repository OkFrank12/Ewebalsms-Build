import axios from "axios";

// const apiURL: string = "http://localhost:1234/api";
const apiURL: string = "https://ewebal-sms-api.onrender.com/api";

export const adminRegisterAPI = async (data: any) => {
  try {
    return await axios.post(`${apiURL}/create-admin`, data).then((res: any) => {
      return res;
    });
  } catch (error) {
    return error;
  }
};

export const adminLoginAPI = async (data: any) => {
  try {
    return await axios
      .post(`${apiURL}/sign-in-admin`, data)
      .then((res: any) => {
        return res;
      });
  } catch (error) {
    return error;
  }
};

export const enterOTPAdminAPI = async (token: string, data: any) => {
  try {
    return await axios
      .post(`${apiURL}/${token}/verify-otp`, data)
      .then((res: any) => {
        return res;
      });
  } catch (error) {
    return error;
  }
};

export const verifyAdminAPI = async (token: string) => {
  try {
    return await axios
      .get(`${apiURL}/${token}/verify-admin`)
      .then((res: any) => {
        return res;
      });
  } catch (error) {
    return error;
  }
};

export const viewOneAdmin = async (_id: string) => {
  try {
    return await axios.get(`${apiURL}/${_id}/view-one-admin`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    return error;
  }
};

export const updateUserCredentialsAPI = async (userID: string, data: any) => {
  try {
    return await axios
      .patch(`${apiURL}/${userID}/update-user`, data)
      .then((res) => {
        return res;
      });
  } catch (error) {
    return error;
  }
};

export const blockUserAPI = async (userID: string) => {
  try {
    return await axios.patch(`${apiURL}/${userID}/block-user`).then((res) => {
      return res;
    });
  } catch (error) {
    return error;
  }
};

export const unBlockUserAPI = async (userID: string) => {
  try {
    return await axios.patch(`${apiURL}/${userID}/unblock-user`).then((res) => {
      return res;
    });
  } catch (error) {
    return error;
  }
};

export const creditUserWithUnitsAPI = async (
  userID: string,
  transID: string,
  adminID: string,
  data: any
) => {
  try {
    return await axios
      .patch(`${apiURL}/${userID}/${transID}/${adminID}/credit-user`, data)
      .then((res) => {
        return res;
      });
  } catch (error) {
    return error;
  }
};

export const declinedUserTransactionAPI = async (
  userID: string,
  transID: string,
  adminID: string
) => {
  try {
    return await axios
      .patch(`${apiURL}/${userID}/${transID}/${adminID}/declined-transaction`)
      .then((res) => {
        return res;
      });
  } catch (error) {
    return error;
  }
};

export const addWhitelistedSenderIDAPI = async (adminID: string, data: any) => {
  try {
    return await axios
      .patch(`${apiURL}/${adminID}/whitelist-user-senderID`, data)
      .then((res) => {
        return res;
      });
  } catch (error) {
    return error;
  }
};

export const manualCreditAUserWithUnitsAPI = async (
  adminID: string,
  data: any
) => {
  try {
    return await axios
      .patch(`${apiURL}/${adminID}/credit-a-user`, data)
      .then((res) => {
        return res;
      });
  } catch (error) {
    return error;
  }
};

export const updateAdminCredentialsAPI = async (adminID: string, data: any) => {
  try {
    return await axios
      .patch(`${apiURL}/${adminID}/update-admin-credentials`, data)
      .then((res) => {
        return res;
      });
  } catch (error) {
    return error;
  }
};

export const makeAnnouncementsAPI = async (adminID: string, data: any) => {
  try {
    return await axios
      .post(`${apiURL}/${adminID}/make-general-announcement`, data)
      .then((res) => {
        return res;
      });
  } catch (error) {
    return error;
  }
};

export const viewAnnouncementsAPI = async () => {
  try {
    return await axios
      .get(`${apiURL}/view-general-announcement`)
      .then((res) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};

export const clearAnnouncementsAPI = async (
  adminID: string,
  announcementID: string
) => {
  try {
    return await axios
      .delete(
        `${apiURL}/${adminID}/${announcementID}/clear-general-announcement`
      )
      .then((res) => {
        return res;
      });
  } catch (error) {
    return error;
  }
};
