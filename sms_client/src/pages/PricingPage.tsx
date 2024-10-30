import styled from "styled-components";
import SMS from "../components/SMS";
import { motion } from "framer-motion";
import PaystackAccount from "../components/PaystackAccount";
import DepositAccount from "../components/DepositAccount";
import PriceCalculator from "../components/PriceCalculator";

const PricingPage = () => {
  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Body>
          <Main>
            <Section>
              <P>
                Our <span>Pricing</span>
              </P>
              <Text>
                Our SMS pricing is designed to offer cost-effective
                communication solutions, providing businesses with a reliable
                and efficient means of reaching their audience. With transparent
                pricing models, we aim to empower organizations to engage
                seamlessly while optimizing budget allocation.{" "}
              </Text>
              <Hold>
                <PaystackAccount />
                <DepositAccount />
              </Hold>
            </Section>
            <Div>
              <SMS />
            </Div>
          </Main>
          <Holder>
            <Divs>
              <PriceCalculator />
            </Divs>
          </Holder>
        </Body>
      </motion.div>
    </>
  );
};

export default PricingPage;

const Divs = styled.div`
  width: 600px;
  margin-top: 10px;
`;

const Holder = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Hold = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;

  @media screen and (max-width: 1440px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  line-height: 1.9;
  font-size: 18px;
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const P = styled.h1`
  span {
    color: #043260;
  }
`;

const Section = styled.div`
  margin-right: 30px;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 100px;
  display: flex;

  @media screen and (max-width: 950px) {
    flex-direction: column;

    ${Div} {
      margin-top: 30px;
    }
  }
`;

const Body = styled.div`
  width: 100%;
  min-height: 70vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
