import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <>
      <Body>
        <Bold>404</Bold>
        <Oops>Page Not Found</Oops>
        <br />
        <Small>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Small>
        <br />
        <Small>
          Please check the URL for proper spelling and capitalization. If you're
          having trouble locating a page, try visiting our homepage or contact
          our support team at support@ewebalsms.com
        </Small>
        <br />
        <Small>Thank you for your understanding.</Small>
        <Btn to={`/`}>
          <FaArrowLeftLong />
          <Span>GO TO HOME</Span>
        </Btn>
      </Body>
    </>
  );
};

export default ErrorPage;

const Span = styled.div`
  margin-left: 10px;
`;

const Btn = styled(Link)`
  padding: 10px 20px;
  display: flex;
  text-decoration: none;
  cursor: pointer;
  margin-top: 20px;
  padding: 20px;
  justify-content: center;
  transition: all 450ms;
  background-color: crimson;
  color: white;
  align-items: center;

  &:hover {
    border-radius: 5px;
  }
`;

const Small = styled.p`
  width: 95%;
  font-size: 20px;
`;

const Oops = styled.p`
  font-weight: 700;
  font-size: 50px;
  width: 95%;
`;

const Bold = styled.p`
  font-size: 100px;
  color: crimson;
  font-weight: 900;
  margin: 0;

  animation: bounce 5s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    ${Oops} {
      font-size: 30px;
    }
  }
`;
