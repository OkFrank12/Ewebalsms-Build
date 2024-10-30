import styled from "styled-components";
import SmallTxt from "../../../components/SmallTxt";
import Profiles from "../../../components/Profiles";

const PersonalSummary = () => {
  return (
    <>
      <Body>
        <Main>
          <Top>
            <SmallTxt
              p="Personal Summary"
              span="An Overview of your personal details"
            />
          </Top>
          <Box>
            <Profiles />
          </Box>
        </Main>
      </Body>
    </>
  );
};

export default PersonalSummary;

const Top = styled.div`
  width: 100%;
`;

const Box = styled.div`
  width: 600px;
  font-size: 15px;
  background-color: white;
  padding: 30px;
  min-height: 500px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 20px;
  }
`;

const Main = styled.div`
  width: 97%;
  height: 100%;
  margin-top: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;
