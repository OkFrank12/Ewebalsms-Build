import { FC } from "react";
import styled from "styled-components";

interface iEwebal {
  color: string;
  image: any;
}

const Logo: FC<iEwebal> = ({ color, image }) => {
  return (
    <>
      <Logos color={color}>
        <img src={image} style={{ width: "50px" }} />
        Ewebal<span>sms</span>
      </Logos>
    </>
  );
};

export default Logo;

const Logos = styled.h1<{
  color: string;
}>`
  color: ${({ color }) => (color ? "#043260" : "white")};
  cursor: pointer;
  display: flex;
  align-items: center;
  span {
    color: grey;
  }
`;
