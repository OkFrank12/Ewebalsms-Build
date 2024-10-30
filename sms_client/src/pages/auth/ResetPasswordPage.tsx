import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../static/Loader";
import { resetUserPasswordAPI } from "../../api/authAPI";
import Swal from "sweetalert2";

const ResetPasswordPage = () => {
  const [load, setLoad] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  return (
    <>
      {load && <Loader />}
      <Title>Reset</Title>
      <Span>Hello !</Span>
      <InputHolder>
        <Type>Email</Type>
        <Input
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          type="email"
          required
          placeholder="enter your email address"
        />
      </InputHolder>
      {!(
        (email && email.includes("@gmail.com")) ||
        email.includes(".ng") ||
        email.includes(".com")
      ) ? (
        <Btn bg="">Verify Reset</Btn>
      ) : (
        <Btn
          bg="1"
          onClick={() => {
            setLoad(true);
            resetUserPasswordAPI({ email }).then((res: any) => {
              setLoad(false);
              if (res?.status === 200) {
                Swal.fire({
                  icon: "success",
                  title: `Verify To Reset 🚀🚀🚀`,
                  text: `${res?.data?.message} to your mail`,
                }).then(() => {
                  navigate("/reset-message");
                });
              } else if (res?.response?.status === 401) {
                Swal.fire({
                  icon: "warning",
                  title: `${res?.response?.data?.message}`,
                  text: `Visit mail for Reset Password Verification`,
                });
              } else if (res?.response?.status === 404) {
                Swal.fire({
                  icon: "warning",
                  title: `${res?.response?.data?.message}`,
                  text: `This email is not in our record`,
                });
              } else if (res?.message) {
                Swal.fire({
                  icon: "error",
                  title: "No Internet Connection",
                  text: `Please check your network`,
                });
              }
            });
          }}
        >
          Verify Reset
        </Btn>
      )}
      <Span>
        Just remembered?{" "}
        <Link to={`/login`} style={{ textDecoration: "none" }}>
          <span>Login</span>
        </Link>
      </Span>
    </>
  );
};

export default ResetPasswordPage;

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
