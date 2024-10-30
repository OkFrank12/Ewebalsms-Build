import styled from "styled-components";
import Logo from "../../static/Logo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  onAdminLogOut,
  onAdminToggleState,
  onToggleState,
} from "../../storeConfig/reduxState";
import Swal from "sweetalert2";
import ewebalLogoWhite from "../../assets/Ewebal_Logo_white.png";
import { useViewOneAdmin } from "../../hooks/customHooks";

const AdminSider = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const id = useSelector((state: any) => state.admin);
  const dispatch = useDispatch();
  const onToggleChange = () => {
    window.scrollTo(0, 0);
    dispatch(onToggleState(!toggle));
  };
  const { data } = useViewOneAdmin(id);
  localStorage.setItem("adminCredentials", JSON.stringify(data));
  return (
    <Sider>
      <Link
        to={`/`}
        style={{
          position: "fixed",
          backgroundColor: "#043260",
          textDecoration: "none",
          width: "212px",
          display: "flex",
          padding: "10px 0",

          justifyContent: "center",
        }}
      >
        <Logo color="" image={ewebalLogoWhite} />
      </Link>
      <br />
      <br />
      <Body>
        <Title>Main Panel</Title>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Routes to={`/admin-dashboard`} onClick={onToggleChange}>
            Overview
          </Routes>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Title>Actions Panel</Title>
          <Routes
            to={`/admin-dashboard/manage-all-users`}
            onClick={onToggleChange}
          >
            Manage Users
          </Routes>
          <Routes
            to={`/admin-dashboard/action-whitelist`}
            onClick={onToggleChange}
          >
            Whitelists
          </Routes>
          <Routes
            to={`/admin-dashboard/credit-a-user`}
            onClick={onToggleChange}
          >
            Credit User
          </Routes>
          <Routes
            to={`/admin-dashboard/manage-all-transactions`}
            onClick={onToggleChange}
          >
            Transactions
          </Routes>
          <Routes
            to={`/admin-dashboard/manage-all-drafts`}
            onClick={onToggleChange}
          >
            Drafts
          </Routes>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Routes
            to={`/admin-dashboard/manage-all-sms`}
            onClick={onToggleChange}
          >
            All Messages
          </Routes>
        </div>
        <Title>Profile Settings</Title>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Routes
            to={`/admin-dashboard/admin-profile-summary`}
            onClick={onToggleChange}
          >
            Admin Summary
          </Routes>
        </div>
        <Title>Message Panel</Title>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Routes
            to={`/admin-dashboard/make-general-announcements`}
            onClick={onToggleChange}
          >
            Announcement
          </Routes>
          <Routes
            to={`/admin-dashboard/admin-assign-api`}
            onClick={onToggleChange}
          >
            Distribute API
          </Routes>
        </div>

        <br />
        <br />
        <br />
        <div
          style={{
            position: "fixed",
            bottom: "0",
            backgroundColor: "#043260",
            width: "212px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Btn
            onClick={() => {
              Swal.fire({
                icon: "success",
                title: "Logged Out Successfully",
                text: "See you soon...!",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              }).then(() => {
                dispatch(onAdminToggleState(false));
                dispatch(onAdminLogOut());
              });
            }}
          >
            Logout
          </Btn>
        </div>
      </Body>
    </Sider>
  );
};

export default AdminSider;

const Btn = styled.div`
  padding: 10px;
  background-color: #bb3737;
  color: white;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
`;

const Routes = styled(Link)`
  padding: 10px;
  width: 100%;
  color: white;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 10px 0 0 0;
  text-decoration: none;
  transition: all 500ms;

  &:hover {
    background-color: white;
    color: #043260;
  }

  &:focus {
    background-color: white;
    color: #043260;
  }
`;

const Title = styled.div`
  color: dodgerblue;
  cursor: default;
  margin-top: 20px;
  padding-left: 5px;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

const Sider = styled.div`
  width: 220px;
  z-index: 30;
  height: 100vh;
  background-color: #043260;
  overflow-y: scroll;
  overflow-x: hidden;
  position: fixed;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
