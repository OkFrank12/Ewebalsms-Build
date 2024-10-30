import styled from "styled-components";
import SmallTxt from "../../../components/SmallTxt";
import { useState } from "react";
import { sourceWhitelistAPI } from "../../../api/whitelistAPI";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Loader from "../../../static/Loader";

const WhitelistSection = () => {
  const [load, setLoad] = useState<boolean>(false);
  const [senderName, setSenderName] = useState<string>("");
  const [ip, setIp] = useState<string>("");
  const user = useSelector((state: any) => state.user);

  const validateInput = (e: any) => {
    const input = e.target;
    let inputValue = input.value;
    inputValue = inputValue.replace(/[^0-9.]/g, "");

    input.value = inputValue;
  };

  return (
    <Body>
      {load && <Loader />}
      <Main>
        <SmallTxt
          p="Source / IP Whitelisting"
          span="Whitelist your Sender Name and IP Address in other to send sms."
        />
        <Center>
          <Holder>
            <P>Source Whitelist</P>
            <Span>
              <p>
                STEP 1: Input your sender name or id. If you are whitelisting
                more than one sender id or name, seperate each sender id with a
                comma.
              </p>
              <br />
              <p>
                STEP 2: Ensure that the maximum length of the sender id does not
                surpass 11.
              </p>
              <br />
              <p>STEP 3: Also, Note that whitespaces are included.</p>
              <br />
            </Span>
            <InputBloc>
              <Text>Sender Name / ID</Text>
              <Input1
                value={senderName}
                onChange={(e: any) => setSenderName(e.target.value)}
              />
            </InputBloc>
            <br />
            {senderName.length < 5 ? (
              <Btn bg="">Send for whitelisting</Btn>
            ) : (
              <Btn
                bg="1"
                onClick={() => {
                  sourceWhitelistAPI(user, { senderName }).then((res: any) => {
                    if (res) {
                      Swal.fire({
                        icon: "success",
                        title: `Sender IDs sent`,
                        timer: 3000,
                        timerProgressBar: true,
                        text: `Sender ID has been sent for whitelisting. You will get a mail for successful whitelist within 24 hours.`,
                      });
                      setLoad(false);
                    } else {
                      Swal.fire({
                        icon: "error",
                        title: `Credentials Error`,
                        text: `Check your credentials or network connectivity`,
                        timer: 3000,
                        timerProgressBar: true,
                      });
                      setLoad(false);
                    }
                  });
                }}
              >
                Send for whitelisting
              </Btn>
            )}
          </Holder>
          <Holder>
            <P>IP Address Whitelist</P>
            <Span>
              <p>
                STEP 1: Visit https://whoer.net/ to get your Ipv4 address and
                paste here for whitelisting.
              </p>
              <br />
              <p>
                STEP 2: Anytime you Change Internet Provider or sim card for
                browsing, you must whitelist the IP.
              </p>
              <br />
              <p>
                STEP 3: To avoid STEP 2, you will need to provide a public
                static ip address.
              </p>
              <br />
            </Span>
            <InputBloc>
              <Text>IP Address</Text>
              <Input1
                value={ip}
                onInput={validateInput}
                onChange={(e: any) => setIp(e.target.value)}
              />
            </InputBloc>
            <br />
            {ip.length < 10 ? (
              <Btn bg="">Send for whitelisting</Btn>
            ) : (
              <Btn
                bg="1"
                onClick={() => {
                  sourceWhitelistAPI(user, { ip }).then((res: any) => {
                    if (res) {
                      Swal.fire({
                        icon: "success",
                        title: `Ip Address sent`,
                        text: `Ip Address has been sent for whitelisting. You will get a mail for successful whitelist within 24 hours.`,
                      });
                      setLoad(false);
                    } else {
                      Swal.fire({
                        icon: "error",
                        title: `Credentials Error`,
                        text: `Check your credentials or network connectivity`,
                      });
                      setLoad(false);
                    }
                  });
                }}
              >
                Send for whitelisting
              </Btn>
            )}
          </Holder>
        </Center>
      </Main>
    </Body>
  );
};

export default WhitelistSection;

const Btn = styled.div<{
  bg: string;
}>`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  color: white;
  background-color: ${({ bg }) => (bg ? "#043260" : "#192d4237")};
  cursor: pointer;
  &:hover {
    border-radius: 5px;
  }
`;

const Text = styled.div``;

const Input1 = styled.input`
  height: 40px;
  margin-top: 10px;
  resize: none;
  padding: 10px;
  font-family: Athletics;

  border: 0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:focus {
    outline: 4px solid #043260;
  }
`;

const InputBloc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Span = styled.div`
  color: orange;
  margin-bottom: 10px;
`;

const P = styled.h3`
  font-size: 18px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const Holder = styled.div`
  width: 600px;
  min-height: 310px;
  padding: 20px;
  margin: 10px;
  font-size: 13px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

const Main = styled.div`
  width: 97%;
  height: 100%;
  margin-top: 20px;
`;

const Body = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;
