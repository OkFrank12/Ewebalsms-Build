import SmallTxt from "./SmallTxt";
import PlanSection from "./PlanSection";
import styled from "styled-components";

const SubscriptionPanel = () => {
  return (
    <>
      <SmallTxt
        p="Choose Subscription Plans"
        span="Subscribe for Long Term and Satisfactory Usage."
      />
      <PlanSection cost="20,000" plan="Basic" unit="30000" unitprice="2.00" />
      <PlanSection
        cost="45,000"
        plan="Standard"
        unit="50000"
        unitprice="1.85"
      />
      <PlanSection cost="65,000" plan="Premium" unit="75000" unitprice="1.65" />
      <PlanSection cost="85,000" plan="Mega" unit="100000" unitprice="1.40" />
      <Btn>Subscribe Now</Btn>
    </>
  );
};

export default SubscriptionPanel;


const Btn = styled.div`
  width: 100%;
  height: 50px;
  background-color: #043260;
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  align-items: center;
  transition: all 450ms;
  cursor: pointer;

  &:hover {
    border-radius: 5px;
  }
`;