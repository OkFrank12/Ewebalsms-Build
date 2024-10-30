import styled from "styled-components";
import DepositAccount from "../../../components/DepositAccount";
import PriceCalculator from "../../../components/PriceCalculator";

const Pricings = () => {
  return (
    <>
      <Body>
        <Main>
          <DepositAccount />
          <Div>
            <PriceCalculator />
          </Div>
        </Main>
      </Body>
    </>
  );
};

export default Pricings;

const Div = styled.div`
  width: 600px;
  margin-top: 10px;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  margin-bottom: 10px;

  @media screen and (max-width: 880px) {
    width: 95%;

    ${Div} {
      width: 100%;
    }
  }
`;

const Body = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;
