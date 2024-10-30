import styled from "styled-components";
import SmallTxt from "../../../components/SmallTxt";
import { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Loader from "../../../static/Loader";
import { useViewAllUsers } from "../../../hooks/customHooks";
import { manualCreditAUserWithUnitsAPI } from "../../../api/AdminAPI";

const CreditAUser = () => {
  const [load, setLoad] = useState<boolean>(false);
  const [units, setUnits] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const admin = useSelector((state: any) => state.admin);
  const { data } = useViewAllUsers();

  const validateInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };

  const arrOfEmails = data?.map((el: any) => {
    return el.email;
  });

  const sortedData = arrOfEmails?.sort();

  return (
    <Body>
      {load && <Loader />}
      <Main>
        <SmallTxt
          p="Credit A User"
          span="You can manually credit a user here."
        />
        <Center>
          <Holder>
            <P>Credit A User</P>
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
              <Text>SMS Credit</Text>
              <Input1
                value={units}
                onInput={validateInput}
                onChange={(e: any) => setUnits(e.target.value)}
              />
            </InputBloc>
            <br />
            {!email ? (
              <Btn bg="">Credit User</Btn>
            ) : (
              <Btn
                bg="1"
                onClick={() => {
                  setLoad(true);
                  manualCreditAUserWithUnitsAPI(admin, { email, units }).then(
                    (res: any) => {
                      if (res?.status === 200) {
                        Swal.fire({
                          icon: "success",
                          title: `${res?.data?.message}`,
                          text: `A Credit Mail has been sent to user.`,
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
                CREDIT USER
              </Btn>
            )}
          </Holder>
        </Center>
      </Main>
    </Body>
  );
};

export default CreditAUser;

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

// const Span = styled.div`
//   color: orange;
//   margin-bottom: 10px;
// `;

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
  min-height: 200px;
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
