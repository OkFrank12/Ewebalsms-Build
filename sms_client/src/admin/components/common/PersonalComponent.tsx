import { FC } from "react";
import styled from "styled-components";

interface iPersonal {
  num: string | number;
  text: string;
  icon: any;
}

const PersonalComponent: FC<iPersonal> = ({ num, text, icon }) => {
  return (
    <>
      <Card>
        <Stats>{num}</Stats>
        <Status>{text}</Status>
        <Div>{icon}</Div>
      </Card>
    </>
  );
};

export default PersonalComponent;

const Div = styled.div`
  position: absolute;
  right: 10px;
  padding: 3px;
  font-size: 30px;
  color: #043260;
  top: 10px;
`;

const Status = styled.div`
  color: grey;
`;

const Stats = styled.h1`
  color: #043260;
  font-size: 45px;
`;

const Card = styled.div`
  width: 100%;
  height: 100px;
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 10px;
  position: relative;
`;
