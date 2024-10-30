import { FC, PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { onToggleState, onUserLogOut } from "../storeConfig/reduxState";
import Swal from "sweetalert2";
import { renderLoginStatusFalseAPI } from "../api/authAPI";

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
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
      dispatch(onUserLogOut());
      dispatch(onToggleState(false));
      renderLoginStatusFalseAPI(user);
    });
  }
  document.addEventListener("mousemove", resetTimer);
  document.addEventListener("keydown", resetTimer);
  resetTimer();

  const user = useSelector((state: any) => state.user);
  return <>{user ? <>{children}</> : <Navigate to={`/login`} />}</>;
};

export default PrivateRouter;
