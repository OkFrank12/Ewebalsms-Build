import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AdminSider from "../components/AdminSider";
import AdminHeader from "./AdminHeader";

const AdminDashboard = () => {
  return (
    <div
      style={{
        backgroundColor: "#f3f3f3",
      }}
    >
      <div style={{ display: "flex", backgroundColor: "#f3f3f3" }}>
        <Sider>
          <AdminSider />
        </Sider>
        <AdminHeader />
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
        </Main>
      </div>
    </div>
  );
};

export default AdminDashboard;

const Sider = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Main = styled.div`
  width: calc(100vw - 235px);
  min-height: calc(100vh - 60px);
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
