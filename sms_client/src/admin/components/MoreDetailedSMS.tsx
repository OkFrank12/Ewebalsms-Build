import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import moment from "moment";

const MoreDetailedSMS = () => {
  const data = JSON.parse(localStorage.getItem("ewebal_messages_more")!);
  return (
    <>
      <Body>
        <Title>SMS Details </Title>
        <BtnAbs
          to={`/admin-dashboard/manage-all-users/user-messages/${data?.userID}`}
        >
          <AiOutlineClose />
        </BtnAbs>
        <Holder>
          <Div>
            <Hold>
              <InputHolder>
                <p>Sender ID</p>
                <input
                  type="text"
                  placeholder="User Name goes here"
                  value={data?.senderName}
                />
              </InputHolder>
              <InputHolder>
                <p>Sms ID</p>
                <input
                  type="text"
                  placeholder="Full Name goes here"
                  value={data?._id}
                />
              </InputHolder>
              <InputHolder>
                <p>Phone Numbers</p>
                <textarea
                  placeholder="234 916 581 2629"
                  value={data?.phoneNo.split(",").join(", ")}
                />
              </InputHolder>
              <InputHolder>
                <p>SMS</p>
                <textarea value={data?.message} />
              </InputHolder>
              <InputHolder>
                <p>Date sent</p>
                <input value={moment(data?.createdAt).format("LLL")} />
              </InputHolder>
            </Hold>
          </Div>
        </Holder>
      </Body>
    </>
  );
};

export default MoreDetailedSMS;

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

const Hold = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

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

  textarea,
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

  textarea {
    height: 100px;
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
