import styled from "styled-components";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { useViewAllUsers } from "../../hooks/customHooks";
import Loader from "../../static/Loader";
import { FaIdBadge } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";

const Credential = () => {
  const { data, isLoading } = useViewAllUsers();
  return (
    <>
      <Div>
        <Central>
          <Table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>User Name</th>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Units (NGN)</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {data?.map((el: any, idx: number) => (
                  <Tbody key={idx}>
                    <tr>
                      <td style={{ height: "15px" }}>{idx + 1}.</td>
                      <td
                        style={{
                          height: "15px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {el?.userName}{" "}
                        {el?.verified ? (
                          <FaIdBadge style={{ color: "dodgerblue" }} />
                        ) : (
                          ""
                        )}
                      </td>
                      <td style={{ height: "15px" }}>{el?.fullName}</td>
                      <td style={{ height: "15px" }}>{el?.email}</td>
                      <td style={{ height: "15px", fontWeight: "700" }}>
                        {"₦" + el?.units?.toLocaleString() + ".00"}
                      </td>
                      <td
                        style={{
                          height: "15px",
                          letterSpacing: "1.5px",
                        }}
                      >
                        +{"234" + el?.phoneNo}
                      </td>
                      <td
                        style={{
                          height: "15px",
                        }}
                      >
                        <p
                          style={{
                            padding: "4px 1px",
                            backgroundColor: `${
                              el?.loginStatus ? "green" : "crimson"
                            }`,
                            color: "#fff",
                            borderRadius: "5px",
                            textAlign: "center",
                          }}
                        >
                          {el?.loginStatus ? "Active" : "Inactive"}
                        </p>
                      </td>
                      <td
                        style={{
                          height: "15px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Link
                          onClick={() => {
                            localStorage.setItem(
                              "ewebal_user",
                              JSON.stringify(el)
                            );
                          }}
                          to={`/admin-dashboard/manage-all-users/more-details-about-user/${el?._id}`}
                        >
                          <Action1 title="more about the user" />
                        </Link>
                        <Link
                          to={`/admin-dashboard/manage-all-users/user-transactions/${el?._id}`}
                          onClick={() => {
                            localStorage.setItem(
                              "ewebal_transfer",
                              JSON.stringify(el?._id)
                            );
                          }}
                        >
                          <Action2 title="view user transactions" />
                        </Link>
                        <Link
                          to={`/admin-dashboard/manage-all-users/user-messages/${el?._id}`}
                          onClick={() => {
                            localStorage.setItem(
                              "ewebal_messages",
                              JSON.stringify(el?._id)
                            );
                          }}
                        >
                          <Action3 title="view user messages" />
                        </Link>
                      </td>
                    </tr>
                  </Tbody>
                ))}
              </>
            )}
          </Table>
        </Central>
      </Div>
    </>
  );
};

export default Credential;

const Central = styled.div`
  border-radius: 5px;
  max-width: 100%;
  overflow-y: hidden;
`;

const Div = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 5px;
`;

const Table = styled.table`
  display: table;
  width: 100%;
  font-weight: 400;
  font-size: 13.5px;
  thead {
    background-color: #043260;
    color: white;
    text-align: left;
    height: 40px;
    tr {
      th {
        padding: 10px;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    width: 1100px;
  }
`;

const Action1 = styled(FaIdBadge)`
  font-size: 20px;
  margin: "0 5px";
  cursor: pointer;
  color: #043260;
  transition: all 0.75s;
  &:hover {
    transform: translate(0, -3px);
  }
`;

const Action2 = styled(FaMoneyBillTransfer)`
  font-size: 20px;
  margin: "0 5px";
  cursor: pointer;
  color: orangered;
  transition: all 0.75s;
  &:hover {
    transform: translate(0, -3px);
  }
`;

const Action3 = styled(AiOutlineMail)`
  font-size: 20px;
  margin: "0 5px";
  cursor: pointer;
  color: dodgerblue;
  transition: all 0.75s;
  &:hover {
    transform: translate(0, -3px);
  }
`;

const Tbody = styled.tbody`
  background-color: whitesmoke;

  tr {
    height: 40px;

    td {
      padding: 10px;
    }
  }
`;
