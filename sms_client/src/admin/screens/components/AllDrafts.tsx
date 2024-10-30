import styled from "styled-components";
import { Outlet } from "react-router-dom";

const AllDrafts = () => {
  return (
    <>
      <Body>
        <Main>
          <Top>
            <h1>User's Drafts</h1>
            <p>Oversee all drafted messages of users on Ewebal Bulk SMS.</p>
          </Top>
          <Outlet />
        </Main>
      </Body>
    </>
  );
};

export default AllDrafts;

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
