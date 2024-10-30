import { motion } from "framer-motion";
import styled from "styled-components";
import { sendNeedHelpMailAPI } from "../api/needHelp";
import { useState } from "react";
import Loader from "../static/Loader";
import Swal from "sweetalert2";

const ContactUsPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const populate: {}[] = [
    {
      text: "Address:",
      span: "80, Wilmer Crescent,",
      break: "Olodi Apapa, Lagos.",
    },
    {
      text: "Email:",
      span: "ewebalsmssolutions@gmail.com",
      span1: "support@ewebalsms.com",
    },
    {
      text: "Tel:",
      span: "+234 916 488 2960",
      break: "+234 903 293 1068",
    },
  ];

  return (
    <>
      {loading && <Loader />}
      <motion.div
        className="box"
        initial={{ opacity: 0, speed: 10 }}
        animate={{ opacity: 1 }}
      >
        <Body>
          <Main>
            <Details>
              <Help>Need Help ?</Help>
              <Title>Contact with us</Title>
              <Span>
                Contact us for efficient and reliable bulk SMS solutions. Our
                platform offers seamless communication with your audience,
                allowing you to easily manage and send messages to multiple
                contacts at once. Get in touch today to streamline your
                communication process and enhance your messaging strategy.
              </Span>
              <Div>
                {populate.map((el: any, idx: number) => {
                  return (
                    <Address key={idx}>
                      <Head>{el.text}</Head>
                      <span>{el.span}</span>
                      <br />
                      <span>{el.span1}</span>
                      <span>{el.break}</span>
                    </Address>
                  );
                })}
              </Div>
            </Details>
            <Forms>
              <Headings>Send Us An Email</Headings>
              <InputSet>
                <Text>User Name</Text>
                <Input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  required
                  placeholder="Username *"
                />
              </InputSet>
              <InputSet>
                <Text>Email Address</Text>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Email *"
                />
              </InputSet>
              <InputSet>
                <Text>Subject</Text>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  required
                  placeholder="Subject *"
                />
              </InputSet>
              <InputSet>
                <Text>Message</Text>
                <Input1
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Write your message *"
                />
              </InputSet>
              {!(
                userName &&
                email.endsWith(".com" || ".ng") &&
                subject &&
                message
              ) ? (
                <Btn bg="">Submit</Btn>
              ) : (
                <Btn
                  bg="1"
                  onClick={() => {
                    setLoading(true);
                    sendNeedHelpMailAPI({
                      userName,
                      email,
                      message,
                      subject,
                    }).then((res) => {
                      setLoading(false);
                      if (res?.status === 201) {
                        Swal.fire({
                          icon: "success",
                          title: `${res?.data?.message}`,
                          text: "We will get back to you",
                        }).then(() => {
                          window.location.reload();
                        });
                      } else if (res?.message) {
                        Swal.fire({
                          icon: "error",
                          title: `${res?.message}`,
                          text: "No Internet Connection",
                        });
                      }
                    });
                  }}
                >
                  Submit
                </Btn>
              )}
            </Forms>
          </Main>
        </Body>
      </motion.div>
    </>
  );
};

export default ContactUsPage;

const Div = styled.div`
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const Btn = styled.div<{
  bg: string;
}>`
  padding: 15px 20px;
  color: white;
  background-color: ${({ bg }) => (bg ? "#043260" : "#192d4237")};
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 450ms;
  cursor: pointer;

  &:hover {
    border-radius: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  outline: 0;
  border: 1px solid lightgray;
  padding-left: 20px;
  font-family: Athletics;
`;

const Input1 = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  outline: 0;
  resize: none;

  border: 1px solid lightgray;
  padding: 20px;
  font-family: Athletics;
`;

const Text = styled.div`
  color: grey;
  margin-bottom: 5px;
`;

const InputSet = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const Headings = styled.h1`
  color: #043260;
`;

const Head = styled.div`
  color: #043260;
  font-size: 20px;
  font-weight: 800;
  margin: 5px 0;
`;

const Forms = styled.div`
  width: 600px;
  padding: 50px 70px;

  min-height: 70vh;
  border-radius: 10px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: all 450ms;
  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Address = styled.div`
  color: grey;
  margin-bottom: 30px;
  margin-left: 10px;
`;

const Span = styled.div`
  color: grey;
  line-height: 1.5;
  width: 90%;
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-size: 50px;
  color: #043260;
  margin: 15px 0;
  font-weight: 800;
`;

const Help = styled.div`
  color: #043260;
  font-size: 20px;
  font-weight: 800;
`;

const Details = styled.div`
  width: 50%;
  height: 100%;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 850px) {
    flex-direction: column;

    ${Details} {
      width: 100%;
    }
  }
`;

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1050px) {
    ${Forms} {
      width: 450px;
      padding: 30px;
    }
  }

  @media screen and (max-width: 1050px) {
    ${Forms} {
      width: 370px;
    }
  }

  @media screen and (max-width: 850px) {
    ${Forms} {
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    ${Title} {
      font-size: 35px;
    }

    ${Headings} {
      font-size: 25px;
    }
  }
`;
