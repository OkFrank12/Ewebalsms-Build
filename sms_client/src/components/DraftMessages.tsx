import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { usePopulateDraftMessages } from "../hooks/customHooks";
import moment from "moment";
import Swal from "sweetalert2";
import { useState } from "react";
import { deleteDrafts } from "../api/draftsAPI";
import Loader from "../static/Loader";
import { Link } from "react-router-dom";

const DraftMessages = () => {
  const user = useSelector((state: any) => state.user);
  const [loading, setLoading] = useState<boolean>(false);
  const { data, isLoading } = usePopulateDraftMessages(user);
  return (
    <>
      {loading && <Loader />}
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "500px",
          }}
        >
          <Roller />
        </div>
      ) : (
        <>
          {data?.length === 0 ? (
            <>
              {" "}
              <Empty>
                <p>⛔</p>
                <span className="loader"></span>
                <span>There are no current drafts...</span>
              </Empty>
            </>
          ) : (
            data &&
            data?.map((el: any) => {
              return (
                <Panel key={el?._id}>
                  <Holder>
                    <SenderName>{el?.senderName}</SenderName>
                    <Messages1 value={el?.message} />
                    <Messages value={el?.phoneNo?.replace(",", ", ")} />
                    <Status>
                      <Ball />
                      Successful
                    </Status>
                  </Holder>
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CreatedAt>{moment(el?.createdAt).fromNow()}</CreatedAt>
                  </div>
                  <Link
                    onClick={() => {
                      localStorage.setItem("draft-history", JSON.stringify(el));
                    }}
                    to={`/user-dashboard/${el?._id}/send-draft-sms`}
                  >
                    <More title="resend">Edit</More>
                  </Link>
                  {!loading ? (
                    <Delete
                      title="delete"
                      onClick={() => {
                        setLoading(true);
                        deleteDrafts(user, el?._id).then(() => {
                          Swal.fire({
                            icon: "success",
                            title: `Deleted Successfully`,
                            timer: 4000,
                            timerProgressBar: true,
                            showConfirmButton: false,
                          }).then(() => {
                            setLoading(false);
                          });
                        });
                      }}
                      size={20}
                    />
                  ) : (
                    <Roller />
                  )}
                </Panel>
              );
            })
          )}
        </>
      )}
    </>
  );
};

export default DraftMessages;

const More = styled.div`
  position: absolute;
  color: green;
  margin-bottom: 2px;
  bottom: 0;
  padding: 2px 5px;
  background-color: whitesmoke;
  right: 25px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

const Empty = styled.div`
  margin-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 100px;
  }
`;

const Roller = styled.div`
  width: 48px;
  height: 48px;
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

const Sub = styled.div`
  display: none;
`;

const Delete = styled(AiOutlineDelete)`
  position: absolute;
  bottom: 2px;
  right: 2px;
  color: red;
  transition: all 450ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

const Ball = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: green;
`;

const CreatedAt = styled.div`
  padding: 3px 10px;
  background-color: whitesmoke;
  border-radius: 5px;
  color: grey;
  font-size: 10px;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  color: green;
`;

const Messages = styled.textarea`
  color: grey;
  min-height: 30px;
  outline: none;
  border: none;
  resize: none;
  width: 95%;
`;

const Messages1 = styled.textarea`
  color: grey;
  min-height: 50px;
  resize: none;
  width: 95%;
  outline: none;
  border: 1px solid silver;
`;

const SenderName = styled.h3`
  color: #043260;
  text-transform: capitalize;
  display: flex;
`;

const Holder = styled.div`
  flex: 1;
`;

const Panel = styled.div`
  width: 100%;
  min-height: 70px;
  border-radius: 10px;
  display: flex;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
  border-left: 5px solid #043260;
  background-color: white;
  margin-top: 10px;
  cursor: default;
  position: relative;
  font-size: 13px;

  @media screen and (max-width: 400px) {
    ${Sub} {
      display: flex;
    }

    ${CreatedAt} {
      display: none;
    }

    ${Holder} {
      margin-left: 10px;
    }
  }
`;
