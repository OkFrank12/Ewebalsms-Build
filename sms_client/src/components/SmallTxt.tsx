import { FC } from "react";
import styled from "styled-components";

interface iSmall {
  p: string;
  span: string;
}
const SmallTxt: FC<iSmall> = ({p, span}) => {
  return (
    <>
      {" "}
      <P>{p}</P>
      <Span>{span}</Span>
    </>
  );
};

export default SmallTxt;

const Span = styled.div`
  color: grey;
  margin-top: 5px;
`;

const P = styled.h3`
  font-size: 17px;
  color: #043260;
`;
