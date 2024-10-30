import styled from "styled-components";
import SmallTxt from "../../../components/SmallTxt";
import Transacted from "../../../components/Transacted";
import { usePopulateTransactions } from "../../../hooks/customHooks";
import { useSelector } from "react-redux";

const Transactions = () => {
  const user = useSelector((state: any) => state.user);
  const { data, isLoading } = usePopulateTransactions(user);
  return (
    <>
      <Body>
        <Main>
          <Top>
            <SmallTxt
              p="Transactions History"
              span="An Overview of all transactions made."
            />
          </Top>
          {isLoading ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "75%",
              }}
            >
              <Roller />
            </div>
          ) : data?.length === 0 ? (
            <>
              <Empty>
                <p>⛔</p>
                <span className="loader"></span>
                <span>There are no transactions made currently...</span>
              </Empty>
            </>
          ) : (
            <Section>
              {data?.map((el: any, idx: number) => (
                <Transacted user={user} el={el} idx={idx} />
              ))}
            </Section>
          )}
        </Main>
      </Body>
    </>
  );
};

export default Transactions;

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

const Section = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 730px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Top = styled.div``;

const Main = styled.div`
  width: 97%;
  height: 100%;
  margin-top: 10px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
`;
