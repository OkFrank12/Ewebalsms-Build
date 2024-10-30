import {
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineMail,
  AiOutlineUserAdd,
} from "react-icons/ai";
import styled from "styled-components";
import Contacts from "./Contacts";
import SmallTxt from "./SmallTxt";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import EditCatalogName from "./EditCatalogName";
import { useFindOneCatalog } from "../hooks/customHooks";
import moment from "moment";
import AddContactsPop from "./AddContactsPop";
import SendViaGroupPop from "./SendViaGroupPop";

const SetCatalog = () => {
  const validInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };
  const { id } = useParams();
  const [editCatalog, setEditCatalog] = useState<boolean>(false);
  const [addContacts, setAddContacts] = useState<boolean>(false);
  const [sendViaGroup, setSendViaGroup] = useState<boolean>(false);
  const { data, isLoading } = useFindOneCatalog(id!);
  const [stateSearch, setStateSearch] = useState<Array<{}>>([]);
  const [text, setText] = useState<string>("");

  return (
    <>
      {editCatalog && (
        <EditCatalogName el={data} setEditCatalog={setEditCatalog} />
      )}
      {addContacts && (
        <AddContactsPop el={data} setAddContacts={setAddContacts} />
      )}
      {sendViaGroup && (
        <SendViaGroupPop el={data} setSendViaGroup={setSendViaGroup} />
      )}
      <Body>
        <Main>
          <SmallTxt
            p="PhoneBook"
            span="Oversee all your contacts based on catalogs created."
          />
          <Section>
            {isLoading ? (
              <Roller />
            ) : (
              <>
                {" "}
                <span style={{ color: "dodgerblue" }}>
                  {moment(data?.createdAt).format("LL")} (- created)
                </span>
                <Top dn="none" fd="column" ai="center">
                  <H3>{data?.catalogName}</H3>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Link to={`/user-dashboard/all-contacts`}>
                      <Icon size={25} color="red" />
                    </Link>
                    <P>{data?.catalogName}</P>
                    <Icon2
                      size={25}
                      color="green"
                      onClick={() => setEditCatalog(!editCatalog)}
                    />
                    <Icon1
                      size={25}
                      color="#001932"
                      onClick={() => setAddContacts(!addContacts)}
                    />

                    <Icon3
                      size={25}
                      color="#004f5d"
                      onClick={() => setSendViaGroup(!sendViaGroup)}
                    />
                  </div>
                  <h1>{data?.contacts?.length}</h1>
                </Top>
                <Input
                  value={text}
                  onChange={(e: any) => {
                    setText(e.target.value);
                  }}
                  onInput={validInput}
                  placeholder="Search Contacts"
                />
                {data?.contacts?.length === 0 ? (
                  <Empty>
                    <p>⛔</p>
                    <span>There are no contacts</span>
                  </Empty>
                ) : (
                  <MainHolder>
                    <Contacts
                      el={data}
                      text={text}
                      setStateSearch={setStateSearch}
                      stateSearch={stateSearch}
                    />
                  </MainHolder>
                )}
              </>
            )}
          </Section>
        </Main>
      </Body>
    </>
  );
};

export default SetCatalog;

const Empty = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 100px;
  }

  span {
    width: 100%;
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

const Input = styled.input`
  width: 270px;
  margin-top: 20px;
  height: 40px;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 0;
  padding-left: 10px;
  font-family: Athletics;

  &:focus {
    outline: 4px solid #043260;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const H3 = styled.h3`
  margin-bottom: 5px;
  display: none;
  text-transform: capitalize;
`;

const Icon = styled(AiOutlineClose)`
  padding: 10px;
  background-color: whitesmoke;
  cursor: pointer;
  height: 35px;
  width: 35px;
  margin: 2px;
  border-radius: 5px;
  margin-top: 8px;
`;

const Icon1 = styled(AiOutlineUserAdd)`
  padding: 10px;
  background-color: whitesmoke;
  height: 35px;
  width: 35px;
  margin: 2px;
  border-radius: 5px;
  cursor: pointer;
`;

const Icon3 = styled(AiOutlineMail)`
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 5px;
  height: 35px;
  width: 35px;
  margin: 2px;
  cursor: pointer;
`;

const Icon2 = styled(AiOutlineEdit)`
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 5px;
  height: 35px;
  width: 35px;
  margin: 2px;
  cursor: pointer;
`;

const P = styled.h3`
  text-transform: capitalize;
  margin: 0 10px;
`;

const Top = styled.div<{
  fd?: string;
  ai?: string;
  dn?: string;
}>`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    flex-direction: ${({ fd }) => fd};
    align-items: ${({ ai }) => ai};

    ${P} {
      display: ${({ dn }) => dn};
    }

    ${H3} {
      display: flex;
    }
  }
`;

const MainHolder = styled.div`
  margin-top: 20px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 940px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Section = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: white;
  margin-top: 10px;
  border-radius: 5px;
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Main = styled.div`
  width: 97%;
  height: 100%;
  margin-top: 20px;
`;

const Body = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;
