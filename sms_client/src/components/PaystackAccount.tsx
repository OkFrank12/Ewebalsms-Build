import styled from "styled-components";
import paystack from "../assets/paystack-opengraph.png";

const PaystackAccount = () => {
  return (
    <>
      <Box>
        <Img src={paystack} />
        <Div>
          <P>Paystack</P>
          <P>
            <span>Fast and secure payments with paystack for sms units.</span>
          </P>
        </Div>
      </Box>
    </>
  );
};

export default PaystackAccount;

const P = styled.h3`
  font-size: 16px;
  span {
    font-weight: 400;
  }
`;

const Div = styled.div`
  margin-left: 10px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
`;

const Box = styled.div`
  width: 400px;
  min-height: 100px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
  cursor: default;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 330px;
    margin: 0;

    ${Img} {
      width: 50px;
      height: 50px;
    }

    ${P} {
      font-size: 14.5px;
    }
  }

  @media screen and (max-width: 370px) {
    width: 100%;
  }
`;
