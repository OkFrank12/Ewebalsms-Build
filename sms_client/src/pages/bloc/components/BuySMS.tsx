import styled from "styled-components";
import PaymentBox from "../../../components/PaymentBox";
import DepositAccount from "../../../components/DepositAccount";
import TransferPanel from "../../../components/TransferPanel";
import UnitPanel from "../../../components/UnitPanel";

const BuySMS = () => {
  return (
    <>
      <Body>
        <Top>
          <Div>
            <P>Buy Online SMS Units</P>
            <Span>
              Buy SMS units based on your preference. Here we have Instant Units
              and Payment Via Bank Deposits
            </Span>
          </Div>
          <DepositAccount />
        </Top>
        <Main>
          <PaymentBox panels={<UnitPanel />} />
          <PaymentBox panels={<TransferPanel />} />
        </Main>
      </Body>
    </>
  );
};

export default BuySMS;

const Div = styled.div`
  margin-right: 10px;
`;

const Top = styled.div`
  margin: 20px 10px;
  display: flex;
  justify-content: space-between;
`;

const Span = styled.div`
  color: grey;
  width: 100%;
`;

const P = styled.h3`
  color: #043260;
  font-size: 25px;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  margin-left: 5px;

  @media screen and (max-width: 1200px) {
    ${Top} {
      flex-direction: column;
    }
  }
`;
