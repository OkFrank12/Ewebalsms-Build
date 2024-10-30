import styled from "styled-components";
import moment from "moment";
import "../code.css";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteTransferDetails } from "../api/smsAPI";
import { mutate } from "swr";
import Swal from "sweetalert2";
import { FC, useState } from "react";
import Loader from "../static/Loader";

interface iTrans {
  el: any;
  idx: number;
  user: string;
}

const Transacted: FC<iTrans> = ({ el, user, idx }) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      {loading && <Loader />}
      <Card key={el?._id}>
        <div style={{ color: "#043260", fontStyle: "italic" }}>{idx + 1}</div>
        {el?.image.endsWith(".pdf") ? (
          <iframe
            src={el?.image}
            width="100%"
            height="200px"
            style={{
              borderRadius: "5px",
              border: 0,
              objectFit: "cover",
            }}
          ></iframe>
        ) : (
          <img
            src={el?.image}
            loading="lazy"
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "5px",
              objectFit: "cover",
            }}
          />
        )}
        <Circle />
        <Div>
          <div>
            {" "}
            Sender Name:
            <Name>{el?.depositorName}</Name>
          </div>
          <div>
            {" "}
            Amount Deposited:
            <Amount>{el?.amountDeposited.toLocaleString()}</Amount>
          </div>
          <div>
            Phone No:
            <Phone>
              {el?.phoneNo?.startsWith("234")
                ? el?.phoneNo
                : `234${el?.phoneNo}`}
            </Phone>
          </div>
          <div>
            {" "}
            Teller Id:
            <TellerId>{el?.tellerId}</TellerId>
          </div>
          <div>
            {" "}
            Transfer Date:
            <Dates>{moment(el?.transactionDate).format("L")}</Dates>
          </div>
          <div>
            {" "}
            Bank Deposited:
            <Bank>{el?.bankDeposited}</Bank>
          </div>
          <Icon1
            size={20}
            color="red"
            onClick={() => {
              setLoading(true);
              mutate(`${user}/${el?._id}/disapprove`, () =>
                deleteTransferDetails(user, el?._id).then((res) => {
                  if (res?.status === 202) {
                    Swal.fire({
                      icon: "success",
                      title: `${res?.data?.message}`,
                      text: "Details have been deleted",
                    }).then(() => {
                      setLoading(false);
                      window.location.reload();
                    });
                  } else {
                    Swal.fire({
                      icon: "error",
                      title: `Unable to delete`,
                    }).then(() => {
                      setLoading(false);
                      window.location.reload();
                    });
                  }
                })
              );
            }}
          />
        </Div>
      </Card>
    </>
  );
};

export default Transacted;

const Div = styled.div``;

const Icon1 = styled(AiOutlineDelete)`
  position: absolute;
  bottom: 3px;
  right: 3px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Phone = styled.div`
  color: grey;
  letter-spacing: 1.5px;
`;

const TellerId = styled.div`
  color: grey;
`;

const Bank = styled.div`
  color: grey;
`;

const Dates = styled.div`
  color: grey;
`;

const Amount = styled.h1`
  color: grey;
`;

const Name = styled.div`
  color: #043260;
  font-weight: 700;
  font-size: 20px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #043260;
  border-radius: 50%;
`;

const Card = styled.div`
  background-color: white;
  min-width: 100%;
  min-height: 300px;
  margin: 5px;
  padding: 10px;
  position: relative;
  border-radius: 5px;
`;
