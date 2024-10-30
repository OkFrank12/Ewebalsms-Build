import styled from "styled-components";
import SmallTxt from "../../../components/SmallTxt";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { usePopulateCatalogs } from "../../../hooks/customHooks";
import {
  insertContactsToExistingCatalogAPI,
  insertContactsToNewCatalogAPI,
  uploadContactsToExistingCatalogAPI,
  uploadContactsToNewCatalogAPI,
} from "../../../api/contactsAPI";
import Swal from "sweetalert2";
import Loader from "../../../static/Loader";
import { useNavigate } from "react-router-dom";
import ExportCSVButton from "../../../components/ExportCSVButton";

const UploadInsert = () => {
  const [state, setState] = useState<boolean>(false);
  const [state1, setState1] = useState<boolean>(false);
  const [code, setCode] = useState<string>("234");
  const [selectedFile, setSelectedFile]: any = useState(null);
  const [file, setFile] = useState<any>();
  const [fileURL, setFileURL] = useState<any>();
  const handleFileChange = (event: any) => {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      // Update the state with the selected file
      file;
      setSelectedFile(fileInput.files[0]);
      const readFile = URL.createObjectURL(fileInput.files[0]);
      setFileURL(fileInput.files[0]);
      setFile(readFile);
    } else {
      // No file selected, set state to null
      setSelectedFile(null);
    }
  };

  const [phoneNo, setPhoneNo] = useState<string>("");
  const validInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/[^,\d]+(?:\s*[^,\d]+\s*)*/g, "");
  };

  const [id, setId] = useState<string>("");
  const [catalogName, setCatalogName] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);
  const user = useSelector((state: any) => state.user);
  const { catalogs } = usePopulateCatalogs(user);

  const formData = new FormData();
  formData.append("csv", fileURL);
  formData.append("catalogName", catalogName);
  formData.append("code", code);

  const navigate = useNavigate();

  return (
    <>
      {load && <Loader />}
      <Body>
        <Main>
          <SmallTxt
            p="Upload and Insert Contacts"
            span="Render two or more contacts through uploads or insertions."
          />
          <Center>
            <ExportCSVButton />
            <Holder>
              <P>Upload Contacts</P>
              <Span>
                Important!
                <p>
                  {" "}
                  STEP 1: We recommended you upload CSV file (Files must contain
                  comma after each phone number). Text should not be allowed.
                </p>
                <br />
                <p>
                  {" "}
                  STEP 2: Please ensure that there are no duplicate phone
                  numbers to avoid future errors or problems while sending
                  messages.{" "}
                </p>
                <br />
              </Span>
              <Txt>Toggle Options on how to Upload Contacts.</Txt>
              <br />
              <Div>
                <span>Create New Catalog</span>
                {state ? (
                  <Icon onClick={() => setState(!state)} size={40} />
                ) : (
                  <Icon1 onClick={() => setState(!state)} size={40} />
                )}
                <span>Existing Catalog</span>
              </Div>
              {state ? (
                <InputSection>
                  <Text>Catalog Name</Text>
                  <Input
                    value={catalogName}
                    onChange={(e) => {
                      setCatalogName(e.target.value);
                    }}
                    placeholder="Catalog Name goes here"
                    required
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
                    <Option value={"236"}>
                      (236) CENTRAL AFRICAN REPUBLIC
                    </Option>
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
                </InputSection>
              ) : (
                <InputSection>
                  <Text>Existing Catalog</Text>
                  <Section
                    onChange={(e) => {
                      setId(e.target.value);
                    }}
                    defaultValue={`Choose Catalog`}
                  >
                    <Options disabled>Choose Catalog</Options>
                    {catalogs?.map((el: any) => (
                      <Options key={el?._id} value={el?._id}>
                        {el?.catalogName}
                      </Options>
                    ))}
                  </Section>
                </InputSection>
              )}
              <br />
              <br />
              <div style={{ display: "flex", alignItems: "center" }}>
                <Upload htmlFor="csv">Upload CSV file</Upload>
                <Render>
                  {selectedFile && <p>Selected file: {fileURL.name}</p>}
                </Render>
              </div>
              <File
                type="file"
                id="csv"
                onChange={handleFileChange}
                accept=".csv"
              />
              <br />
              {state ? (
                <Btn
                  onClick={() => {
                    setLoad(true);
                    uploadContactsToNewCatalogAPI(user, formData).then(
                      (res) => {
                        if (res?.status === 201) {
                          Swal.fire({
                            icon: "success",
                            title: `${res?.data?.message}`,
                            text: `New Contacts in ${catalogName}`,
                          });
                          navigate("/user-dashboard/all-contacts");
                          setLoad(false);
                        } else if (res?.response?.status === 400) {
                          Swal.fire({
                            icon: "warning",
                            title: `${res?.response?.data}`,
                          }).then(() => {
                            setLoad(false);
                          });
                        } else if (res?.message) {
                          Swal.fire({
                            icon: "error",
                            title: "Upload Error",
                            text: "Check your Network",
                          }).then(() => {
                            setLoad(false);
                          });
                        }
                      }
                    );
                  }}
                >
                  Upload Contacts
                </Btn>
              ) : (
                <Btn
                  onClick={() => {
                    setLoad(true);
                    uploadContactsToExistingCatalogAPI(user, id, formData).then(
                      (res) => {
                        if (res?.status === 201) {
                          Swal.fire({
                            icon: "success",
                            title: `${res?.data?.message}`,
                            text: `New Contacts in ${catalogName}`,
                          });
                          navigate("/user-dashboard/all-contacts");
                          setLoad(false);
                        } else if (res?.response?.status === 400) {
                          Swal.fire({
                            icon: "warning",
                            title: `${res?.response?.data}`,
                          }).then(() => {
                            setLoad(false);
                          });
                        } else if (res?.message) {
                          Swal.fire({
                            icon: "error",
                            title: "Upload Error",
                            text: "Check your Network",
                          }).then(() => {
                            setLoad(false);
                          });
                        }
                      }
                    );
                  }}
                >
                  Upload Contacts
                </Btn>
              )}
            </Holder>
            <Holder>
              <P>Insert Contacts</P>
              <Span>
                Important! You can copy and paste phone number. After each phone
                number place a comma.
              </Span>
              <InputBloc>
                <Text>Copy & Paste Phone Numbers</Text>
                <Input1
                  value={phoneNo}
                  onChange={(e: any) => {
                    setPhoneNo(e.target.value);
                  }}
                  required
                  onInput={validInput}
                  placeholder="Phone No: +234 9102980232, +234 73988092830"
                />
                <Num gre="green" re="red">
                  Total Contacts:{" "}
                  <span>{phoneNo === "" ? 0 : phoneNo.split(",").length}</span>
                </Num>
              </InputBloc>
              <br />
              <Div>
                <span>Create New Catalog</span>
                {state1 ? (
                  <Icon onClick={() => setState1(!state1)} size={40} />
                ) : (
                  <Icon1 onClick={() => setState1(!state1)} size={40} />
                )}
                <span>Existing Catalog</span>
              </Div>
              {state1 ? (
                <InputSection>
                  <Text>Catalog Name</Text>
                  <Input
                    value={catalogName}
                    onChange={(e) => {
                      setCatalogName(e.target.value);
                    }}
                    placeholder="Catalog Name goes here"
                    required
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
                    <Option value={"236"}>
                      (236) CENTRAL AFRICAN REPUBLIC
                    </Option>
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
                </InputSection>
              ) : (
                <>
                  <InputSection>
                    <Text>Existing Catalog</Text>
                    <Section
                      onChange={(e) => {
                        setId(e.target.value);
                      }}
                      defaultValue={`Choose Catalog`}
                    >
                      <Options disabled>Choose Catalog</Options>
                      {catalogs?.map((el: any) => (
                        <Options key={el?._id} value={el?._id}>
                          {el?.catalogName}
                        </Options>
                      ))}
                    </Section>
                  </InputSection>
                </>
              )}
              <br />
              <br />
              {state1 ? (
                <Btn
                  onClick={() => {
                    setLoad(true);
                    insertContactsToNewCatalogAPI(
                      user,
                      catalogName,
                      phoneNo,
                      code
                    ).then((res: any) => {
                      if (res?.status === 201) {
                        Swal.fire({
                          icon: "success",
                          title: `${res?.data?.message}`,
                          text: "Contact uploaded to new Catalog",
                        }).then(() => {
                          setLoad(false);
                          navigate("/user-dashboard/all-contacts");
                        });
                      } else if (res?.response?.status === 400) {
                        Swal.fire({
                          icon: "warning",
                          title: `${res?.response?.data}`,
                        }).then(() => {
                          setLoad(false);
                        });
                      } else if (res?.message) {
                        Swal.fire({
                          icon: "error",
                          title: "Upload Error",
                          text: "Check your Network",
                        }).then(() => {
                          setLoad(false);
                        });
                      }
                    });
                  }}
                >
                  Insert Contacts
                </Btn>
              ) : (
                <Btn
                  onClick={() => {
                    setLoad(true);
                    insertContactsToExistingCatalogAPI(user, id, {
                      phoneNo,
                    }).then((res: any) => {
                      if (res?.status === 201) {
                        Swal.fire({
                          icon: "success",
                          title: `${res?.data?.message}`,
                          text: "Contact Catalog has been updated",
                        }).then(() => {
                          setLoad(false);
                          navigate("/user-dashboard/all-contacts");
                        });
                      } else if (res?.response?.status === 400) {
                        Swal.fire({
                          icon: "warning",
                          title: `${res?.response?.data}`,
                        }).then(() => {
                          setLoad(false);
                        });
                      } else if (res?.message) {
                        Swal.fire({
                          icon: "error",
                          title: "Upload Error",
                          text: "Check your Network",
                        }).then(() => {
                          setLoad(false);
                        });
                      }
                    });
                  }}
                >
                  Insert Contacts
                </Btn>
              )}
            </Holder>
          </Center>
        </Main>
      </Body>
    </>
  );
};

export default UploadInsert;

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

const Num = styled.div<{
  gre: string;
  re: string;
}>`
  font-size: 13px;
  margin-top: 5px;
  display: flex;

  span {
    color: ${({ gre }) => gre};

    margin-left: 10px;
  }

  p {
    color: ${({ re }) => re};
  }
`;

const Input1 = styled.textarea`
  height: 100px;
  margin-top: 10px;
  resize: none;
  padding: 10px;
  font-family: Athletics;
  border: 0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:focus {
    outline: 4px solid #043260;
  }
`;

const InputBloc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Render = styled.div``;

const File = styled.input`
  display: none;
`;

const Btn = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #043260;
  cursor: pointer;
  &:hover {
    border-radius: 5px;
  }
`;

const Options = styled.option``;

const Section = styled.select`
  width: 100%;
  height: 40px;
  border: 0;
  font-family: Athletics;
  margin-top: 5px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:focus {
    outline: 4px solid #043260;
  }
`;

const Text = styled.div``;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  font-family: Athletics;
  margin-top: 5px;
  border-radius: 5px;
  cursor: pointer;
  padding-left: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:focus {
    outline: 4px solid #043260;
  }
`;

const InputSection = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const Icon1 = styled(BsToggleOn)`
  color: #043260;
  cursor: pointer;
`;

const Icon = styled(BsToggleOff)`
  color: #043260;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #043260;
    color: white;
    text-align: center;
    margin: 2px;
  }
`;

const Txt = styled.div``;

const Upload = styled.label`
  padding: 10px;
  background-color: #043260;
  transition: all 350ms;
  color: white;
  cursor: pointer;

  &:hover {
    border-radius: 5px;
  }
`;

const Span = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const P = styled.h3`
  font-size: 18px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const Holder = styled.div`
  width: 650px;
  min-height: 300px;
  padding: 20px;
  font-size: 13px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 10px 0;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
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
