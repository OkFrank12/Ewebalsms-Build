import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { addContactsAPI } from "../api/miniContactsAPI";
import Swal from "sweetalert2";
import Loader from "../static/Loader";

interface iPop {
  setAddContacts: any;
  el: any;
}

const AddContactsPop: FC<iPop> = ({ setAddContacts, el }) => {
  const validInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/[^,\d]/g, "");
  };

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  const [phoneNo, setPhoneNo] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);

  return (
    <>
      {load && <Loader />}
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <Container>
          {isLoading ? (
            <Roller />
          ) : (
            <>
              {" "}
              <Cover onClick={() => setAddContacts(false)} />
              <Card>
                <P>Add Contacts +</P>
                <hr />
                <Yellow>
                  Here you can add contact to{" "}
                  <b style={{ textTransform: "capitalize" }}>
                    {el?.catalogName} ({el?.code})
                  </b>
                </Yellow>
                <span
                  style={{
                    fontSize: "13px",
                    color: "red",
                  }}
                >
                  Ensure to pass in valid phone numbers to avoid future issues.
                </span>
                <Name>Contact *</Name>
                <Input
                  value={phoneNo}
                  onChange={(e: any) => {
                    setPhoneNo(e.target.value);
                  }}
                  placeholder={`${el?.code}9165812644`}
                  onInput={validInput}
                />
                {!phoneNo && <Text>Fill in this field!!!</Text>}
                <Btn
                  onClick={() => {
                    setLoad(true);
                    addContactsAPI(el?.userID, el?._id, { phoneNo }).then(
                      (res: any) => {
                        if (res?.status === 201) {
                          Swal.fire({
                            icon: "success",
                            title: `${res?.data?.message}`,
                          }).then(() => {
                            setLoad(false);
                            setAddContacts(false);
                          });
                        } else if (res?.message) {
                          Swal.fire({
                            icon: "error",
                            title: "Unable to Add Contacts",
                            text: "Check your credentials or network",
                          }).then(() => {
                            setLoad(false);
                            setAddContacts(false);
                          });
                        }
                      }
                    );
                  }}
                >
                  New Contacts
                </Btn>
              </Card>
            </>
          )}
        </Container>
      </motion.div>
    </>
  );
};

export default AddContactsPop;

const Roller = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid #043260;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Btn = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  background-color: #043260;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 450ms;

  &:hover {
    border-radius: 5px;
  }
`;

const Text = styled.div`
  text-align: right;
  color: red;
`;

const Yellow = styled.div`
  color: orange;
  margin: 10px 0;
`;

const Input = styled.input`
  margin: 10px 0;
  height: 40px;
  width: 97%;
  font-family: Athletics;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid grey;

  &:focus {
    outline: 4px solid #043260;
    border: 0;
  }
`;

const Name = styled.div`
  color: grey;
`;

const P = styled.h3`
  color: #043260;
  margin-bottom: 10px;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  width: 530px;
  padding: 20px;
  min-height: 200px;
  background-color: white;
  border-radius: 5px;
  z-index: 2;

  @media screen and (max-width: 600px) {
    width: 97%;
  }
`;

const Container = styled.div`
  position: fixed;
  width: calc(100% - 220px);
  height: 100%;
  z-index: 2;
  top: 0;
  right: 0;
  background: rgba(9, 13, 66, 0.37);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
