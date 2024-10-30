import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import Loader from "../../static/Loader";
import { adminRegisterAPI } from "../../api/AdminAPI";

const AdminRegisterPage = () => {
  const navigate = useNavigate();
  const validateInput = (e: any) => {
    const input = e.target;
    let inputValue = input.value;
    inputValue = inputValue.replace(/\D/g, "");

    inputValue = inputValue.replace(/^0+/, "");

    input.value = inputValue;
  };

  const [view, setView] = useState<boolean>(false);
  const [view1, setView1] = useState<boolean>(false);
  const onViewState = () => {
    setView(!view);
  };
  const onViewState1 = () => {
    setView1(!view1);
  };

  const [load, setLoad] = useState<boolean>(false);
  const [adminName, setAdminName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [adminFullName, setAdminFullName] = useState<string>("");

  const isButtonDisabled = !(
    adminName &&
    adminFullName &&
    contact &&
    email &&
    password === confirmPassword &&
    confirmPassword === password
  );
  return (
    <>
      {load && <Loader />}
      <Title>Admin Register</Title>
      <Span>Create an admin account to manage operations</Span>
      <InputHolder>
        <Type>Full Name</Type>
        <Input
          type="text"
          value={adminFullName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setAdminFullName(e.target.value);
          }}
          required
          placeholder="enter your full name"
        />
      </InputHolder>
      <InputHolder>
        <Type>User Name</Type>
        <Input
          type="text"
          value={adminName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setAdminName(e.target.value);
          }}
          required
          placeholder="enter your user Name"
        />
      </InputHolder>
      <InputHolder>
        <Type>Email</Type>
        <Input
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          required
          placeholder="enter your email address"
        />
      </InputHolder>
      <InputHolder>
        <Type>Password</Type>
        <Input
          type={!view ? "password" : "text"}
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="type your password"
        />
        {view ? (
          <Icon onClick={onViewState} size={20} color="grey" />
        ) : (
          <Icon1 onClick={onViewState} size={20} color="grey" />
        )}
      </InputHolder>
      <InputHolder>
        <Type>Confirm Password</Type>
        <Input
          type={!view1 ? "password" : "text"}
          required
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          placeholder="confirm your password"
        />
        {view1 ? (
          <Icon onClick={onViewState1} size={20} color="grey" />
        ) : (
          <Icon1 onClick={onViewState1} size={20} color="grey" />
        )}
      </InputHolder>
      <InputHolder>
        <Num>+234</Num>
        <Type>Tel</Type>
        <Input1
          onInput={validateInput}
          required
          value={contact}
          onChange={(e: any) => {
            setContact(e.target.value);
          }}
          maxLength={14}
          placeholder="e.g: 81356543332"
        />
      </InputHolder>
      {!isButtonDisabled ? (
        <Btn
          onClick={() => {
            setLoad(true);
            adminRegisterAPI({
              adminName,
              email,
              password,
              contact,
              adminFullName,
            }).then((res) => {
              if (res?.status === 201) {
                setLoad(false);
                Swal.fire({
                  icon: "success",
                  title: `${res?.data?.message}`,
                  text: `An OTP Mail has been sent to you`,
                }).then(() => {
                  navigate("/message");
                });
              } else if (res?.response?.status === 409) {
                setLoad(false);
                Swal.fire({
                  icon: "warning",
                  title: `${res?.response?.data?.message}`,
                  text: `Email already registered`,
                });
              } else if (res?.message) {
                setLoad(false);
                Swal.fire({
                  icon: "error",
                  title: "No Internet Connection",
                  text: `Please check your network`,
                });
              }
            });
          }}
          bg="1"
        >
          Create Admin Account
        </Btn>
      ) : (
        <Btn bg="">Create Admin Account</Btn>
      )}
      <Span>
        Already have an account?{" "}
        <Link style={{ textDecoration: "none" }} to={`/admin-login-page`}>
          <span>Login</span>
        </Link>
      </Span>
    </>
  );
};

export default AdminRegisterPage;

const Btn = styled.div<{
  bg: string;
}>`
  border: none;
  width: 100%;
  height: 50px;
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
  font-size: 17px;
  cursor: pointer;
  background-color: ${({ bg }) => (bg ? "#043260" : "#192d4237")};
  transition: all 400ms;

  &:hover {
    border-radius: 5px;
  }
`;

const Icon = styled(AiOutlineEyeInvisible)`
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: whitesmoke;
  cursor: pointer;
  top: 26.5px;
  right: 0;
`;

const Icon1 = styled(AiOutlineEye)`
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: whitesmoke;
  cursor: pointer;
  top: 26.5px;
  right: 0;
`;

const Num = styled.text`
  position: absolute;
  width: 60px;
  height: 40px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 26.5px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  font-family: athletics;
  padding-left: 10px;
  border: 1px solid lightgray;
  outline: 0;
  font-size: 17px;

  ::placeholder {
    color: lightgray;
  }
`;

const Input1 = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  font-family: athletics;
  padding-left: 70px;
  border: 1px solid lightgray;
  outline: 0;
  font-size: 16px;

  ::placeholder {
    color: lightgray;
  }
`;

const Type = styled.span`
  font-weight: bold;
  color: #525151;
  margin-bottom: 5px;
`;

const InputHolder = styled.span`
  width: 100%;
  margin: 10px 0;
  position: relative;
  display: flex;
  font-size: 17.5px;
  flex-direction: column;
`;

const Span = styled.span`
  color: darkgray;
  text-align: center;
  font-size: 16.5px;

  span {
    color: #043260;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Title = styled.h1`
  font-size: 25px;
  color: #525151;
`;
