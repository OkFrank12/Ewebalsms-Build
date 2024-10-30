import { useEffect, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { loginUserAPI, verifyUserAPI } from "../../api/authAPI";
import Swal from "sweetalert2";
import Loader from "../../static/Loader";
import { useDispatch } from "react-redux";
import { onUserState } from "../../storeConfig/reduxState";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const { token } = useParams();
  const [view, setView] = useState<boolean>(false);
  const onViewState = () => {
    setView(!view);
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const isButtonDisabled = !(email.includes(`@gmail.com`) && password);
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    verifyUserAPI(token!).then((res) => {
      if (res?.status === 200) {
        Swal.fire({
          icon: "success",
          title: `${res?.data?.message}`,
          text: `You can login to your dashboard`,
        });
      }
    });
  }, []);

  return (
    <>
      {load && <Loader />}
      <Title>Login</Title>
      <Span>Welcome Back</Span>
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
        <Type>
          Password{" "}
          <Link style={{ textDecoration: "none" }} to={`/reset-password`}>
            {!token && <span>Forgot Password?</span>}
          </Link>
        </Type>
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
      {!isButtonDisabled ? (
        <Btn
          onClick={() => {
            setLoad(true);
            loginUserAPI({
              email,
              password,
            }).then((res) => {
              if (res?.status === 201) {
                setLoad(false);
                Swal.fire({
                  icon: "success",
                  title: `${res?.data?.message}`,
                  text: `Logged in 🚀🚀🚀`,
                }).then(() => {
                  navigate("/user-dashboard");
                  const decode: any = jwtDecode(res?.data?.data);
                  dispatch(onUserState(decode.id));
                });
              } else if (res?.response?.status === 404) {
                Swal.fire({
                  icon: "error",
                  title: `${res?.response?.data?.message}`,
                  text: `Email is not registered`,
                }).then(() => {
                  setLoad(false);
                });
                res?.response?.data?.message;
              } else if (res?.response?.status === 401) {
                Swal.fire({
                  icon: "warning",
                  title: `${res?.response?.data?.message}`,
                  text: `You have not verified your account`,
                }).then(() => {
                  setLoad(false);
                });
              } else if (res?.response?.status === 400) {
                Swal.fire({
                  icon: "warning",
                  title: `${res?.response?.data?.message}`,
                  text: `Try again or reset your password`,
                }).then(() => {
                  setLoad(false);
                });
              } else if (res?.message) {
                Swal.fire({
                  icon: "error",
                  title: "No Internet Connection",
                  text: `Please check your network`,
                }).then(() => {
                  setLoad(false);
                });
              }
            });
          }}
          bg="1"
        >
          Login Account
        </Btn>
      ) : (
        <Btn bg="">Login Account</Btn>
      )}
      <Span>
        Don't have an account?{" "}
        <Link to={`/register`} style={{ textDecoration: "none" }}>
          <span>Register</span>
        </Link>
      </Span>
    </>
  );
};

export default LoginPage;

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
  top: 25px;
  right: 0;
`;

const Icon1 = styled(AiOutlineEye)`
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: whitesmoke;
  cursor: pointer;
  top: 25px;
  right: 0;
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
  display: flex;
  font-size: 16px;
  justify-content: space-between;

  span {
    color: red;

    &:hover {
      text-decoration: underline;
    }
  }
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
