import styled from "styled-components";
import access from "../assets/moniepoint.png";

const DepositAccount = () => {
  return (
    <>
      <Box>
        <Img src={access} />
        <Div>
          <P>Moniepoint MFB</P>
          <P>
            Account Name:
            <span>Ewebal International Nigeria Ltd</span>
          </P>
          <P>
            Account No:<span> 8248886092</span>
          </P>
        </Div>
      </Box>
    </>
  );
};

export default DepositAccount;

const P = styled.h3`
  font-size: 16px;
  span {
    font-weight: 400;
    margin-left: 5px;
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
