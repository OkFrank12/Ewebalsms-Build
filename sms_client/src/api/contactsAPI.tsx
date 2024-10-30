import axios from "axios";

// const apiUrl: string = "http://localhost:1234/api";
const apiUrl: string = "https://ewebal-sms-api.onrender.com/api";

export const createCatalog = async (userID: string, data: any) => {
  try {
    return await axios
      .post(`${apiUrl}/${userID}/create-catalog`, data)
      .then((res: any) => {
        return res.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const findOneCatalogAPI = async (catalogID: string) => {
  try {
    return await axios
      .get(`${apiUrl}/${catalogID}/find-one-catalog`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const populateCatalog = async (userID: string) => {
  try {
    return await axios
      .get(`${apiUrl}/${userID}/populate-catalogs`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const deleteCatalog = async (userID: string, catalogID: string) => {
  try {
    return await axios
      .delete(`${apiUrl}/${userID}/${catalogID}/delete-catalog`)
      .then((res: any) => {
        return res.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const editCatalog = async (
  userID: string,
  catalogID: string,
  data: any
) => {
  try {
    return await axios
      .patch(`${apiUrl}/${userID}/${catalogID}/edit-catalog`, data)
      .then((res: any) => {
        return res.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const insertContactsToNewCatalogAPI = async (
  userID: string,
  catalogName: string,
  phoneNo: string,
  code: string
) => {
  try {
    return await axios
      .post(`${apiUrl}/${userID}/insert-to-new-tel`, {
        catalogName,
        phoneNo,
        code,
      })
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};

export const insertContactsToExistingCatalogAPI = async (
  userID: string,
  catalogID: string,
  data: any
) => {
  try {
    return await axios
      .post(`${apiUrl}/${userID}/${catalogID}/insert-to-existing-tel`, data)
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};

export const uploadContactsToNewCatalogAPI = async (
  userID: string,
  data: any
) => {
  try {
    const config: {} = {
      "Content-Type": "multipart/form-data",
    };
    return await axios
      .post(`${apiUrl}/${userID}/upload-to-new-tel`, data, config)
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};

export const uploadContactsToExistingCatalogAPI = async (
  userID: string,
  catalogID: string,
  data: any
) => {
  try {
    const config: {} = {
      "Content-Type": "multipart/form-data",
    };
    return await axios
      .post(
        `${apiUrl}/${userID}/${catalogID}/upload-to-existing-tel`,
        data,
        config
      )
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};
