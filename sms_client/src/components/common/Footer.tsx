import styled from "styled-components";
import flag from "../../assets/ng.png";
import { Link } from "react-router-dom";
import Logo from "../../static/Logo";
import { ScrollToTop } from "./ScrollToTop";
import ewebalLogoWhite from "../../assets/Ewebal_Logo_white.png";

const Footer = () => {
  return (
    <>
      <br />
      <Parent>
        <Child>
          <div>
            <Logo color="" image={ewebalLogoWhite} />
            <Span>
              Empower your communication with Ewebal Bulk SMS – Where Efficiency
              Meets Impact. Elevate your outreach, engage seamlessly, and drive
              results with our reliable and versatile bulk SMS solutions.
              Transform the way you connect, one message at a time.
            </Span>
          </div>
          <Foots>
            <Bold>About Us</Bold>
            <Navs to={`/contact-us`} onClick={ScrollToTop}>
              Contacts
            </Navs>
            <Navs to={`/pricings`} onClick={ScrollToTop}>
              Pricing
            </Navs>
            <Navs to={`/pricing-rates`} onClick={ScrollToTop}>
              SMS Rates
            </Navs>
            <Navs to={`/sms-api-page`} onClick={ScrollToTop}>
              SMS API
            </Navs>
          </Foots>
          <Foots1>
            <Img src={flag} />
            <br />
            <br />
            <Bold>LAGOS, NG</Bold>
            <br />
            <Address>80, Wilmer Crescent, Olodi Apapa, Lagos.</Address>
            <br />
            <Address>
              <li>+234 916 488 2960 </li>
              <li>+234 903 293 1068</li>
            </Address>
          </Foots1>
        </Child>
        <span
          style={{
            width: "100%",
            display: "flex",
            fontSize: "14px",
            marginBottom: "10px",
            justifyContent: "center",
            textAlign: "center",
            padding: "10px",
          }}
        >
          © 2024 Ewebal SMS Solutions Limited. | All Rights Reserved{" "}
        </span>
      </Parent>
    </>
  );
};

export default Footer;

const Address = styled.div`
  li {
    letter-spacing: 2px;
    list-style-type: circle;
  }
`;

const Img = styled.img``;

const Navs = styled(Link)`
  margin: 20px 0;
  cursor: pointer;
  text-decoration: none;
  color: white;
  transition: all 0.75s;

  &:hover {
    color: #d6d5d5;
  }
`;

const Bold = styled.h3``;

const Foots = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Foots1 = styled.div``;

const Span = styled.div`
  padding-right: 5px;
  font-size: 20px;
  margin-top: 10px;
`;

const Child = styled.div`
  width: 90%;
  padding: 20px 0;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  display: grid;
  padding-right: 15px;
  margin-top: 40px;
`;

const Parent = styled.div`
  color: white;
  background-color: #043260;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 400px;

  @media screen and (max-width: 1000px) {
    ${Span} {
      font-size: 16px;
      line-height: 1.7;
    }
  }

  @media screen and (max-width: 800px) {
    ${Child} {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    ${Foots} {
      align-items: flex-start;
    }
  }

  @media screen and (max-width: 600px) {
    ${Child} {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
