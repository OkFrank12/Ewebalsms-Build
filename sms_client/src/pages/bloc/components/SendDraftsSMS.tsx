import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import Loader from "../../../static/Loader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createDraftMessageAPI,
  sendDraftMessagesAPI,
} from "../../../api/draftsAPI";

const SendDraftsSMS = () => {
  const data = JSON.parse(localStorage.getItem("draft-history")!);
  const user = useSelector((state: any) => state.user);
  const [message, setMessage] = useState<string>(data?.message);
  const [senderName, setSenderName] = useState<string>(data?.senderName);
  const [phoneNo, setPhoneNo] = useState<string>(data?.phoneNo);
  const [code, setCode] = useState<string>(data?.code);
  const [loading, setLoading] = useState<boolean>(false);

  const validInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/[^,\d]/g, "");
  };
  const navigate = useNavigate();

  function createPages(text: any) {
    const maxCharsPerPage = 160;
    const pages = [];

    let currentPage = "";
    let charCount = 0;

    for (let i = 0; i < text.length; i++) {
      currentPage += text[i];
      charCount++;

      // Check if page limit reached
      if (charCount === maxCharsPerPage) {
        pages.push(currentPage);
        currentPage = "";
        charCount = 0;
      }
    }

    // Push any remaining characters as the last page
    if (currentPage.length > 0) {
      pages.push(currentPage);
    }

    return pages;
  }

  const text = message;
  const pages = createPages(text);

  const arrOfPhones = phoneNo.split(",");

  return (
    <>
      <>
        {loading && <Loader />}
        <Block>
          <P>Write a Message</P>
          <p style={{ color: "crimson", fontSize: "14px" }}>
            {message?.length >= 160 &&
              "Please Note: 160 characters makes up 1 page and each page cost is dependent on the country you are sending to."}
          </p>
          <InputBloc>
            <Span>Country*</Span>
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
          </InputBloc>
          <InputBloc>
            <Span>Compose*</Span>
            <Input
              value={message}
              required
              onChange={(e: any) => {
                setMessage(e.target.value);
              }}
              placeholder="Message goes here"
            />
            <Num gre="green" re="red">
              Characters:
              <p>
                {" "}
                <span>{message?.length}</span>
              </p>
            </Num>
          </InputBloc>
          <InputBloc>
            <Span>
              Sender Name / Id*{" "}
              <span>Note: the sender name has to be a whitelisted name.</span>
            </Span>
            <Input1
              value={senderName}
              onChange={(e: any) => {
                setSenderName(e.target.value);
              }}
              maxLength={11}
              required
              placeholder="Sender's Name goes here"
            />
          </InputBloc>
          <InputBloc>
            <Span>
              SMS to* <span>Note: After each Phone No. Place a comma.</span>{" "}
              <span>Note: Each phone number must start with {code}</span>
            </Span>
            <Input
              value={phoneNo}
              onChange={(e: any) => {
                setPhoneNo(e.target.value);
              }}
              required
              onInput={validInput}
              placeholder={`${code}9165342873,${code}80347836422`}
            />

            <Num gre="green" re="red">
              Total Recievers:{" "}
              <span>{phoneNo === "" ? 0 : phoneNo?.split(",")?.length}</span>
            </Num>
          </InputBloc>
          <br />
          <p style={{ color: "red" }}>
            SMS Charge: ₦
            {message && phoneNo
              ? arrOfPhones.length * pages.length * 3 + ".00"
              : "0.00"}
          </p>
          <BtnHold>
            {!(senderName && message && phoneNo) ? (
              <Button bak={"#192d4237"} clr="white">
                Send SMS
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setLoading(true);
                  sendDraftMessagesAPI(user, data?._id, {
                    senderName,
                    phoneNo,
                    message,
                    code,
                  }).then((res: any) => {
                    setLoading(false);
                    if (res?.status === 200) {
                      Swal.fire({
                        icon: "success",
                        title: `${res?.data?.message}`,
                        text: `${res?.data?.unitDetails}`,
                      }).then(() => {
                        navigate("/user-dashboard/sms-history");
                      });
                    } else if (res?.response?.status === 403) {
                      Swal.fire({
                        icon: "warning",
                        title: `${res?.response?.data?.message}`,
                        text: "Send your IP Address for whitelisting",
                      }).then(() => {
                        navigate("/user-dashboard/whitelists");
                      });
                    } else if (res?.response?.status === 400) {
                      Swal.fire({
                        icon: "warning",
                        title: `${res?.response?.data?.message}`,
                        text: "You are passing the wrong country code",
                      });
                    } else if (res?.response?.status === 402) {
                      Swal.fire({
                        icon: "warning",
                        title: `${res?.response?.data?.message}`,
                      });
                    } else if (res?.response?.status === 409) {
                      Swal.fire({
                        icon: "warning",
                        title: `${res?.response?.data?.message}`,
                        text: "Send the Id for whitelisting",
                      }).then(() => {
                        navigate("/user-dashboard/whitelists");
                      });
                    } else if (res?.response?.status === 503) {
                      Swal.fire({
                        icon: "success",
                        title: `Message Sent`,
                        text: "DND Phone numbers Detected...",
                      }).then(() => {
                        navigate("/user-dashboard/sms-history");
                      });
                    } else if (res?.response?.status === 550) {
                      Swal.fire({
                        icon: "warning",
                        title: `${res?.response?.data?.message}`,
                      });
                    } else if (res?.response?.status === 401) {
                      Swal.fire({
                        icon: "info",
                        title: `${res?.response?.data?.message}`,
                        text: "You need to buy SMS Units",
                      }).then(() => {
                        navigate("/user-dashboard/buy-sms");
                      });
                    } else if (res?.message) {
                      Swal.fire({
                        icon: "error",
                        title: "No Internet Connection",
                        text: `Please check your network`,
                      });
                    }
                  });
                }}
                bak={"#043260"}
                clr="white"
              >
                Send SMS
              </Button>
            )}
            {!(senderName && phoneNo && message) ? (
              <Button bak={"#192d4237"} clr="#fff">
                Draft SMS
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setLoading(true);
                  createDraftMessageAPI(user, {
                    senderName,
                    phoneNo,
                    message,
                    code,
                  }).then((res: any) => {
                    if (res) {
                      Swal.fire({
                        icon: "success",
                        title: "Added To Drafts",
                      }).then(() => {
                        setLoading(false);
                        navigate("/user-dashboard/drafted-sms");
                      });
                    } else {
                      Swal.fire({
                        icon: "error",
                        title: "Can't add to drafts",
                        text: "This might be due to network issues",
                      }).then(() => {
                        setLoading(false);
                      });
                    }
                  });
                }}
                bak={"#e83838"}
                clr="#fff"
              >
                Draft SMS
              </Button>
            )}
          </BtnHold>
        </Block>
      </>
    </>
  );
};

export default SendDraftsSMS;

const Option = styled.option``;

const Select = styled.select`
  height: 40px;
  padding-left: 10px;
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

const BtnHold = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px 0;
  flex-wrap: wrap;
`;

const Button = styled.div<{
  bak?: string;
  bor?: string;
  clr?: string;
}>`
  width: 49%;
  height: 50px;
  display: flex;
  cursor: pointer;
  background-color: ${({ bak }) => bak};
  color: ${({ clr }) => clr};
  justify-content: center;
  border: 2px solid ${({ bor }) => bor};
  align-items: center;

  &:hover {
    border-radius: 5px;
  }
`;

const Input1 = styled.input`
  height: 35px;
  padding-left: 10px;
  margin-top: 10px;
  resize: none;
  font-family: Athletics;
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
    margin-right: 10px;
  }
`;

const Input = styled.textarea`
  height: 100px;
  margin-top: 10px;
  resize: none;
  padding: 10px;
  font-family: Athletics;
  border: 0;
  border-radius: 5px;
  box-shadow: rgba(180, 178, 178, 0.2) 0px 2px 8px 0px;

  &:focus {
    outline: 4px solid #043260;
  }
`;

const Span = styled.span`
  margin-top: 10px;

  span {
    color: red;
    font-size: 13px;
  }
`;

const InputBloc = styled.div`
  color: grey;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const P = styled.h3`
  color: #043260;
`;

const Block = styled.div`
  width: 600px;
  min-height: 300px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  background-color: white;
  padding: 40px 45px;
  margin: 20px;

  @media screen and (max-width: 700px) {
    padding: 30px;
    width: 98%;
    margin: 10px;
  }

  @media screen and (max-width: 600px) {
    padding: 20px;
    ${Button} {
      font-size: 13px;
      height: 45px;
    }
  }
`;
