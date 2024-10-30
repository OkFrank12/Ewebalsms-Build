import styled from "styled-components";
import { Outlet } from "react-router-dom";
const UserManagement = () => {
  return (
    <>
      <Body>
        <Main>
          <Top>
            <h1>User Management</h1>
            <p>
              Effortlessly manage all user-related activities. View, add, edit,
              and delete user accounts with ease.
            </p>
          </Top>
          <Outlet />
        </Main>
      </Body>
    </>
  );
};

export default UserManagement;

const Top = styled.div`
  h1 {
    color: #043260;
  }
  margin-bottom: 20px;
`;

const Main = styled.section`
  width: 99%;
`;

const Body = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 5px;

  @media screen and (max-width: 800px) {
    margin: 10px;
    ${Top} {
      margin-left: 10px;
    }
  }
`;
