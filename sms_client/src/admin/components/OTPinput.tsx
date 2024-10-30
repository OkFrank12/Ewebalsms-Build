import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface iOTP {
  length: number;
  onOtpSubmit: any;
}

const OTPinput: FC<iOTP> = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs: any = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, e: any) => {
    const value = e.target.value;

    const newOTP = [...otp];

    // allow only one input
    newOTP[index] = value.substring(value.length - 1);
    setOtp(newOTP);

    // submit trigger
    const combineOTP = newOTP.join("");
    if (combineOTP.length === length) onOtpSubmit(combineOTP);

    // move to next input field if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleClick = (index: number) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1])
      inputRefs.current[otp.indexOf("")].focus();
  };
  const handleKeyDown = (index: number, e: any) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <>
      {otp.map((value, index) => (
        <Input
          type="text"
          ref={(input) => (inputRefs.current[index] = input)}
          key={index}
          value={value}
          onChange={(e) => handleChange(index, e)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
    </>
  );
};

export default OTPinput;

const Input = styled.input`
  width: 100%;
  height: 55px;
  margin: 15px 0;
  text-align: center;
  font-size: 2em;
  font-weight: 700;
  color: #043260;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 5px;
  font-family: Athletics;

  &:focus {
    outline: 4px solid #043260;
  }

  /* @media screen and (max-width: 400px) {
    width: 55px;
  } */
`;
