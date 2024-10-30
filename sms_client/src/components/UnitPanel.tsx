import styled from "styled-components";
import SmallTxt from "./SmallTxt";
import { useEffect, useState } from "react";
import { buySmsWithPayStackAPI, verifyPayStackPaymentAPI } from "../api/smsAPI";
import { useSelector } from "react-redux";
import { useViewOneUser } from "../hooks/customHooks";

const UnitPanel = () => {
  const validateInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };

  const [units, setUnits]: any = useState<number>(0);

  const [stateURL, setStateURL] = useState<string>("");
  const user = useSelector((state: any) => state.user);
  const { data } = useViewOneUser(user);

  useEffect(() => {
    if (stateURL === "") {
      return;
    } else {
      window.location.assign(stateURL);
    }
  }, [stateURL]);

  const fixed = (150 + +units + (+units * 1.5) / 100).toFixed(2);

  if (localStorage.getItem("reference:") === null) {
    localStorage.setItem("reference:", "data");
    localStorage.setItem("userID:", user);
  }

  useEffect(() => {
    verifyPayStackPaymentAPI(
      localStorage.getItem("reference:")!,
      localStorage.getItem("userID:")!,
      {
        units: localStorage.getItem("units:"),
      }
    ).then(() => {
      localStorage.setItem("units:", "0");
      localStorage.setItem("reference:", localStorage.getItem("reference:")!);
    });
  }, []);

  return (
    <>
      <SmallTxt span="Purchase Units as you use." p="Buy Instant Units" />
      <InputSection>
        <Text>Payment Method</Text>
        <Section>
          <Options>Paystack Payment (NG)</Options>
        </Section>
      </InputSection>
      <InputSection>
        <Text>Units</Text>
        <Input
          value={units}
          onChange={(e: any) => {
            setUnits(e.target.value);
          }}
          required
          placeholder="e.g: 500"
          onInput={validateInput}
        />
      </InputSection>
      <InputSection>
        <Text>Amount</Text>
        <Input placeholder={units < 100 ? "0" : units} disabled />
      </InputSection>
      <InputSection>
        <Text>Cost of Transaction</Text>
        <Input
          placeholder={
            units >= 100 ? `${(150 + (+units * 1.5) / 100).toFixed(2)}` : "0"
          }
          disabled
        />
      </InputSection>
      <InputSection>
        <Text>Price Per Unit</Text>
        <Input value={3} disabled />
      </InputSection>
      <InputSection>
        <Text>Total</Text>
        <Input
          placeholder={`${(150 + +units + (+units * 1.5) / 100).toFixed(2)} `}
          disabled
        />
      </InputSection>
      <Info>
        Purchasing instant units for SMS messages is a straightforward process
        that allows individuals or businesses to acquire a predefined quantity
        of text message credits for immediate use. These units are essentially
        prepaid credits that can be used to send SMS (Short Message Service)
        messages to mobile phones.
      </Info>
      {units > 99 ? (
        <Btn
          bg="1"
          onClick={() => {
            buySmsWithPayStackAPI(data?.email, Number(fixed), units).then(
              (res: any) => {
                setStateURL(res?.data?.authorization_url);
                localStorage.setItem("reference:", res?.data?.reference);
                localStorage.setItem("userID:", data?._id);
                localStorage.setItem("units:", units);
              }
            );
          }}
        >
          Buy Instant Unit
        </Btn>
      ) : (
        <Btn bg="">100 units and above</Btn>
      )}
    </>
  );
};

export default UnitPanel;

const Info = styled.div`
  width: 100%;
  text-align: center;
  color: grey;
  margin-top: 10px;
  line-height: 2.03;
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
  cursor: pointer;
  margin-top: 15px;
  align-items: center;
  transition: all 450ms;

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

const Options = styled.option``;

const Section = styled.select`
  width: 100%;
  height: 40px;
  border: 0;
  font-family: Athletics;
  margin-top: 5px;
  border-radius: 5px;
  cursor: pointer;
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
