import styled from "styled-components";
import SmallTxt from "../../../components/SmallTxt";
import { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Loader from "../../../static/Loader";
import { useViewAllUsers } from "../../../hooks/customHooks";
import { addWhitelistedSenderIDAPI } from "../../../api/AdminAPI";

const WhiteListAction = () => {
  const [load, setLoad] = useState<boolean>(false);
  const [senderName, setSenderName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const admin = useSelector((state: any) => state.admin);
  const { data } = useViewAllUsers();

  const arrOfEmails = data?.map((el: any) => {
    return el.email;
  });

  const sortedData = arrOfEmails?.sort();

  return (
    <Body>
      {load && <Loader />}
      <Main>
        <SmallTxt
          p="Whitelist Sender ID"
          span="Whitelist a User's Sender ID or Ip Address."
        />
        <Center>
          <Holder>
            <P>Source Whitelist</P>
            <Span>
              <p>
                STEP 1: Input sender requested sender Id. If you are
                whitelisting more than one sender id or name, seperate each
                sender id with a comma.
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
              <Text>Users</Text>
              <Select
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              >
                <option value="" disabled>
                  --- Select user ---
                </option>
                {sortedData?.map((el: any, idx: number) => (
                  <option key={idx} value={el}>
                    {el}
                  </option>
                ))}
              </Select>
            </InputBloc>
            <InputBloc>
              <Text>Sender Name / ID</Text>
              <Input1
                value={senderName}
                onChange={(e: any) => setSenderName(e.target.value)}
              />
            </InputBloc>
            <br />
            {senderName.length < 5 || !email ? (
              <Btn bg="">Send for whitelisting</Btn>
            ) : (
              <Btn
                bg="1"
                onClick={() => {
                  setLoad(true);
                  addWhitelistedSenderIDAPI(admin, { email, senderName }).then(
                    (res: any) => {
                      if (res?.status === 200) {
                        Swal.fire({
                          icon: "success",
                          title: `${res?.data?.message}`,
                          timer: 3000,
                          timerProgressBar: true,
                          text: `A Mail will be sent to the user for whitelist confirmation`,
                        }).then(() => {
                          window.location.reload();
                        });
                        setLoad(false);
                      } else if (res?.message) {
                        Swal.fire({
                          icon: "error",
                          title: `Credentials Error`,
                          text: `Check your credentials or network connectivity`,
                          timer: 3000,
                          timerProgressBar: true,
                        });
                        setLoad(false);
                      }
                    }
                  );
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

export default WhiteListAction;

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

const Select = styled.select`
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
