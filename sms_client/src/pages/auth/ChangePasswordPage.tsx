import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import styled from "styled-components";
import Swal from "sweetalert2";
import { changeUserPasswordAPI } from "../../api/authAPI";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../static/Loader";

const ChangePasswordPage = () => {
  const { token } = useParams();
  const [view, setView] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const onViewState = () => {
    setView(!view);
  };

  return (
    <>
      {load && <Loader />}
      <Title>Change Password</Title>
      <Span>Welcome Back</Span>
      <InputHolder>
        <Type>Password</Type>
        <Input
          type={!view ? "password" : "text"}
          required
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          placeholder="type your password"
        />
        {view ? (
          <Icon onClick={onViewState} size={20} color="grey" />
        ) : (
          <Icon1 onClick={onViewState} size={20} color="grey" />
        )}
      </InputHolder>
      {!(password && password.length > 5) ? (
        <Btn bg="">Change Password</Btn>
      ) : (
        <Btn
          bg="1"
          onClick={() => {
            setLoad(true);
            changeUserPasswordAPI(token!, { password }).then((res: any) => {
              setLoad(false);
              if (res?.status === 200) {
                Swal.fire({
                  icon: "success",
                  title: `${res?.data?.message}`,
                  text: "Your password has been changed",
                }).then(() => {
                  navigate("/login");
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
          Change Password
        </Btn>
      )}
    </>
  );
};

export default ChangePasswordPage;

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
  justify-content: space-between;
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
