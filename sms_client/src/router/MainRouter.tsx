import { createBrowserRouter } from "react-router-dom";
import AuthLayOut from "../layout/AuthLayOut";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import LandingPage from "../pages/LandingPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import ChangePasswordPage from "../pages/auth/ChangePasswordPage";
import ContactUsPage from "../pages/ContactUsPage";
import MainLayOut from "../layout/MainLayOut";
import SmsAPIpage from "../pages/SmsAPIpage";
import PricingPage from "../pages/PricingPage";
import ErrorPage from "../pages/ErrorPage";
import UserDashboard from "../pages/bloc/UserDashboard";
import SendSMS from "../pages/bloc/components/SendSMS";
import Basement from "../pages/bloc/components/Basement";
import ScheduledSMS from "../pages/bloc/components/ScheduledSMS";
import SMShistory from "../pages/bloc/components/SMShistory";
import DraftSMS from "../pages/bloc/components/DraftSMS";
import BuySMS from "../pages/bloc/components/BuySMS";
import Pricings from "../pages/bloc/components/Pricings";
import Transactions from "../pages/bloc/components/Transactions";
import PersonalSummary from "../pages/bloc/components/PersonalSummary";
import UpdatePhoneNo from "../pages/bloc/components/UpdatePhoneNo";
import PhoneBook from "../pages/bloc/components/PhoneBook";
import UploadInsert from "../pages/bloc/components/UploadInsert";
import MessagePage from "../pages/MessagePage";
import PrivateRouter from "./PrivateRouter";
import SetCatalog from "../components/SetCatalog";
import ResetMailPage from "../pages/ResetMailPage";
import WhitelistSection from "../pages/bloc/components/WhitelistSection";
import ReSendSMS from "../pages/bloc/components/ReSendSMS";
import SendDraftsSMS from "../pages/bloc/components/SendDraftsSMS";
import PriceRatingsPage from "../pages/PriceRatingsPage";
import AdminLayOut from "../layout/AdminLayOut";
import AdminRegisterPage from "../admin/auth/AdminRegisterPage";
import OTPpage from "../admin/auth/OTPpage";
import AdminLoginPage from "../admin/auth/AdminLoginPage";
import AdminDashboard from "../admin/screens/AdminDashboard";
import AdminPrivateRouter from "./AdminPrivateRouter";
import Overview from "../admin/screens/components/Overview";
import WhiteListAction from "../admin/screens/components/WhiteListAction";
import UserManagement from "../admin/screens/components/UserManagement";
import AllTransactions from "../admin/screens/components/AllTransactions";
import AllDrafts from "../admin/screens/components/AllDrafts";
import AllSMSMessages from "../admin/screens/components/AllSMSMessages";
import AdminSummary from "../admin/screens/components/AdminSummary";
import Announcements from "../admin/screens/components/Announcements";
import APIActions from "../admin/screens/components/APIActions";
import Credential from "../admin/components/Credential";
import MoreDetailedCredential from "../admin/components/MoreDetailedCredential";
import UserTransactions from "../admin/components/UserTransactions";
import MoreTransactionDetails from "../admin/components/MoreTransactionDetails";
import UserMessages from "../admin/components/UserMessages";
import MoreDetailedSMS from "../admin/components/MoreDetailedSMS";
import AllMoreDetailedTransactions from "../admin/components/AllMoreDetailedTransactions";
import ViewAllTransactions from "../admin/components/ViewAllTransactions";
import { ErrorBoundary } from "react-error-boundary";
import ServerErrorPage from "../pages/ServerErrorPage";
import UsersDrafts from "../admin/components/UsersDrafts";
import MoreDraftedSMS from "../admin/components/MoreDraftedSMS";
import UsersMessages from "../admin/components/UsersMessages";
import MoreSMSMessage from "../admin/components/MoreSMSMessage";
import OTPMessagePage from "../pages/OTPMessagePage";
import CreditAUser from "../admin/screens/components/CreditAUser";

export const MainRouter = createBrowserRouter([
  {
    element: <AuthLayOut />,
    children: [
      {
        index: true,
        path: "register",
        element: <RegisterPage />,
      },
      {
        index: true,
        path: "login",
        element: <LoginPage />,
      },
      {
        index: true,
        path: "/:token/verify-user",
        element: <LoginPage />,
      },
      {
        index: true,
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
      {
        index: true,
        path: "change-password",
        element: <ChangePasswordPage />,
      },
      {
        index: true,
        path: "/:token/reset-user-password",
        element: <ChangePasswordPage />,
      },
    ],
  },
  {
    element: <AdminLayOut />,
    children: [
      {
        index: true,
        path: "/admin-register",
        element: <AdminRegisterPage />,
      },
      {
        index: true,
        path: "/otp-page",
        element: <OTPpage />,
      },
      {
        index: true,
        path: "/admin-login-page",
        element: <AdminLoginPage />,
      },
      {
        index: true,
        path: "/:token/verify-otp",
        element: <OTPpage />,
      },
      {
        index: true,
        path: "/:token/verify-admin",
        element: <AdminLoginPage />,
      },
    ],
  },
  {
    element: <ErrorPage />,
    path: "*",
  },
  {
    path: "/message",
    element: <MessagePage />,
  },
  {
    path: "/otp-message",
    element: <OTPMessagePage />,
  },
  {
    path: "/reset-message",
    element: <ResetMailPage />,
  },
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        element: <ContactUsPage />,
        index: true,
        path: "contact-us",
      },
      {
        element: <SmsAPIpage />,
        index: true,
        path: "sms-api-page",
      },
      {
        element: <PricingPage />,
        index: true,
        path: "pricings",
      },
      {
        element: <PriceRatingsPage />,
        index: true,
        path: "pricing-rates",
      },
    ],
  },
  {
    path: "admin-dashboard",
    element: (
      <AdminPrivateRouter>
        <ErrorBoundary fallback={<ServerErrorPage />}>
          <AdminDashboard />
        </ErrorBoundary>
      </AdminPrivateRouter>
    ),
    children: [
      {
        element: <Overview />,
        index: true,
      },
      {
        element: <WhiteListAction />,
        index: true,
        path: "action-whitelist",
      },
      {
        element: <CreditAUser />,
        index: true,
        path: "credit-a-user",
      },
      {
        element: <UserManagement />,
        path: "manage-all-users",
        children: [
          {
            element: <Credential />,
            index: true,
          },
          {
            element: <MoreDetailedCredential />,
            path: "more-details-about-user/:_id",
            index: true,
          },
          {
            element: <UserTransactions />,
            path: "user-transactions/:_id",
            index: true,
          },
          {
            element: <MoreTransactionDetails />,
            path: "user-transactions/:_id/more-detailed-transaction/:_id",
            index: true,
          },
          {
            element: <UserMessages />,
            path: "user-messages/:_id",
            index: true,
          },
          {
            element: <MoreDetailedSMS />,
            path: "user-messages/:_id/more-about-sms/:_id",
            index: true,
          },
        ],
      },
      {
        element: <AllTransactions />,
        path: "manage-all-transactions",
        children: [
          {
            element: <ViewAllTransactions />,
            index: true,
          },
          {
            element: <AllMoreDetailedTransactions />,
            index: true,
            path: "more-about-transaction/:_id",
          },
        ],
      },
      {
        element: <AllDrafts />,
        path: "manage-all-drafts",
        children: [
          {
            element: <UsersDrafts />,
            index: true,
          },
          {
            element: <MoreDraftedSMS />,
            index: true,
            path: "more-about-drafts/:_id",
          },
        ],
      },
      {
        element: <AllSMSMessages />,
        path: "manage-all-sms",
        children: [
          {
            element: <UsersMessages />,
            index: true,
          },
          {
            element: <MoreSMSMessage />,
            index: true,
            path: "more-about-sms/:_id",
          },
        ],
      },
      {
        element: <AdminSummary />,
        index: true,
        path: "admin-profile-summary",
      },
      {
        element: <Announcements />,
        index: true,
        path: "make-general-announcements",
      },
      {
        element: <APIActions />,
        index: true,
        path: "admin-assign-api",
      },
    ],
  },
  {
    path: "user-dashboard",
    element: (
      <PrivateRouter>
        <ErrorBoundary fallback={<ServerErrorPage />}>
          <UserDashboard />
        </ErrorBoundary>
      </PrivateRouter>
    ),
    children: [
      {
        element: <Basement />,
        index: true,
      },
      {
        element: <SendSMS />,
        index: true,
        path: ":id/send-sms",
      },
      {
        element: <ReSendSMS />,
        index: true,
        path: ":id/resend-sms",
      },
      {
        element: <SendDraftsSMS />,
        index: true,
        path: ":id/send-draft-sms",
      },

      {
        element: <ScheduledSMS />,
        index: true,
        path: "scheduled-sms",
      },
      {
        element: <SetCatalog />,
        index: true,
        path: "set-catalogs/:id/:cr",
      },
      {
        element: <SMShistory />,
        index: true,
        path: "sms-history",
      },
      {
        element: <DraftSMS />,
        index: true,
        path: "drafted-sms",
      },
      {
        element: <BuySMS />,
        index: true,
        path: "buy-sms",
      },
      {
        element: <WhitelistSection />,
        index: true,
        path: "whitelists",
      },
      {
        element: <Pricings />,
        index: true,
        path: "purchase-options",
      },
      {
        element: <Transactions />,
        index: true,
        path: "transactions",
      },
      {
        element: <PersonalSummary />,
        index: true,
        path: "profile-info",
      },
      {
        element: <UpdatePhoneNo />,
        index: true,
        path: "update-tel",
      },
      {
        element: <PhoneBook />,
        index: true,
        path: "all-contacts",
      },
      {
        element: <UploadInsert />,
        index: true,
        path: "upload-new-contacts",
      },
    ],
  },
]);
