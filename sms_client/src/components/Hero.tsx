import { Link } from "react-router-dom";
import styled from "styled-components";
import withPhone from "../assets/hero_img.avif";
import { useViewOneUser } from "../hooks/customHooks";
import { useSelector } from "react-redux";

const Hero = () => {
  const user = useSelector((state: any) => state.user);
  const { data } = useViewOneUser(user);

  return (
    <>
      <Page>
        <Body>
          <Left>
            <Tab>
              <New>New!</New>
              <span>Welcome to Ewebal Solutions</span>
            </Tab>
            <Bold>
              Send Bulk SMS Messages with <span>Ewebal Bulk SMS</span>
            </Bold>
            <Span>
              Send Cheap and Instant Bulk SMS Messages today with ease,
              efficiency, and reliability. Reaching your audience has never been
              simpler.{" "}
            </Span>
            {data?.loginStatus ? (
              <>
                <BtnHolder>
                  <Btn to={`/user-dashboard`}>Dashboard</Btn>
                </BtnHolder>
                <BtnHolder1>
                  <Btn to={`/user-dashboard`}>Dashboard</Btn>
                </BtnHolder1>
              </>
            ) : (
              <>
                <BtnHolder>
                  <Btn to={`/register`}>Register</Btn>
                  <span style={{ margin: "0 20px", color: "grey" }}>or</span>
                  <Btn to={`/login`}>Login</Btn>
                </BtnHolder>

                <BtnHolder1>
                  <Btn1 to={`/register`}>Register</Btn1>
                  <Btn1 to={`/login`}>Login</Btn1>
                </BtnHolder1>
              </>
            )}
          </Left>
          <Right>
            <Img src={withPhone} />
          </Right>
        </Body>
      </Page>
    </>
  );
};

export default Hero;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;

  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-1%);
      animation-timing-function: cubic-bezier(0.1, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.1, 1);
    }
  }
`;

const Right = styled.div`
  width: 650px;
  margin-right: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 650px;
`;

const BtnHolder = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 30px 0;
`;

const BtnHolder1 = styled.div`
  display: none;
  align-items: center;
  flex-direction: column;
  margin: 10px 0 30px 0;
`;

const Btn = styled(Link)`
  padding: 15px 50px;
  background-color: #043260;
  color: white;
  text-decoration: none;

  &:hover {
    border-radius: 5px;
  }
`;

const Btn1 = styled(Link)`
  padding: 15px 50px;
  background-color: #043260;
  color: white;
  text-decoration: none;

  &:hover {
    border-radius: 5px;
  }
`;

const New = styled.div`
  padding: 2px 10px;
  font-size: 12px;
  border-radius: 5px;
  margin-right: 5px;
  background-color: #043260;
  color: white;
`;

const Tab = styled.div`
  background-color: lightgray;
  width: 220px;
  align-items: center;
  padding: 5px;
  justify-content: center;
  border-radius: 3px;
  cursor: default;
  font-size: 12px;
  display: flex;
`;

const Span = styled.div`
  font-size: 20px;
`;

const Bold = styled.p`
  font-size: 70px;
  color: grey;
  font-weight: 600;

  span {
    color: #043260;
  }
`;

const Left = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  margin-right: 10px;
  justify-content: center;
  flex-direction: column;
`;

const Body = styled.div`
  width: 90%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-top: 100px;
`;

const Page = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  position: relative;
  justify-content: center;

  @media screen and (max-width: 1150px) {
    ${Body} {
      flex-direction: column;
      align-items: center;
    }

    ${Left} {
      width: 100%;
    }

    ${Span} {
      width: 70%;
    }
  }

  @media screen and (max-width: 650px) {
    ${Bold} {
      font-size: 50px;
    }

    ${Span} {
      width: 90%;
    }

    ${Right} {
      width: 400px;
      height: 400px;
    }
  }

  @media screen and (max-width: 420px) {
    ${Left} {
      align-items: center;
      text-align: center;
    }

    ${Bold} {
      font-size: 35px;
    }

    ${BtnHolder} {
      display: none;
    }

    ${Btn1} {
      margin: 10px 0;
    }

    ${BtnHolder1} {
      display: flex;
    }

    ${Right} {
      width: 300px;
    }
  }
`;
