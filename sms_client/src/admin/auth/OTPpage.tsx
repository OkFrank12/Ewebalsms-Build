import { useState } from "react";
import styled from "styled-components";
import Loader from "../../static/Loader";
import { SiSecurityscorecard } from "react-icons/si";
import OTPinput from "../components/OTPinput";
import { enterOTPAdminAPI } from "../../api/AdminAPI";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const OTPpage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [load, setLoad] = useState<boolean>(false);

  const onOTPinput = (otp: any) => {
    console.log("OTP Complete", otp);
    enterOTPAdminAPI(token!, { otp }).then((res) => {
      setLoad(true);
      if (res?.status === 200) {
        Swal.fire({
          icon: "success",
          title: `${res?.data?.message}`,
          text: `A Verification Mail has been sent to you`,
        }).then(() => {
          setLoad(false);
          navigate("/otp-message");
        });
      } else if (res?.response?.status === 400) {
        Swal.fire({
          icon: "warning",
          title: `${res?.response?.data?.message}`,
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
  };

  return (
    <>
      {load && <Loader />}
      <SiSecurityscorecard
        style={{
          fontSize: "100px",
          margin: "10px 0",
          padding: "20px",
          backgroundColor: "#043260",
          color: "white",
          borderRadius: "50%",
        }}
      />
      <Title>Enter OTP Code</Title>{" "}
      <Grid>
        <OTPinput length={4} onOtpSubmit={onOTPinput} />
      </Grid>
      <Btn bg="">Verify OTP</Btn>
      {/* <Btn bg="">Verify OTP</Btn> */}
    </>
  );
};

export default OTPpage;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 10px;
`;

const Btn = styled.div<{
  bg: string;
}>`
  border: none;
  width: 100%;
  height: 50px;
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

const Title = styled.h1`
  font-size: 25px;
  color: #525151;
`;
