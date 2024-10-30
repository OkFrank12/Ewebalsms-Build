import { FaEye } from "react-icons/fa";
import styled from "styled-components";
import { useViewAllTransactions } from "../../hooks/customHooks";
import moment from "moment";
import { Link } from "react-router-dom";

const ViewAllTransactions = () => {
  const { data, isLoading } = useViewAllTransactions();
  let copy = data?.slice();
  copy = copy?.reverse();
  return (
    <Div>
      <Central>
        <Table>
          {" "}
          <thead>
            <tr>
              <th>S/N</th>
              <th>Depositor</th>
              <th>Paid to</th>
              <th>Amount (NGN)</th>
              <th>Teller ID</th>
              <th>Contact</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <>
            <>
              {copy &&
                copy?.map((el: any, idx: number) => (
                  <Tbody key={idx}>
                    <tr>
                      <td>{idx + 1}.</td>
                      <td>
                        {el?.depositorName}
                        {el?.verified && "✅"} {el?.declined && "❌"}
                      </td>
                      <td>{el?.bankDeposited}</td>
                      <td>{`${el?.amountDeposited.toLocaleString()}.00`}</td>
                      <td>{el?.tellerId}</td>
                      <td
                        style={{
                          height: "15px",
                          letterSpacing: "1.5px",
                        }}
                      >
                        {"+" + el?.phoneNo}
                      </td>
                      <td
                        style={{
                          height: "15px",
                        }}
                      >
                        {moment(el?.transactionDate).format("L")}
                      </td>
                      <td
                        style={{
                          height: "15px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Link
                          to={`/admin-dashboard/manage-all-transactions/more-about-transaction/${el?._id}`}
                          onClick={() =>
                            localStorage.setItem(
                              "ewebal_transfer_more",
                              JSON.stringify(el)
                            )
                          }
                        >
                          <Action1 title="more transaction details" />
                        </Link>
                        {/* <Action2 title="approve transaction" />

                        <Action3 title="send mail on transaction" /> */}
                      </td>
                    </tr>
                  </Tbody>
                ))}
            </>
          </>
        </Table>
        {data && data?.length === 0 && (
          <Empty>
            <p>⛔</p>
            <span>There are no transactions made by any user</span>
          </Empty>
        )}
      </Central>
      {isLoading && <Roller />}
    </Div>
  );
};

export default ViewAllTransactions;

const Empty = styled.div`
  margin-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  p {
    font-size: 100px;
  }
`;

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

const Action1 = styled(FaEye)`
  font-size: 20px;
  margin: "0 5px";
  cursor: pointer;
  color: #043260;
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
