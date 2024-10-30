import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Logo from "../../static/Logo";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { ScrollToTop } from "./ScrollToTop";
import ewebalLogo from "../../assets/Ewebal_Logo.png";
import { useSelector } from "react-redux";
import { useViewOneUser } from "../../hooks/customHooks";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  let menuRef: React.MutableRefObject<any> = useRef();
  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const user = useSelector((state: any) => state.user);
  const { data } = useViewOneUser(user);

  return (
    <>
      <Body>
        <Main ref={menuRef}>
          <Logo color="1" image={ewebalLogo} />
          <RoutersPanel>
            <Routes to={`/`} onClick={ScrollToTop}>
              Home
            </Routes>
            <Routes to={`/contact-us`} onClick={ScrollToTop}>
              Contact
            </Routes>
            <Routes to={`/pricings`} onClick={ScrollToTop}>
              Pricing
            </Routes>
            <Routes to={`/pricing-rates`} onClick={ScrollToTop}>
              SMS Rates
            </Routes>
            <Routes to={`/sms-api-page`} onClick={ScrollToTop}>
              Sms API
            </Routes>
            {data?.loginStatus ? (
              <Btn to={`/user-dashboard`}>Dashboard</Btn>
            ) : (
              <Btn to={`/login`}>Login</Btn>
            )}
          </RoutersPanel>
          {isOpen ? (
            <Icon size={20} onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <Icon1 size={20} onClick={() => setIsOpen(!isOpen)} />
          )}
          {isOpen && (
            <Div>
              <Routes to={`/`} onClick={ScrollToTop}>
                Home
              </Routes>
              <br />
              <Routes to={`/contact-us`} onClick={ScrollToTop}>
                Contact
              </Routes>{" "}
              <br />
              <Routes to={`/pricings`} onClick={ScrollToTop}>
                Pricing
              </Routes>
              <br />
              <Routes to={`/pricing-rates`} onClick={ScrollToTop}>
                SMS Rates
              </Routes>
              <br />
              <Routes to={`/sms-api-page`} onClick={ScrollToTop}>
                Sms API
              </Routes>
              <br />
              {data?.loginStatus ? (
                <BtnMobile to={`/user-dashboard`}>Dashboard</BtnMobile>
              ) : (
                <BtnMobile to={`/login`}>Login</BtnMobile>
              )}
            </Div>
          )}
        </Main>
      </Body>
    </>
  );
};

export default Header;

const Btn = styled(Link)`
  padding: 15px 50px;
  background-color: #043260;
  color: white;
  text-decoration: none;
  margin-left: 15px;

  &:hover {
    border-radius: 5px;
  }
`;

const BtnMobile = styled(Link)`
  padding: 15px 50px;
  background-color: #043260;
  color: white;
  text-decoration: none;
  text-align: center;
  &:hover {
    border-radius: 5px;
  }
`;

const Icon = styled(AiOutlineClose)`
  cursor: pointer;
  background-color: whitesmoke;
  display: none;
  width: 45px;
  height: 45px;
  padding: 10px;
`;

const Icon1 = styled(AiOutlineMenu)`
  cursor: pointer;
  background-color: whitesmoke;
  display: none;
  width: 45px;
  height: 45px;
  padding: 10px;
`;

const Div = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 250px;
    background-color: whitesmoke;
    padding: 10px;
    position: absolute;
    min-height: 200px;
    right: 0;
    top: 70px;
    opacity: 1;
  }
`;

const Routes = styled(Link)`
  margin: 0 20px;
  text-decoration: none;
  cursor: pointer;
  color: grey;
  transition: all 400ms;

  &:focus {
    color: #414040;
    font-weight: 700;
  }

  &:hover {
    color: #043260;
  }

  @media screen and (max-width: 1000px) {
    margin: 0;

    &:hover {
      color: black;
    }
  }
`;

const RoutersPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
`;

const Body = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  background: rgba(255, 255, 255, 0.25);
  z-index: 82038102;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    ${Icon} {
      display: block;
    }

    ${Icon1} {
      display: block;
    }
  }
`;
