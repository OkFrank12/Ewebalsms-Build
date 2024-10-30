import axios from "axios";

const apiURL: string = "https://ewebal-sms-api.onrender.com/api";
// const apiURL: string = "http://localhost:1234/api";

export const createDraftMessageAPI = async (userID: string, data: any) => {
  try {
    return await axios
      .post(`${apiURL}/${userID}/draft-message`, data)
      .then((res: any) => {
        return res.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const populateDraftsHistory = async (userID: string) => {
  try {
    return await axios
      .get(`${apiURL}/${userID}/populate-drafts`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const deleteDrafts = async (userID: string, draftsID: string) => {
  try {
    return await axios
      .delete(`${apiURL}/${userID}/${draftsID}/delete-draft`)
      .then((res: any) => {
        return res.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const viewOneDraftsAPI = async (draftsID: string) => {
  try {
    return await axios
      .get(`${apiURL}/${draftsID}/view-one-draft`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const sendDraftMessagesAPI = async (
  userID: string,
  draftID: string,
  data: any
) => {
  try {
    return await axios
      .post(`${apiURL}/${userID}/${draftID}/send-draft-sms`, data)
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};

export const viewAllDraftsAPI = async () => {
  try {
    return await axios.get(`${apiURL}/view-all-drafts`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    return error;
  }
};
