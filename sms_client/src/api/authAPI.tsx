import axios from "axios";

const apiUrl: string = "https://ewebal-sms-api.onrender.com/api";
// const apiUrl: string = "http://localhost:1234/api";

export const registerUserAPI = async (data: any) => {
  try {
    return await axios.post(`${apiUrl}/create-user`, data).then((res) => {
      return res;
    });
  } catch (error: any) {
    return error;
  }
};

export const loginUserAPI = async (data: any) => {
  try {
    return await axios.post(`${apiUrl}/sign-in-user`, data).then((res) => {
      return res;
    });
  } catch (error: any) {
    return error;
  }
};

export const renderLoginStatusFalseAPI = async (userID: string) => {
  try {
    return await axios
      .patch(`${apiUrl}/${userID}/login-status-false`)
      .then((res) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};

export const verifyUserAPI = async (token: string) => {
  try {
    return await axios.get(`${apiUrl}/${token}/verify-user`).then((res) => {
      return res;
    });
  } catch (error: any) {
    return error;
  }
};

export const viewOneUserAPI = async (userID: string) => {
  try {
    return await axios.get(`${apiUrl}/${userID}/view-one-user`).then((res) => {
      return res.data.data;
    });
  } catch (error: any) {
    return error;
  }
};

export const resetUserPasswordAPI = async (data: any) => {
  try {
    return await axios
      .patch(`${apiUrl}/reset-user-password`, data)
      .then((res) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};

export const changeUserPasswordAPI = async (token: string, data: any) => {
  try {
    return await axios
      .patch(`${apiUrl}/${token}/change-user-password`, data)
      .then((res) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};

export const viewAllUsersAPI = async () => {
  try {
    return await axios.get(`${apiUrl}/view-all-users`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    return error;
  }
};

export const updatePersonalInfoAPI = async (userID: string, data: any) => {
  try {
    return await axios
      .patch(`${apiUrl}/${userID}/update-personal-info`, data)
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};
