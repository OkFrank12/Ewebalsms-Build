import styled from "styled-components";
import SentMessages from "../../../components/SentMessages";
import SmallTxt from "../../../components/SmallTxt";

const SMShistory = () => {
  return (
    <>
      <Body>
        <Main>
          <Top>
            <SmallTxt
              p="Sent SMS History"
              span="An Overview of all successfully sent SMS."
            />
          </Top>
          <Section>
            <SentMessages />
          </Section>
        </Main>
      </Body>
    </>
  );
};

export default SMShistory;

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
