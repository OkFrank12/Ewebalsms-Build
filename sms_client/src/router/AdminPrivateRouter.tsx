import { FC, PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { onAdminLogOut } from "../storeConfig/reduxState";
import Swal from "sweetalert2";

const AdminPrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  var inactivityTimeout: any;

  function resetTimer() {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(logoutUser, 1200000);
  }

  function logoutUser() {
    Swal.fire({
      icon: "info",
      title: "Logged Out...!",
      text: "This occured due to inactivity and security purpose",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    }).then(() => {
      dispatch(onAdminLogOut());
    });
  }
  document.addEventListener("mousemove", resetTimer);
  document.addEventListener("keydown", resetTimer);
  resetTimer();

  const admin = useSelector((state: any) => state.admin);
  return <>{admin ? <>{children}</> : <Navigate to={`/admin-login-page`} />}</>;
};

export default AdminPrivateRouter;
