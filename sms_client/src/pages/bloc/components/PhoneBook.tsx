import styled from "styled-components";
import SmallTxt from "../../../components/SmallTxt";
import Catalogs from "../../../components/Catalogs";
import { useSelector } from "react-redux";
import { useState } from "react";
import CatalogPop from "../../../components/CatalogPop";
import { usePopulateCatalogs } from "../../../hooks/customHooks";

const PhoneBook = () => {
  const user = useSelector((state: any) => state.user);
  const { catalogs, isLoading } = usePopulateCatalogs(user);
  const [popCatalog, setPopCatalog] = useState<boolean>(false);

  return (
    <>
      {popCatalog && <CatalogPop user={user} setPopCatalog={setPopCatalog} />}
      <Body>
        <Main>
          <>
            <SmallTxt
              p="PhoneBook"
              span="Oversee all your contacts based on catalogs created."
            />
            <Section>
              <Top>
                <div>
                  <P>Contacts Catalogs</P>
                  <Btn onClick={() => setPopCatalog(!popCatalog)}>
                    Create New Catalog
                  </Btn>
                </div>
                <h1>{isLoading ? "0" : catalogs?.length}</h1>
              </Top>
              {catalogs?.length === 0 ? (
                <Empty>
                  <p>⛔</p>
                  <span>There are no catalogs here...</span>
                </Empty>
              ) : (
                <MainHolder>
                  <Catalogs />
                </MainHolder>
              )}
            </Section>
          </>
        </Main>
      </Body>
    </>
  );
};

export default PhoneBook;

const Empty = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  p {
    font-size: 100px;
  }
`;

const H3 = styled.h3`
  margin-bottom: 5px;
  display: none;
`;

const P = styled.h3``;

const Top = styled.div<{
  fd?: string;
  ai?: string;
  dn?: string;
}>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 425px) {
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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  width: 100%;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 470px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Btn = styled.div`
  padding: 10px;
  background-color: #043260;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  margin-top: 5px;
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
  margin-bottom: 20px;
`;

const Body = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 550px) {
    ${Section} {
      padding: 10px;
    }
  }
`;
