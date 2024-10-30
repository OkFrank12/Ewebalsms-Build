import styled from "styled-components";
import SmallTxt from "../../../components/SmallTxt";
import Schedules from "../../../components/Schedules";

const ScheduledSMS = () => {
  return (
    <>
      <Body>
        <Main>
          <Top>
            <SmallTxt
              p="Scheduled SMS History"
              span="An Overview of all scheduled SMS."
            />
          </Top>
          <Section>
            <Schedules />
          </Section>
        </Main>
      </Body>
    </>
  );
};

export default ScheduledSMS;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Top = styled.div``;

const Main = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 10px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;
