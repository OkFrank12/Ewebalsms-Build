import styled from "styled-components";
import SmallTxt from "../../../components/SmallTxt";
import DraftMessages from "../../../components/DraftMessages";

const DraftSMS = () => {
  return (
    <>
      <Body>
        <Main>
          <Top>
            <SmallTxt p="Drafted SMS" span="An Overview of all drafted SMS." />
          </Top>
          <Section>
            <DraftMessages />
          </Section>
        </Main>
      </Body>
    </>
  );
};

export default DraftSMS;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Top = styled.div``;

const Main = styled.div`
  width: 97%;
  height: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;
