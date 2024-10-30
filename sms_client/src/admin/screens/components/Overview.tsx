import styled from "styled-components";
import OverviewComponent from "../../components/common/OverviewComponent";
import {
  FaUsers,
  FaCoins,
  FaMoneyBillWave,
  FaSms,
  FaThList,
} from "react-icons/fa";
import { MdDrafts } from "react-icons/md";
import { ImConnection } from "react-icons/im";
// import { SiGooglemessages } from "react-icons/si";
import { useViewAllUsers } from "../../../hooks/customHooks";

const Overview = () => {
  const { data, isLoading } = useViewAllUsers();
  const totalUnits = data?.reduce(
    (acc: number, cur: any) => acc + cur?.units,
    0
  );

  const transactions = data?.reduce(
    (acc: number, cur: any) => acc + cur?.transfers?.length,
    0
  );

  const sms = data?.reduce(
    (acc: Number, cur: any) => acc + cur?.sms?.length,
    0
  );

  const draft = data?.reduce(
    (acc: Number, cur: any) => acc + cur?.draft?.length,
    0
  );

  const active = data?.filter((el: any) => el.loginStatus === true);

  let phonebook: string[] = [];
  data
    ?.map((el: any) => el?.phonebook)
    .forEach((el: any) => {
      if (el.length > 0) {
        return phonebook.push(...el);
      }
    });

  return (
    <>
      <Body>
        <Main>
          <OverviewComponent
            num={isLoading ? <Roller /> : data?.length}
            span="Registered Users"
            icon={<FaUsers />}
          />
          <OverviewComponent
            num={isLoading ? <Roller /> : "₦" + totalUnits?.toLocaleString()}
            span="Worth of Units"
            icon={<FaCoins />}
          />
          <OverviewComponent
            num={isLoading ? <Roller /> : transactions}
            span="Total Transactions"
            icon={<FaMoneyBillWave />}
          />
          <OverviewComponent
            num={isLoading ? <Roller /> : sms}
            span="Succesful SMS"
            icon={<FaSms />}
          />
          <OverviewComponent
            num={isLoading ? <Roller /> : draft}
            span="Drafted SMS"
            icon={<MdDrafts />}
          />
          <OverviewComponent
            num={isLoading ? <Roller /> : active?.length}
            span="Active Users"
            icon={<ImConnection />}
          />
          <OverviewComponent
            num={isLoading ? <Roller /> : phonebook?.length}
            span="Total Contact Lists"
            icon={<FaThList />}
          />
          {/* <OverviewComponent
            num={3500}
            span="SMS Messages Sent"
            icon={<SiGooglemessages />}
          /> */}
        </Main>
      </Body>
    </>
  );
};

export default Overview;

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

const Main = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Body = styled.main`
  width: 100%;
  min-height: 100vh;
  margin-right: 10px;

  @media screen and (max-width: 800px) {
    margin-left: 10px;
    margin-bottom: 10px;
  }
`;
