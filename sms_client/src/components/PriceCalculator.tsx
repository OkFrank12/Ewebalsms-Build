import styled from "styled-components";
import { useState } from "react";
const PriceCalculator = () => {
  const [contact, setContact] = useState<string>("");
  const [page, setPage] = useState<string>("");

  // const charge = 3;
  const calculation = +contact * +page * 3;

  const validateInput = (e: any) => {
    const input = e.target;
    let inputValue = input.value;
    inputValue = inputValue.replace(/\D/g, "");

    inputValue = inputValue.replace(/^0+/, "");

    input.value = inputValue;
  };

  return (
    <>
      {" "}
      <Form>
        <h1>SMS Charge*</h1>
        <InputHolder>
          <p>Number of Contacts you are sending to?</p>
          <input
            type="text"
            placeholder="0"
            onInput={validateInput}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </InputHolder>
        <InputHolder>
          <p>SMS Pages used (160 characters for each page)</p>
          <input
            type="text"
            placeholder="0"
            onInput={validateInput}
            value={page}
            onChange={(e) => setPage(e.target.value)}
          />
        </InputHolder>
        <h3>Calculation*</h3>
        <InputHolder>
          <p>Unit Charge</p>
          <input disabled type="text" placeholder="3" />
        </InputHolder>
        <InputHolder>
          <p>Total Unit Charge (₦)</p>
          <input disabled type="text" value={contact && page && calculation} />
        </InputHolder>
      </Form>
    </>
  );
};

export default PriceCalculator;

const InputHolder = styled.div`
  margin: 20px 0;
  p {
    margin-bottom: 5px;
    color: grey;
  }
  input {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    font-family: Athletics;
    border: 0;
    border-radius: 5px;
    box-shadow: rgba(120, 120, 120, 0.2) 0px 2px 8px 0px;

    &:focus {
      outline: 4px solid #043260;
    }
  }
`;

const Form = styled.div`
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: all 450ms;
  &:hover {
    transform: scale(1.02);
  }

  h1,
  h3 {
    color: #043260;
  }

  @media screen and (max-width: 600px) {
    padding: 30px;
  }

  @media screen and (max-width: 600px) {
    padding: 30px;
    h1 {
      font-size: 25px;
    }

    ${InputHolder} {
      margin: 10px 0;
    }
  }
`;
