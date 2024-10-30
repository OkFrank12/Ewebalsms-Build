import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { createCatalog } from "../api/contactsAPI";
import Swal from "sweetalert2";
import Loader from "../static/Loader";

interface iPop {
  setPopCatalog: any;
  user: string;
}

const CatalogPop: FC<iPop> = ({ setPopCatalog, user }) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  const [catalogName, setCatalogName] = useState<string>("");
  const [code, setCode] = useState<string>("234");
  const [load, setLoad] = useState<boolean>(false);

  console.log(code);
  return (
    <>
      {load && <Loader />}
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <Container>
          {isLoading ? (
            <Roller />
          ) : (
            <>
              {" "}
              <Cover onClick={() => setPopCatalog(false)} />
              <Card>
                <P>Create Contact Catalog</P>
                <hr />
                <Yellow>Here you can create a contact list...</Yellow>
                <Name>Name of Catalog</Name>
                <Input
                  value={catalogName}
                  maxLength={50}
                  onChange={(e: any) => {
                    setCatalogName(e.target.value);
                  }}
                  placeholder="Catalog Name"
                />

                <Select
                  defaultValue={code}
                  onChange={(e: any) => setCode(e.target.value)}
                >
                  <Option value={"234"}>(234) NIGERIA</Option>
                  <Option value={"93"}>(93) AFGHANISTAN</Option>
                  <Option value={"355"}>(355) ALBANIA</Option>
                  <Option value={"376"}>(376) ANDORRA</Option>
                  <Option value={"213"}>(213) ALGERIA</Option>
                  <Option value={"684"}>(684) AMERICAN SAMOA</Option>
                  <Option value={"244"}>(244) ANGOLA</Option>
                  <Option value={"54"}>(54) ARGENTINA</Option>
                  <Option value={"374"}>(374) ARMENIA</Option>
                  <Option value={"61"}>(61) AUSTRALIA</Option>
                  <Option value={"43"}>(43) AUSTRIA</Option>
                  <Option value={"994"}>(994) AZERBAIJAN</Option>
                  <Option value={"973"}>(973) BAHRAIN</Option>
                  <Option value={"880"}>(880) BANGLADESH</Option>
                  <Option value={"375"}>(375) BELARUS</Option>
                  <Option value={"32"}>(32) BELGIUM</Option>
                  <Option value={"501"}>(501) BELIZE</Option>
                  <Option value={"229"}>(229) BENIN</Option>
                  <Option value={"975"}>(975) BHUTAN</Option>
                  <Option value={"387"}>(387) BOSNIA AND HERZEGOVINA</Option>
                  <Option value={"267"}>(267) BOTSWANA</Option>
                  <Option value={"55"}>(55) BRAZIL</Option>
                  <Option value={"673"}>(673) BRUNEI DARUSSALAM</Option>
                  <Option value={"359"}>(359) BULGARIA</Option>
                  <Option value={"226"}>(226) BURKINA FASO</Option>
                  <Option value={"257"}>(257) BURUNDI</Option>
                  <Option value={"855"}>(855) CAMBODIA</Option>
                  <Option value={"237"}>(237) CAMEROON</Option>
                  <Option value={"236"}>(236) CENTRAL AFRICAN REPUBLIC</Option>
                  <Option value={"235"}>(235) CHAD</Option>
                  <Option value={"56"}>(56) CHILE</Option>
                  <Option value={"86"}>(86) CHINA</Option>
                  <Option value={"57"}>(57) COLOMBIA</Option>
                  <Option value={"243"}>(243) CONGO</Option>
                  <Option value={"385"}>(385) CROATIA</Option>
                  <Option value={"53"}>(53) CUBA</Option>
                  <Option value={"357"}>(357) CYPRUS</Option>
                  <Option value={"420"}>(420) CZECH</Option>
                  <Option value={"45"}>(45) DENMARK</Option>
                  <Option value={"20"}>(20) EGYPT</Option>
                  <Option value={"372"}>(372) ESTONIA</Option>
                  <Option value={"251"}>(251) ETHIOPIA</Option>
                  <Option value={"298"}>(298) FAROE ISLANDS</Option>
                  <Option value={"679"}>(679) FIJI</Option>
                  <Option value={"358"}>(358) FINLAND</Option>
                  <Option value={"33"}>(33) FRANCE</Option>
                  <Option value={"220"}>(220) GAMBIA</Option>
                  <Option value={"995"}>(995) GEORGIA</Option>
                  <Option value={"49"}>(49) GERMANY</Option>
                  <Option value={"233"}>(233) GHANA</Option>
                  <Option value={"350"}>(350) GIBRALTAR</Option>
                  <Option value={"233"}>(30) GREECE</Option>
                  <Option value={"590"}>(590) GUADELOUPE</Option>
                  <Option value={"502"}>(502) GUATEMALA</Option>
                  <Option value={"224"}>(224) GUINEA</Option>
                  <Option value={"592"}>(592) GUYANA</Option>
                  <Option value={"509"}>(509) HAITI</Option>
                  <Option value={"504"}>(504) HONDURAS</Option>
                  <Option value={"852"}>(852) HONG KONG</Option>
                  <Option value={"36"}>(36) HUNGARY</Option>
                  <Option value={"354"}>(354) ICELAND</Option>
                  <Option value={"91"}>(91) INDIA</Option>
                  <Option value={"62"}>(62) INDONESIA</Option>
                  <Option value={"98"}>(98) IRAN</Option>
                  <Option value={"964"}>(964) IRAQ</Option>
                  <Option value={"964"}>(353) IRELAND</Option>
                  <Option value={"972"}>(972) ISRAEL</Option>
                  <Option value={"39"}>(39) ITALY</Option>
                  <Option value={"225"}>(225) IVORY COAST</Option>
                  <Option value={"81"}>(81) JAPAN</Option>
                  <Option value={"962"}>(962) JORDAN</Option>
                  <Option value={"254"}>(254) KENYA</Option>
                  <Option value={"965"}>(965) KUWAIT</Option>
                  <Option value={"856"}>(856) LAOS</Option>
                  <Option value={"371"}>(371) LATVIA</Option>
                  <Option value={"961"}>(961) LEBANON</Option>
                  <Option value={"266"}>(266) LESOTHO</Option>
                  <Option value={"231"}>(231) LIBERIA</Option>
                  <Option value={"218"}>(218) LIBYA</Option>
                  <Option value={"370"}>(370) LITHUANIA</Option>
                  <Option value={"352"}>(352) LUXEMBOURG</Option>
                  <Option value={"389"}>(389) MACEDONIA</Option>
                  <Option value={"261"}>(261) MADAGASCAR</Option>
                  <Option value={"265"}>(265) MALAWI</Option>
                  <Option value={"60"}>(60) MALAYSIA</Option>
                  <Option value={"960"}>(960) MALDIVES</Option>
                  <Option value={"223"}>(223) MALI</Option>
                  <Option value={"356"}>(356) MALTA</Option>
                  <Option value={"230"}>(230) MAURITIUS</Option>
                  <Option value={"52"}>(52) MEXICO</Option>
                  <Option value={"373"}>(373) MOLDOVA</Option>
                  <Option value={"377"}>(377) MONACO</Option>
                  <Option value={"976"}>(976) MONGOLIA</Option>
                  <Option value={"382"}>(382) MONTENEGRO</Option>
                  <Option value={"212"}>(212) MOROCCO</Option>
                  <Option value={"258"}>(258) MOZAMBIQUE</Option>
                  <Option value={"264"}>(264) NAMIBIA</Option>
                  <Option value={"977"}>(977) NEPAL</Option>
                  <Option value={"31"}>(31) NETHERLANDS ANTILLES</Option>
                  <Option value={"64"}>(64) NEW ZEALAND</Option>
                  <Option value={"227"}>(227) NIGER</Option>
                  <Option value={"47"}>(47) NORWAY</Option>
                  <Option value={"968"}>(968) OMAN</Option>
                  <Option value={"970"}>(970) PALESTINE</Option>
                  <Option value={"507"}>(507) PANAMA</Option>
                  <Option value={"675"}>(675) PAPUA NEW GUINEA</Option>
                  <Option value={"63"}>(63) PHILIPPINES</Option>
                  <Option value={"48"}>(48) POLAND</Option>
                  <Option value={"351"}>(351) PORTUGAL</Option>
                  <Option value={"974"}>(974) QATAR</Option>
                  <Option value={"40"}>(40) ROMANIA</Option>
                  <Option value={"7"}>(7) RUSSIAN FEDERATION</Option>
                  <Option value={"250"}>(250) RWANDA</Option>
                  <Option value={"966"}>(966) SAUDI ARABIA</Option>
                  <Option value={"221"}>(221) SENEGAL</Option>
                  <Option value={"248"}>(248) SEYCHELLES</Option>
                  <Option value={"232"}>(232) SIERRA LEONE</Option>
                  <Option value={"65"}>(65) SINGAPORE</Option>
                  <Option value={"421"}>(421) SLOVAKIA</Option>
                  <Option value={"27"}>(27) SOUTH AFRICA</Option>
                  <Option value={"34"}>(34) SPAIN</Option>
                  <Option value={"94"}>(94) SRI LANKA</Option>
                  <Option value={"249"}>(249) SUDAN</Option>
                  <Option value={"46"}>(46) SWEDEN</Option>
                  <Option value={"41"}>(41) SWITZERLAND</Option>
                  <Option value={"963"}>(963) SYRIA</Option>
                  <Option value={"886"}>(886) TAIWAN</Option>
                  <Option value={"992"}>(992) TAJIKISTAN</Option>
                  <Option value={"255"}>(255) TANZANIA</Option>
                  <Option value={"66"}>(66) THAILAND</Option>
                  <Option value={"228"}>(228) TOGO</Option>
                  <Option value={"216"}>(216) TUNISIA</Option>
                  <Option value={"90"}>(90) TURKEY</Option>
                  <Option value={"90"}>(90) TURKCELL</Option>
                  <Option value={"993"}>(993) TURKMENISTAN</Option>
                  <Option value={"256"}>(256) UGANDA</Option>
                  <Option value={"390"}>(390) UKRAINE</Option>
                  <Option value={"971"}>(971) UNITED ARAB EMIRATES</Option>
                  <Option value={"44"}>(44) UNITED KINGDOM</Option>
                  <Option value={"598"}>(598) URUGUAY</Option>
                  <Option value={"1"}>(1) CANADA</Option>
                  <Option value={"1"}>(1) UNITED STATES OF AMERICA</Option>
                  <Option value={"998"}>(998) UZBEKISTAN</Option>
                  <Option value={"58"}>(58) VENEZUELA</Option>
                  <Option value={"84"}>(84) VIETNAM</Option>
                  <Option value={"967"}>(967) YEMEN</Option>
                  <Option value={"260"}>(260) ZAMBIA</Option>
                  <Option value={"263"}>(263) ZIMBABWE</Option>
                </Select>
                {!catalogName && <Text>Fill in this field!!!</Text>}
                <Btn
                  onClick={() => {
                    setLoad(true);
                    createCatalog(user, { catalogName, code }).then(
                      (res: any) => {
                        if (res) {
                          Swal.fire({
                            icon: "success",
                            title: `${res.message}`,
                            text: "You have created a catalog",
                          }).then(() => {
                            setPopCatalog(false);
                          });
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: `Error creating catalog`,
                            text: "Check your network connectivity",
                          }).then(() => {
                            setLoad(false);
                            setPopCatalog(false);
                          });
                        }
                      }
                    );
                  }}
                >
                  New Catalog
                </Btn>
              </Card>
            </>
          )}
        </Container>
      </motion.div>
    </>
  );
};

export default CatalogPop;

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

const Btn = styled.div`
  width: 100%;
  height: 50px;
  background-color: #043260;
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
  cursor: pointer;
  transition: all 450ms;

  &:hover {
    border-radius: 5px;
  }
`;

const Text = styled.div`
  text-align: right;
  color: red;
`;

const Yellow = styled.div`
  color: orange;
  margin: 10px 0;
`;

const Input = styled.input`
  margin: 10px 0;
  height: 40px;
  width: 97%;
  font-family: Athletics;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid grey;

  &:focus {
    outline: 4px solid #043260;
    border: 0;
  }
`;

const Name = styled.div`
  color: grey;
`;

const P = styled.h3`
  color: #043260;
  margin-bottom: 10px;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  width: 530px;
  padding: 20px;
  min-height: 200px;
  background-color: white;
  border-radius: 5px;
  z-index: 2;

  @media screen and (max-width: 600px) {
    width: 97%;
  }
`;

const Container = styled.div`
  position: fixed;
  width: calc(100% - 220px);
  height: 100%;
  z-index: 2;
  top: 0;
  right: 0;
  background: rgba(9, 13, 66, 0.37);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Option = styled.option``;

const Select = styled.select`
  height: 40px;
  padding-left: 10px;
  width: 100%;
  margin: 10px 0;
  resize: none;
  font-family: Athletics;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:focus {
    outline: 4px solid #043260;
  }
`;
