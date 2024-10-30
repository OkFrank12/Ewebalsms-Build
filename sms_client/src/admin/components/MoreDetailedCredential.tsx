import styled from "styled-components";
import PersonalComponent from "./common/PersonalComponent";
import {
  FaCoins,
  FaMoneyBillWave,
  FaSms,
  FaThList,
  FaTrash,
  FaIdBadge,
} from "react-icons/fa";
import { MdDrafts } from "react-icons/md";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import moment from "moment";
import { useState } from "react";
import Swal from "sweetalert2";
import {
  blockUserAPI,
  unBlockUserAPI,
  updateUserCredentialsAPI,
} from "../../api/AdminAPI";
import Loader from "../../static/Loader";

const MoreDetailedCredential = () => {
  const data = JSON.parse(localStorage.getItem("ewebal_user")!);
  const [userName, setUserName] = useState<string>(data?.userName);
  const [fullName, setFullName] = useState<string>(data?.fullName);
  const [phoneNo, setPhoneNo] = useState<string>(data?.phoneNo);
  const [email, setEmail] = useState<string>(data?.email);
  const [senderID, setSenderID] = useState<string>(data?.senderID?.join(","));
  const [edit, setEdit] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);

  return (
    <>
      {load && <Loader />}
      <Body>
        <Title>Personal Details {data?.verified && <FaIdBadge />}</Title>
        <BtnAbs to={`/admin-dashboard/manage-all-users`}>
          <AiOutlineClose />
        </BtnAbs>
        <Holder>
          <Div>
            <Hold>
              <InputHolder>
                <p>User Name</p>
                <input
                  type="text"
                  placeholder="User Name goes here"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  disabled={edit ? false : true}
                />
              </InputHolder>
              <InputHolder>
                <p>Full Name</p>
                <input
                  type="text"
                  placeholder="Full Name goes here"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={edit ? false : true}
                />
              </InputHolder>
              <InputHolder>
                <p>Contact</p>
                <input
                  type="text"
                  placeholder="234 916 581 2629"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  disabled={edit ? false : true}
                />
              </InputHolder>
              <InputHolder>
                <p>Email</p>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={edit ? false : true}
                />
              </InputHolder>
              <InputHolder>
                <p>Sender IDs</p>
                <input
                  type="text"
                  placeholder="senderID1, senderID2"
                  value={senderID}
                  onChange={(e) => setSenderID(e.target.value)}
                  disabled={edit ? false : true}
                />
              </InputHolder>
              <InputHolder>
                <p>Date Created</p>
                <input
                  type="text"
                  disabled
                  value={moment(data?.createdAt).format("LLL")}
                />
              </InputHolder>
            </Hold>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              {edit ? (
                <Btn bg="purple" onClick={() => setEdit(!edit)}>
                  {edit && <AiOutlineClose />}
                  <span style={{ marginLeft: "7px" }}>Cancel</span>
                </Btn>
              ) : (
                <Btn bg="#043260" onClick={() => setEdit(!edit)}>
                  <AiOutlineEdit />
                  <span style={{ marginLeft: "7px" }}>Edit</span>
                </Btn>
              )}
              {edit && (
                <Btn
                  bg="green"
                  onClick={() => {
                    Swal.fire({
                      icon: "warning",
                      title: "About to update user?",
                      text: "This action can't be reversed",
                      confirmButtonText: "Proceed",
                      cancelButtonText: "Nope",
                      showCancelButton: true,
                    }).then((willDelete) => {
                      if (willDelete.isConfirmed) {
                        setLoad(true);
                        updateUserCredentialsAPI(data?._id, {
                          userName,
                          fullName,
                          email,
                          senderID,
                          phoneNo,
                        }).then((res: any) => {
                          if (res?.status === 200) {
                            setLoad(false);
                            setEdit(false);
                            Swal.fire({
                              icon: "success",
                              title: `${res?.data?.message}`,
                            });
                          } else if (res?.message) {
                            setEdit(false);
                            Swal.fire({
                              icon: "error",
                              title: "Update Failed",
                              text: "This may be due to network",
                            }).then(() => {
                              setLoad(false);
                            });
                          }
                        });
                      }
                    });
                  }}
                >
                  <GrUpdate />
                  <span style={{ marginLeft: "7px" }}>update</span>
                </Btn>
              )}
              {!data?.verified ? (
                <Btn
                  bg="crimson"
                  onClick={() => {
                    Swal.fire({
                      icon: "warning",
                      title: "About to unblock user?",
                      text: "User will be able to use your service",
                      confirmButtonText: "Proceed",
                      cancelButtonText: "Nope",
                      showCancelButton: true,
                    }).then((willDelete) => {
                      if (willDelete.isConfirmed) {
                        setLoad(true);
                        unBlockUserAPI(data?._id).then((res: any) => {
                          if (res?.status === 200) {
                            setLoad(false);
                            Swal.fire({
                              icon: "success",
                              title: `${res?.data?.message}`,
                            });
                          } else if (res?.message) {
                            Swal.fire({
                              icon: "error",
                              title: "Unable to unblock user",
                              text: "This may be due to network",
                            }).then(() => {
                              setLoad(false);
                            });
                          }
                        });
                      }
                    });
                  }}
                >
                  <FaTrash />
                  <span style={{ marginLeft: "7px" }}>unblock</span>
                </Btn>
              ) : (
                <Btn
                  bg="crimson"
                  onClick={() => {
                    Swal.fire({
                      icon: "warning",
                      title: "About to block user?",
                      text: "User won't be able to use your service",
                      confirmButtonText: "Proceed",
                      cancelButtonText: "Nope",
                      showCancelButton: true,
                    }).then((willDelete) => {
                      if (willDelete.isConfirmed) {
                        setLoad(true);
                        blockUserAPI(data?._id).then((res: any) => {
                          if (res?.status === 200) {
                            setLoad(false);
                            Swal.fire({
                              icon: "success",
                              title: `${res?.data?.message}`,
                            });
                          } else if (res?.message) {
                            Swal.fire({
                              icon: "error",
                              title: "Unable to block user",
                              text: "This may be due to network",
                            }).then(() => {
                              setLoad(false);
                            });
                          }
                        });
                      }
                    });
                  }}
                >
                  <FaTrash />
                  <span style={{ marginLeft: "7px" }}>block</span>
                </Btn>
              )}
            </div>
          </Div>
          <Right>
            <PersonalComponent
              num={data?.sms?.length}
              text="Successful Message"
              icon={<FaSms />}
            />
            <PersonalComponent
              num={data?.transfers?.length}
              text="Transactions Made"
              icon={<FaMoneyBillWave />}
            />
            <PersonalComponent
              num={data?.draft?.length}
              text="Drafted SMS"
              icon={<MdDrafts />}
            />
            <PersonalComponent
              num={data?.phonebook?.length}
              text="Contact Lists"
              icon={<FaThList />}
            />
            <PersonalComponent
              num={data?.units.toLocaleString()}
              text="SMS Units"
              icon={<FaCoins />}
            />
          </Right>
        </Holder>
      </Body>
    </>
  );
};

export default MoreDetailedCredential;

const BtnAbs = styled(Link)`
  color: white;
  padding: 3px 5px;
  right: 20px;
  top: 20px;
  display: flex;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
  background-color: #043260;
  border-radius: 5px;
  position: absolute;
`;

const Btn = styled.div<{
  bg: string;
}>`
  margin-top: 20px;
  padding: 10px;
  height: 35px;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Athletics;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${({ bg }) => bg};
  color: white;
  border: 0;
  text-transform: uppercase;
  transition: all 0.75s;

  &:hover {
    transform: translate(0, -3px);
  }

  @media screen and (max-width: 400px) {
    span {
      display: none;
    }
  }
`;

const Hold = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Right = styled.div`
  flex: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Div = styled.div`
  flex: 50%;
  margin-right: 30px;
`;

const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
    ${Div} {
      margin: 0;
    }
  }
`;

const InputHolder = styled.div`
  width: 100%;
  p {
    color: #222;
  }

  input {
    height: 40px;
    padding-left: 10px;
    margin-top: 5px;
    width: 100%;
    resize: none;
    font-family: Athletics;
    border: 0;
    border-radius: 2px;
    box-shadow: rgba(195, 193, 193, 0.2) 0px 2px 8px 0px;

    &:focus {
      outline: 4px solid #043260;
    }
  }
`;

const Title = styled.h1`
  color: #043260;
  margin-bottom: 10px;
`;

const Body = styled.main`
  padding: 20px;
  width: 100%;
  min-height: 400px;
  background-color: white;
  border-radius: 15px;
  position: relative;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
