import { FaSms } from "react-icons/fa";
import styled from "styled-components";
import flag from "../assets/ng.png";

const SMS = () => {
  return (
    <>
      <Body>
        <P>
          <FaSms color="#043260" size={150} />
          <P>
            Starts as low as: In Nigeria <Img src={flag} />
          </P>
          <div
            style={{
              display: "flex",
            }}
          >
            ₦<H1>3.00</H1>Kobo
          </div>
          <P>Per sms</P>
        </P>
      </Body>
    </>
  );
};

export default SMS;

const H1 = styled.h1`
  font-size: 40px;
`;

const Img = styled.img``;

const P = styled.div``;

const Body = styled.div`
  height: 300px;
  width: 400px;
  background-color: #0432603b;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  cursor: default;
  align-items: center;
  transition: all 350ms;

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
