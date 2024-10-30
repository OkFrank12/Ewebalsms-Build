import styled from "styled-components";
import { FC } from "react";

interface iPanels {
  panels: any;
}

const PaymentBox: FC<iPanels> = ({ panels }) => {
  return (
    <>
      <Card>{panels}</Card>
    </>
  );
};

export default PaymentBox;

const Card = styled.div`
  width: 48%;
  font-size: 15px;
  background-color: white;
  padding: 30px;
  min-height: 500px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (max-width: 1240px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;
