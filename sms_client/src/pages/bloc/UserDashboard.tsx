import { Outlet } from "react-router-dom";
import UserHeader from "../../components/common/UserHeader";
import UserSider from "../../components/common/UserSider";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const UserDashboard = () => {
  return (
    <>
      <div style={{ display: "flex", backgroundColor: "#f3f3f3" }}>
        <Sider>
          <UserSider />
        </Sider>
        <UserHeader />
      </div>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Main>
          <Outlet />
          <Div
            href="https://wa.me/09032931068?text=Hello%20there"
            target="_blank"
          >
            <Icon size={30} />
          </Div>
        </Main>
      </div>
    </>
  );
};

export default UserDashboard;

const Sider = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Main = styled.div`
  width: calc(100vw - 220px);
  min-height: calc(100vh - 60px);
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Div = styled.a`
  display: flex;
  align-items: center;
  animation: bounce 2s infinite;
  position: fixed;
  bottom: 50px;
  right: 5px;
  background-color: green;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-5%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

const Icon = styled(FaWhatsapp)``;
