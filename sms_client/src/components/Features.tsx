import styled from "styled-components";
import { BsFillSendCheckFill } from "react-icons/bs";
import { BsCollectionFill } from "react-icons/bs";
import { FaRegWindowRestore } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import { MdWorkHistory } from "react-icons/md";

const Features = () => {
  const stateData: {}[] = [
    {
      image: <BsFillSendCheckFill />,
      text: "Send Real-Time SMS",
      tiny: "Instantly connect with your audience by sending real-time SMS, ensuring timely and impactful communication.",
    },
    {
      image: <BsCollectionFill />,
      text: "Buy SMS",
      tiny: "Seamlessly purchase SMS credits / Units online with paystack or offline with bank transfer, providing convenience for your messaging needs.",
    },
    {
      image: <FaRegWindowRestore />,
      text: "Draft SMS Messages",
      tiny: "Craft and save your messages with ease using our draft feature, ensuring efficiency in your communication strategy.",
    },
    {
      image: <FaAddressBook />,
      text: "Phone Book",
      tiny: "Effortlessly manage and organize your contacts with our intuitive phone book feature, streamlining communication for seamless interactions.",
    },
    {
      image: <LuHistory />,
      text: "SMS History",
      tiny: "Access a comprehensive record of your communication journey with our SMS History feature, providing insights and a traceable timeline of sent messages for your convenience.",
    },
    {
      image: <MdWorkHistory />,
      text: "Transactions History",
      tiny: "We offering a transparent and detailed record of your past transactions for enhanced financial management.",
    },
  ];

  return (
    <>
      <Page>
        <Body>
          <div>
            <P>
              Bulk SMS <span>Features</span>
            </P>
            <Span>
              Empower your communication strategy with our robust Bulk SMS
              features designed to enhance reach, engagement, and efficiency.
            </Span>
          </div>
          <Holder>
            {stateData &&
              stateData.map((el: any, idx: number) => {
                return (
                  <Div key={idx}>
                    <Rounded>{el.image}</Rounded>
                    <Texts>
                      <BoldTxt>{el.text}</BoldTxt>
                      <TinyTxt>{el.tiny}</TinyTxt>
                    </Texts>
                  </Div>
                );
              })}
          </Holder>
        </Body>
      </Page>
    </>
  );
};

export default Features;

const TinyTxt = styled.div`
  color: grey;
`;

const BoldTxt = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Texts = styled.div``;

const Rounded = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  border-radius: 3px;
  align-items: center;
  font-size: 30px;
  color: #043260;
  background-color: #cdcdcd;

  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-5%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

const Holder = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`;

const Span = styled.div`
  font-size: 20px;
  width: 65%;
`;

const Div = styled.div`
  background-color: whitesmoke;
  min-height: 100px;
  padding: 10px;
`;

const P = styled.h1`
  font-size: 50px;

  span {
    color: #043260;
  }
`;

const Body = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
`;

const Page = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media screen and (max-width: 900px) {
    ${Holder} {
      grid-template-columns: repeat(2, 1fr);
    }

    ${Span} {
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    ${Holder} {
      grid-template-columns: repeat(1, 1fr);
    }

    ${P} {
      font-size: 40px;
    }

    ${Rounded} {
      height: 50px;
      width: 50px;
    }
  }
`;
