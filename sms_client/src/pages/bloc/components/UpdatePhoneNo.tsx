import styled from "styled-components";
import SmallTxt from "../../../components/SmallTxt";
import { useState } from "react";
import { updatePersonalInfoAPI } from "../../../api/authAPI";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Loader from "../../../static/Loader";
import { useNavigate } from "react-router-dom";

const UpdatePhoneNo = () => {
  const user = useSelector((state: any) => state.user);
  const validateInput = (e: any) => {
    const input = e.target;
    let inputValue = input.value;
    inputValue = inputValue.replace(/\D/g, "");

    inputValue = inputValue.replace(/^0+/, "");

    input.value = inputValue;
  };

  const noNum = (e: any) => {
    const input = e.target;
    const inputValue = input.value;
    input.value = inputValue.replace(/[^a-zA-Z\s]/g, "");
  };

  const [userName, setUserName] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);

  const isButtonDisabled = !(userName && fullName && phoneNo);

  const navigate = useNavigate();
  return (
    <>
      {load && <Loader />}
      <Body>
        <Main>
          <Top>
            <SmallTxt
              p="Update Personal Info"
              span="Edit and configure alternative personal details."
            />
          </Top>
          <Box>
            <h1 style={{ color: "#043260" }}>Update Info</h1>
            <InputSection>
              <Text>User Name</Text>
              <Input
                value={userName}
                onChange={(e: any) => {
                  setUserName(e.target.value);
                }}
                required
                onInput={noNum}
                placeholder="edit user name"
              />
            </InputSection>
            <InputSection>
              <Text>Full Name</Text>
              <Input
                value={fullName}
                onChange={(e: any) => {
                  setFullName(e.target.value);
                }}
                required
                onInput={noNum}
                placeholder="edit full name"
              />
            </InputSection>
            <InputSection>
              <Text>Phone No.</Text>
              <Input
                required
                value={phoneNo}
                onChange={(e: any) => {
                  setPhoneNo(e.target.value);
                }}
                placeholder="2349165812634"
                onInput={validateInput}
              />
            </InputSection>
            <InputSection>
              <Text>Email Address</Text>
              <Input defaultValue={"cfoonyemmemme@gmail.com"} disabled />
            </InputSection>
            {isButtonDisabled ? (
              <Btn bg="">Update Info</Btn>
            ) : (
              <Btn
                bg="1"
                onClick={() => {
                  setLoad(true);
                  updatePersonalInfoAPI(user, {
                    userName,
                    fullName,
                    phoneNo,
                  }).then((res) => {
                    console.log(res);
                    if (res?.status === 200) {
                      Swal.fire({
                        icon: "success",
                        title: `${res?.data?.message}`,
                        text: "You have changed your profile settings",
                      }).then(() => {
                        setLoad(false);
                        navigate("/user-dashboard/profile-info");
                      });
                    } else if (res?.response?.status === 500) {
                      Swal.fire({
                        icon: "warning",
                        title: `${res?.response?.data.message}`,
                        text: "Check your internet connection",
                      }).then(() => {
                        setLoad(false);
                      });
                    } else if (res?.message) {
                      Swal.fire({
                        icon: "error",
                        title: `${res?.message}`,
                        text: "Check your internet connection",
                      }).then(() => {
                        setLoad(false);
                      });
                    }
                  });
                }}
              >
                Update Info
              </Btn>
            )}
          </Box>
        </Main>
      </Body>
    </>
  );
};

export default UpdatePhoneNo;

const Top = styled.div`
  width: 100%;
`;

const Btn = styled.div<{
  bg: string;
}>`
  width: 100%;
  height: 50px;
  background-color: ${({ bg }) => (bg ? "#043260" : "#192d4237")};
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 25px;
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
  border: 0;
  font-family: Athletics;
  margin-top: 5px;
  border-radius: 5px;
  cursor: pointer;
  padding-left: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:focus {
    outline: 4px solid #043260;
  }
`;

const Text = styled.div``;

const InputSection = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const Box = styled.div`
  width: 550px;
  font-size: 15px;
  background-color: white;
  padding: 30px;
  min-height: 400px;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (max-width: 810px) {
    width: 100%;
    padding: 20px;
  }
`;

const Main = styled.div`
  width: 97%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Body = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;
