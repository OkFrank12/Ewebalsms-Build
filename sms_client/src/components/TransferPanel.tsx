import styled from "styled-components";
import SmallTxt from "./SmallTxt";
import { useState } from "react";
import { submitTransferDetailsAPI } from "../api/smsAPI";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loader from "../static/Loader";

const TransferPanel = () => {
  const validInput = (event: any) => {
    const input = event.target;
    const inputVal = input.value;

    input.value = inputVal.replace(/\D/g, "");
  };
  const validateInput = (e: any) => {
    const input = e.target;
    let inputValue = input.value;
    inputValue = inputValue.replace(/\D/g, "");

    inputValue = inputValue.replace(/^0+/, "");

    input.value = inputValue;
  };

  const getMaxDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate());

  const defaultDateString = defaultDate.toISOString().split("T")[0];

  const [selectedFile, setSelectedFile]: any = useState(null);
  const user = useSelector((state: any) => state.user);
  const [depositorName, setDepositorName]: any = useState<string>("");
  const [amountDeposited, setAmountDeposited]: any = useState<number>();
  const [phoneNo, setPhoneNo]: any = useState<string>("");
  const [tellerId, setTellerId]: any = useState<string>("");
  const [transactionDate, setTransactionDate]: any = useState<string>("");
  const [bankDeposited, setBankDeposited]: any =
    useState<string>("Moniepoint MFB");
  const [imageURL, setImageURL] = useState<any>("");
  const [image, setImage] = useState<any>();

  const handleFileChange = (event: any) => {
    const fileInput = event.target.files;
    image;
    if (fileInput.length > 0) {
      // Update the state with the selected file
      setSelectedFile(fileInput[0]);
      const readFile = URL.createObjectURL(fileInput[0]);
      setImageURL(fileInput[0]);
      setImage(readFile);
    } else {
      // No file selected, set state to null
      setSelectedFile(null);
    }
  };

  const formData = new FormData();
  formData.append("depositorName", depositorName);
  formData.append("amountDeposited", amountDeposited);
  formData.append("phoneNo", phoneNo);
  formData.append("tellerId", tellerId);
  formData.append("transactionDate", transactionDate);
  formData.append("bankDeposited", bankDeposited);
  formData.append("image", imageURL);

  const [load, setLoad] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      {load && <Loader />}
      <SmallTxt
        p="Pay Via Bank Deposit"
        span="Purchase Units through Bank Deposits."
      />
      <br />
      <Note>
        Note: <li>Pay to the account depicted above on the screen.</li>
        <li>
          Ensure to crosscheck all your deposit credentials before submitting
          payment details.
        </li>
        <li>We support only .pdf, .jpg and .png uploads.</li>
      </Note>
      <br />
      <div style={{ display: "flex", alignItems: "center" }}>
        <label
          htmlFor="pdf"
          style={{
            cursor: "pointer",
            backgroundColor: "#043260",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Upload Receipt
        </label>
        <Render>{selectedFile && <p>Selected file: {imageURL.name}</p>}</Render>
      </div>
      <input
        type="file"
        id="pdf"
        accept=".pdf, .jpg, .png"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <InputSection>
        <Text>Depositor's Name</Text>
        <Input
          type="text"
          value={depositorName}
          onChange={(e) => {
            setDepositorName(e.target.value);
          }}
          placeholder="Depositor's Name goes here"
          required
        />
      </InputSection>
      <InputSection>
        <Text>Amount Deposited</Text>
        <Input
          value={amountDeposited}
          onChange={(e: any) => {
            setAmountDeposited(e.target.value);
          }}
          placeholder="Enter Amount deposited"
          onInput={validInput}
          required
        />
      </InputSection>
      <InputSection>
        <Text>Phone No.</Text>
        <Input
          type="text"
          value={phoneNo}
          onChange={(e: any) => {
            setPhoneNo(e.target.value);
          }}
          onInput={validateInput}
          placeholder="2349165812629"
          required
        />
      </InputSection>
      <InputSection>
        <Text>Teller Id</Text>
        <Input
          value={tellerId}
          onChange={(e: any) => {
            setTellerId(e.target.value);
          }}
          placeholder="Teller number goes here"
          required
        />
      </InputSection>
      <InputSection>
        <Text>Transaction Date</Text>
        <Input
          placeholder="Set Date"
          value={transactionDate}
          max={getMaxDate()}
          onChange={(e: any) => {
            setTransactionDate(e.target.value);
          }}
          onFocus={(e) => (e.target.type = "date")}
          // onBlur={(e) => (e.target.type = "text")}
          defaultValue={defaultDateString}
        />
      </InputSection>
      <InputSection>
        <Text>Bank Deposited to</Text>
        <Section
          value={bankDeposited}
          onChange={(e: any) => {
            setBankDeposited(e.target.value);
          }}
        >
          <Options value={bankDeposited}>{bankDeposited}</Options>
        </Section>
      </InputSection>
      {!(
        depositorName &&
        amountDeposited &&
        phoneNo &&
        tellerId &&
        transactionDate &&
        bankDeposited &&
        imageURL
      ) ? (
        <Btn bg="">Fill in details</Btn>
      ) : (
        <Btn
          bg="1"
          onClick={() => {
            setLoad(true);
            submitTransferDetailsAPI(user, formData).then((res) => {
              if (res?.status === 201) {
                Swal.fire({
                  icon: "success",
                  title: `${res?.data?.message}`,
                  text: "A Mail has been sent to the management to verify transaction",
                }).then(() => {
                  setLoad(false);
                  navigate("/user-dashboard/transactions");
                  window.location.reload();
                });
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Invalid Response",
                  text: "This may be as a result of incomplete credentials",
                }).then(() => {
                  setLoad(false);
                });
              }
            });
          }}
        >
          Submit Details
        </Btn>
      )}
    </>
  );
};

export default TransferPanel;

const Render = styled.div``;

const Note = styled.div`
  color: red;
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
  margin-top: 15px;
  align-items: center;
  transition: all 450ms;
  cursor: pointer;

  &:hover {
    border-radius: 5px;
  }
`;

const Input = styled.input`
  width: 97%;
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
