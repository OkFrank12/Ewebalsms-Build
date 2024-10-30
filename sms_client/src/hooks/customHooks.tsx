import useSWR from "swr";
import { viewAllUsersAPI, viewOneUserAPI } from "../api/authAPI";
import {
  populateTransferDetailsAPI,
  viewAllTransactionsAPI,
} from "../api/smsAPI";
import { findOneCatalogAPI, populateCatalog } from "../api/contactsAPI";
import {
  populateMessageAPI,
  viewAllSmsMessageAPI,
  viewOneSmsMessage,
} from "../api/smsHistory";
import {
  populateDraftsHistory,
  viewAllDraftsAPI,
  viewOneDraftsAPI,
} from "../api/draftsAPI";
import { viewAnnouncementsAPI, viewOneAdmin } from "../api/AdminAPI";

const useViewOneUser = (userID: string) => {
  const { data, isLoading } = useSWR(`${userID}/view-one-user`, () =>
    viewOneUserAPI(userID)
  );

  return { data, isLoading };
};

const useViewOneAdmin = (adminID: string) => {
  const { data, isLoading } = useSWR(`${adminID}/view-one-admin`, () =>
    viewOneAdmin(adminID)
  );

  return { data, isLoading };
};

const useViewAllUsers = () => {
  const { data, isLoading } = useSWR(`/view-all-users`, viewAllUsersAPI);

  return { data, isLoading };
};

const useViewAllAnnouncement = () => {
  const { data: announce, isLoading: isLoad } = useSWR(
    `/view-general-announcement`,
    viewAnnouncementsAPI
  );

  return { announce, isLoad };
};

const useViewAllTransactions = () => {
  const { data, isLoading } = useSWR(
    `/view-all-transactions`,
    viewAllTransactionsAPI
  );

  return { data, isLoading };
};

const usePopulateTransactions = (userID: string) => {
  const { data, isLoading } = useSWR(
    `/${userID}/user-transfer-details`,
    () => populateTransferDetailsAPI(userID),
    { refreshInterval: 500 }
  );

  return { data, isLoading };
};

const usePopulateCatalogs = (userID: string) => {
  const { data: catalogs, isLoading } = useSWR(
    `/${userID}/populate-catalogs`,
    () => populateCatalog(userID),
    { refreshInterval: 100 }
  );

  return { catalogs, isLoading };
};

const useFindOneCatalog = (catalogID: string) => {
  const { data, isLoading } = useSWR(
    `/${catalogID}/find-one-catalog`,
    () => findOneCatalogAPI(catalogID),
    { refreshInterval: 100 }
  );

  return { data, isLoading };
};

const usePopulateSmsHistory = (userID: string) => {
  const { data, isLoading } = useSWR(
    `/${userID}/populate-sms-history`,
    () => populateMessageAPI(userID),
    { refreshInterval: 100 }
  );

  return { data, isLoading };
};

const usePopulateDraftMessages = (userID: string) => {
  const { data, isLoading } = useSWR(
    `/${userID}/populate-drafts`,
    () => populateDraftsHistory(userID),
    { refreshInterval: 100 }
  );

  return { data, isLoading };
};

const useViewOneMessage = (smsID: string) => {
  const { data, isLoading } = useSWR(
    `/${smsID}/view-one-sms`,
    () => viewOneSmsMessage(smsID),
    { refreshInterval: 100 }
  );
  return { data, isLoading };
};

const useViewOneDrafts = (draftsID: string) => {
  const { data, isLoading } = useSWR(
    `/${draftsID}/view-one-draft`,
    () => viewOneDraftsAPI(draftsID),
    {
      refreshInterval: 100,
    }
  );

  return { data, isLoading };
};

const useViewAllSmsMessages = () => {
  const { data, isLoading } = useSWR(
    `/view-all-sms-messages`,
    viewAllSmsMessageAPI,
    {
      refreshInterval: 100,
    }
  );

  return { data, isLoading };
};

const useviewAllDraftsAPI = () => {
  const { data, isLoading } = useSWR(`/view-all-drafts`, viewAllDraftsAPI, {
    refreshInterval: 100,
  });

  return { data, isLoading };
};

export {
  useViewOneUser,
  useViewAllUsers,
  useViewAllTransactions,
  usePopulateTransactions,
  usePopulateCatalogs,
  useFindOneCatalog,
  usePopulateSmsHistory,
  usePopulateDraftMessages,
  useViewOneMessage,
  useViewOneAdmin,
  useViewOneDrafts,
  useViewAllSmsMessages,
  useviewAllDraftsAPI,
  useViewAllAnnouncement,
};
