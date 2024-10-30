import styled from "styled-components";
import Logo from "../../static/Logo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onToggleState, onUserLogOut } from "../../storeConfig/reduxState";
import Swal from "sweetalert2";
import ewebalLogoWhite from "../../assets/Ewebal_Logo_white.png";
import { renderLoginStatusFalseAPI } from "../../api/authAPI";

const UserSider = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const onToggleChange = () => {
    window.scrollTo(0, 0);
    dispatch(onToggleState(!toggle));
  };

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
          <Routes to={`/user-dashboard`} onClick={onToggleChange}>
            Basement
          </Routes>
          <Routes to={`/user-dashboard/whitelists`} onClick={onToggleChange}>
            Whitelists
          </Routes>
        </div>
        <Title>Messages Panel</Title>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Routes
            to={`/user-dashboard/ewebal/send-sms`}
            onClick={onToggleChange}
          >
            Send SMS
          </Routes>
          <Routes to={`/user-dashboard/sms-history`} onClick={onToggleChange}>
            SMS History
          </Routes>
          <Routes to={`/user-dashboard/drafted-sms`} onClick={onToggleChange}>
            Drafts
          </Routes>
        </div>
        <Title>Payment Panel</Title>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Routes to={`/user-dashboard/buy-sms`} onClick={onToggleChange}>
            Buy SMS Units
          </Routes>
          <Routes
            to={`/user-dashboard/purchase-options`}
            onClick={onToggleChange}
          >
            SMS Charges
          </Routes>
          <Routes to={`/user-dashboard/transactions`} onClick={onToggleChange}>
            Transactions
          </Routes>
        </div>
        <Title>Profile Panel</Title>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Routes to={`/user-dashboard/profile-info`} onClick={onToggleChange}>
            Personal Summary
          </Routes>
          <Routes to={`/user-dashboard/update-tel`} onClick={onToggleChange}>
            Update Profile
          </Routes>
        </div>
        <Title>Contacts Panel</Title>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Routes to={`/user-dashboard/all-contacts`} onClick={onToggleChange}>
            Phonebook
          </Routes>
          <Routes
            to={`/user-dashboard/upload-new-contacts`}
            onClick={onToggleChange}
          >
            Upload / Insert Contacts
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
                dispatch(onToggleState(false));
                dispatch(onUserLogOut());
                renderLoginStatusFalseAPI(user);
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

export default UserSider;

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
