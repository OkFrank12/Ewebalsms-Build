import { FC, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import styled from "styled-components";

interface iPlan {
  cost: string;
  plan: string;
  unitprice: string;
  unit: string;
}
const PlanSection: FC<iPlan> = ({ unit, unitprice, cost, plan }) => {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <>
      <PlanCard
        scale={check ? "scale(1.07)" : null}
        onClick={() => setCheck(!check)}
      >
        <div>
          <Cost>₦{cost}</Cost>
          <Plan>{plan}</Plan>
        </div>
        <Line />
        <Price>
          Price Per Unit <span>₦{unitprice}</span>
        </Price>
        <Units>
          Purchase Deal <span>{unit} units</span>
        </Units>
        <Round bor={!check && "2px solid green"}></Round>
        {check && <Icon size={30} color="green" />}
      </PlanCard>
    </>
  );
};

export default PlanSection;

const Icon = styled(FaCircleCheck)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const Round = styled.div<{
  bor: any;
}>`
  width: 30px;
  height: 30px;
  background-color: #e7e4e4;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  opacity: 0;
  border: ${({ bor }) => bor};
  right: 5px;
`;

const Plan = styled.div``;

const Units = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: red;
  }
`;

const Price = styled.div`
  margin: 10px 0;
  color: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: green;
    font-weight: bold;
    font-size: 20px;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid lightgray;
  width: 100%;
  margin-top: 5px;
`;

const Cost = styled.h1`
  color: #043260;
`;

const PlanCard = styled.div<{
  scale: any;
}>`
  width: 96%;
  padding: 10px;
  height: 130px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  color: grey;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 350ms;
  transform: ${({ scale }) => scale};
  position: relative;
  &:hover {
    transform: scale(1.05);

    ${Round} {
      opacity: 1;
    }
  }
`;
