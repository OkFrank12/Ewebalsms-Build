import styled from "styled-components";
import Units from "../../../components/Units";
import { IoCashOutline, IoMailOpen } from "react-icons/io5";
import { LuBookTemplate } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { useSelector } from "react-redux";
import {
  useViewAllAnnouncement,
  useViewOneUser,
} from "../../../hooks/customHooks";
import { GrTransaction } from "react-icons/gr";
import { MdAnnouncement } from "react-icons/md";

const Basement = () => {
  const user = useSelector((state: any) => state.user);
  const { data, isLoading } = useViewOneUser(user);
  const { announce, isLoad } = useViewAllAnnouncement();

  return (
    <>
      <Page>
        <Body>
          <Holder>
            {isLoad ? (
              <Roller />
            ) : (
              announce?.map((el: any, idx: number) => (
                <Units
                  key={idx}
                  title={el?.hint}
                  hint={el?.message}
                  num={""}
                  icons={<MdAnnouncement />}
                />
              ))
            )}
            <Units
              title="Available Units"
              hint="remaining..."
              num={
                isLoading
                  ? 0
                  : data?.units === undefined
                  ? "0" + ".00"
                  : "₦" + data?.units + ".00"
              }
              icons={<IoCashOutline />}
            />
            <Units
              title="Total SMS"
              hint="sent so far..."
              num={isLoading ? <Roller /> : data?.sms?.length}
              icons={<GoMail />}
            />
            <Units
              title="Current Drafts"
              hint="stacked so far..."
              num={isLoading ? <Roller /> : data?.draft?.length}
              icons={<IoMailOpen />}
            />
            <Units
              title="Phonebook"
              hint="stacked so far..."
              num={isLoading ? <Roller /> : data?.phonebook?.length}
              icons={<LuBookTemplate />}
            />
            <Units
              title="Transactions"
              hint="stacked so far..."
              num={isLoading ? <Roller /> : data?.transfers?.length}
              icons={<GrTransaction />}
            />
          </Holder>
        </Body>
      </Page>
    </>
  );
};

export default Basement;

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

const Holder = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 10px 0;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Body = styled.div`
  width: 97%;
  height: 100%;
  display: flex;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

const Page = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 930px) {
    ${Body} {
      width: 100%;
    }
  }
`;
