import axios from "axios";

// const apiUrl: string = "http://localhost:1234/api";
const apiUrl: string = "https://ewebal-sms-api.onrender.com/api";

export const addContactsAPI = async (
  userID: string,
  catalogID: string,
  data: any
) => {
  try {
    return await axios
      .post(`${apiUrl}/${userID}/${catalogID}/add-contacts`, data)
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};

export const deleteContactsAPI = async (catalogID: string, index: string) => {
  try {
    return await axios
      .delete(`${apiUrl}/${catalogID}/${index}/delete-contact`)
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};
