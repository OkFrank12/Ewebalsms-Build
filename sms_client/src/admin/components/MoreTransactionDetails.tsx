import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { FaRectangleXmark } from "react-icons/fa6";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useState } from "react";
import CreditUserPop from "./CreditUserPop";
import Swal from "sweetalert2";
import Loader from "../../static/Loader";
import { declinedUserTransactionAPI } from "../../api/AdminAPI";
import { useSelector } from "react-redux";
import { useViewOneUser } from "../../hooks/customHooks";

const MoreTransactionDetails = () => {
  const datas = JSON.parse(localStorage.getItem("ewebal_transfer_more")!);
  const { data, isLoading } = useViewOneUser(datas?.userID);
  const admin = useSelector((state: any) => state.admin);
  const [toggle, setToggle] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      {load && <Loader />}
      {toggle && <CreditUserPop user={datas} setToggle={setToggle} />}
      <Body>
        <Title>{isLoading ? "?" : data?.userName}'s Transaction</Title>
        <BtnAbs
          to={`/admin-dashboard/manage-all-users/user-transactions/${datas?._id}`}
        >
          <AiOutlineClose />
        </BtnAbs>
        <Holder>
          <Left>
            {datas?.image.endsWith(".pdf") ? (
              <iframe
                src={datas?.image}
                width="100%"
                height="400px"
                style={{
                  borderRadius: "5px",
                  border: 0,
                  objectFit: "cover",
                }}
              ></iframe>
            ) : (
              <Image src={datas?.image} />
            )}
          </Left>
          <RightHold>
            <Right>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: "#043260", fontWeight: 700 }}>
                    Depositor
                  </td>
                  <td>{datas?.depositorName}</td>
                </tr>
                <tr>
                  <td style={{ color: "#043260", fontWeight: 700 }}>
                    Bank Paid to
                  </td>
                  <td>{datas?.bankDeposited}</td>
                </tr>
                <tr>
                  <td style={{ color: "#043260", fontWeight: 700 }}>
                    Amount Deposited
                  </td>
                  <td>{`${datas?.amountDeposited.toLocaleString()}.00`}</td>
                </tr>
                <tr>
                  <td style={{ color: "#043260", fontWeight: 700 }}>
                    Teller Id
                  </td>
                  <td>{datas?.tellerId}</td>
                </tr>
                <tr>
                  <td style={{ color: "#043260", fontWeight: 700 }}>Contact</td>
                  <td>+{datas?.phoneNo}</td>
                </tr>
                <tr>
                  <td style={{ color: "#043260", fontWeight: 700 }}>
                    Date Transacted
                  </td>
                  <td>{moment(datas?.transactionDate).format("LLL")}</td>
                </tr>
              </tbody>
            </Right>
            <BtnHold>
              {datas?.verified || datas?.declined ? (
                <div
                  style={{
                    color: "white",
                    padding: "10px",
                    backgroundColor: `${
                      datas?.verified ? "#043260" : "crimson"
                    }`,
                    borderRadius: "5px",
                    cursor: "not-allowed",
                  }}
                >
                  {datas?.verified
                    ? "Transaction Verified"
                    : "Transaction Declined"}
                </div>
              ) : (
                <>
                  <Btn bg="#043260" onClick={() => setToggle(!toggle)}>
                    <IoCheckmarkDoneCircle size={30} />
                    <span style={{ marginLeft: "5px" }}>accept</span>
                  </Btn>
                  <Btn
                    bg="crimson"
                    onClick={() => {
                      Swal.fire({
                        icon: "warning",
                        title: "About to decline transaction?",
                        text: "A Mail will be sent to the user about declination",
                        confirmButtonText: "Proceed",
                        cancelButtonText: "Nope",
                        showCancelButton: true,
                      }).then((willDelete) => {
                        if (willDelete.isConfirmed) {
                          setLoad(true);
                          declinedUserTransactionAPI(
                            datas?.userID,
                            datas?._id,
                            admin
                          ).then((res: any) => {
                            if (res?.status === 200) {
                              setLoad(false);
                              Swal.fire({
                                icon: "success",
                                title: `${res?.data?.message}`,
                              }).then(() => {
                                navigate(
                                  `/admin-dashboard/manage-all-users/user-transactions/${datas?._id}`
                                );
                              });
                            } else if (res?.message) {
                              Swal.fire({
                                icon: "error",
                                title: "Unable to decline transaction",
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
                    <FaRectangleXmark size={30} />
                    <span style={{ marginLeft: "5px" }}>decline</span>
                  </Btn>
                </>
              )}
            </BtnHold>
          </RightHold>
        </Holder>
      </Body>
    </>
  );
};

export default MoreTransactionDetails;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const Left = styled.div`
  height: 400px;
  overflow: hidden;
`;

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

const BtnHold = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Btn = styled.div<{
  bg: string;
}>`
  padding: 10px;
  margin: 0 5px;
  height: 40px;
  width: 130px;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Athletics;
  border-radius: 5px;
  background-color: ${({ bg }) => bg};
  color: white;
  border: 0;
  text-transform: uppercase;
  transition: all 0.75s;

  &:hover {
    transform: translate(0, -3px);
  }

  @media screen and (max-width: 500px) {
    span {
      display: none;
    }
  }
`;

const Right = styled.table`
  width: 100%;
  height: 80%;

  thead {
    text-align: left;
    background-color: #043260;
    color: white;
    tr {
      th {
        padding: 10px;
      }
    }
  }

  tbody {
    tr {
      background-color: whitesmoke;
      td {
        padding: 10px;
      }
    }
  }

  @media screen and (max-width: 550px) {
    font-size: 12px;
    thead {
      tr {
        th {
          padding: 8px;
        }
      }
    }
    tbody {
      tr {
        td {
          padding: 8px;
        }
      }
    }

    ${Btn} {
      width: 50%;
      padding: 5px;
    }
  }
`;

const RightHold = styled.div`
  width: 100%;
`;

const Holder = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.h1`
  color: #043260;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

const Body = styled.main`
  padding: 20px;
  width: 100%;
  min-height: 200px;
  background-color: white;
  border-radius: 15px;
  position: relative;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
