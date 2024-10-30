import styled from "styled-components";
import { FaCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useViewOneUser } from "../hooks/customHooks";

const Profiles = () => {
  const user = useSelector((state: any) => state.user);
  const { data, isLoading } = useViewOneUser(user);
  const datas: {}[] = [
    {
      stats: `${data?.sms?.length}`,
      status: "Successful SMS",
    },
    {
      stats: `${data?.phonebook?.length}`,
      status: "Phone Book Lists",
    },
    {
      stats: `${data?.transfers?.length}`,
      status: "Transactions",
    },
    {
      stats: `${data?.draft?.length}`,
      status: "Drafted SMS(s)",
    },
  ];
  return (
    <>
      {isLoading ? (
        <>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Roller />
          </div>
        </>
      ) : (
        <Card key={data?._id}>
          {data?.isApproved && (
            <Tag>
              Approved: <FaCircleCheck />
            </Tag>
          )}
          <Hold>
            <Avatar>{data?.userName.charAt(0)}</Avatar>
            <Holder>
              <P>{data?.userName}</P>
              <Name>{data?.fullName}</Name>
              <Span>{data?.email}</Span>
              <Tel>
                {data?.phoneNo?.startsWith("234")
                  ? data?.phoneNo
                  : "234" + data?.phoneNo}
              </Tel>
            </Holder>
          </Hold>
          {datas.map((el: any, idx: number) => (
            <Main key={idx}>
              <Stats>{el.stats}</Stats>
              <Status>{el.status}</Status>
            </Main>
          ))}
        </Card>
      )}
    </>
  );
};

export default Profiles;

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

const Hold = styled.div`
  display: flex;

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const Status = styled.div`
  color: grey;
`;

const Stats = styled.h1`
  color: #043260;
`;

const Tag = styled.div`
  position: absolute;
  top: -10px;
  color: green;
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 5px;
  right: 0;
`;

const Main = styled.div`
  width: 100%;
  margin-top: 10px;
  height: 100px;
  background-color: whitesmoke;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Holder = styled.div`
  margin-top: 10px;
`;

const Tel = styled.div`
  letter-spacing: 1.5px;
`;

const Span = styled.div`
  color: grey;
`;

const Name = styled.div`
  text-transform: uppercase;
  color: silver;
`;

const P = styled.h3`
  color: #043260;
  text-transform: capitalize;
`;

const Avatar = styled.div`
  padding: 10px;
  width: 70px;
  height: 70px;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 25px;
  margin-right: 10px;
  background-color: #043260;
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  position: relative;
`;
