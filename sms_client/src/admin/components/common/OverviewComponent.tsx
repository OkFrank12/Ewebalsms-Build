import { FC } from "react";
import styled from "styled-components";

interface iOverview {
  num: any;
  span: string;
  icon: any;
}

const OverviewComponent: FC<iOverview> = ({ num, span, icon }) => {
  return (
    <>
      <Holder>
        <div>
          <Num>{num}</Num>
          <Span>{span}</Span>
        </div>
        <p>On Ewebal SMS Solution Web Application.</p>
        <Icon>{icon}</Icon>
      </Holder>
    </>
  );
};

export default OverviewComponent;

const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 45px;
  height: 45px;
  padding: 10px;
  font-size: 25px;
  background-color: whitesmoke;
  border-radius: 50%;
  color: #043260;
`;

const Span = styled.span`
  color: crimson;
`;

const Num = styled.div`
  font-weight: 900;
  color: #043260;
  font-size: 40px;

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const Holder = styled.div`
  background-color: white;
  min-height: 150px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  p {
    font-size: 15px;
    color: #373535;
  }
`;
