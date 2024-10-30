import styled from "styled-components";

const InputBox = () => {
  return (
    <>
      <InputSection>
        <Box>
          <MainB>
            <Title>Pay as you use plan.</Title>
            <Text>
              Embrace flexibility with our 'Pay as You Use' pricing model, where
              you only pay for the services you consume. This approach allows
              you to align costs directly with your usage, ensuring a
              cost-efficient solution that adapts to your evolving needs.
            </Text>
            <Hr />
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                margin: "20px 0px",
                fontSize: "14px",
                border: "1px solid #ddd",
              }}
            >
              <Tr>
                <Th>ALL AVAILABLE UNITS</Th>
                <Th>PRICE PER UNIT</Th>
                <Th>MIN / MAX PAYMENT</Th>
              </Tr>
              <Tr>
                <Td>500 to 9,999 Units</Td>
                <Td>₦2</Td>
                <Td>₦1,000 - ₦19,998</Td>
              </Tr>
              <Tr>
                <Td>10,000 to 999,999 Units</Td>
                <Td>₦1.9</Td>
                <Td>₦19,000 - ₦1,888,998</Td>
              </Tr>
              <Tr>
                <Td>1,000,000 to 9,999,999 Units</Td>
                <Td>₦1.85</Td>
                <Td>₦1,850,000 - ₦18,499,998</Td>
              </Tr>
              <Tr>
                <Td>10,000,000 to 99,999,999 Units</Td>
                <Td>₦1.75</Td>
                <Td>₦17,500,000 - ₦174,999,998</Td>
              </Tr>
              <Tr>
                <Td>100,000,000 to 999,999,999 Units</Td>
                <Td>₦1.7</Td>
                <Td>₦170,000,000 - ₦1,699,999,998</Td>
              </Tr>
            </table>
          </MainB>
        </Box>
      </InputSection>
    </>
  );
};

export default InputBox;

const Td = styled.td`
  padding: 10px 10px 10px 40px;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding-left: 40px;
  text-align: left;
`;

const Tr = styled.tr`
  margin-left: 50px;

  @media screen and (max-width: 1100px) {
    font-size: 10px;
  }
`;

const MainB = styled.div`
  width: 90%;
  height: 87%;
`;

const Hr = styled.hr`
  margin-top: 10px;
`;

const Text = styled.span`
  color: grey;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  padding: 10px 0;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  min-height: 300px;
  border-radius: 10px;

  @media screen and (max-width: 1100px) {
    margin: 0;
  }
`;

const InputSection = styled.div`
  width: 60%;

  
  @media screen and (max-width: 1100px) {
    width: 100%;
    margin: 0;
  }

  
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
