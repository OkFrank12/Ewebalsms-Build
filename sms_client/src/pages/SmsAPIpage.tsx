import { motion } from "framer-motion";
import "../code.css";
import styled from "styled-components";
import { TbBrandNodejs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import DevGuide from "../components/DevGuide";

const SmsAPIpage = () => {
  return (
    <>
      {" "}
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Body>
          <Intro>Use Ewebal's Complete Bulk SMS API Documentation</Intro>
          <DevGuide />
          <div>
            <TbBrandNodejs
              size={50}
              color="green"
              style={{ margin: "10px 0" }}
            />
          </div>
          <p>Nodejs & Axios Sample Code.</p>
          <code className="dark-theme">
            <span className="keyword">var</span>{" "}
            <span className="variable">axios</span> ={" "}
            <span className="keyword">require</span>(
            <span className="string">'axios'</span>);
            <br /> <span className="keyword">var</span>{" "}
            <span className="variable">config</span> = {"{"}
            <br />
            <span className="indent"></span>
            <span className="variable">method</span> {":"}{" "}
            <span className="string">'get'</span>,<br />
            <span className="indent"></span>
            <span className="variable">maxBodyLength</span> {":"}{" "}
            <span className="number">Infinity</span>,<br />
            <span className="indent"></span>
            <span className="variable">url</span>:{" "}
            <span className="string">
              'https://ewebal-sms-api.onrender.com/api/:email/:password/:message/:senderName/:phoneNo/:code/send-bulk-sms'
            </span>
            ,<br />
            <span className="indent"></span>
            <span className="variable">headers</span>: {"{}"}
            <br />
            {"}"}
            <br />
            <span className="variable">axios</span>(
            <span className="variable">config</span>)<br /> .then(
            <span className="keyword">function</span> (
            <span className="variable">response</span>) {"{"}
            <br />
            <span className="indent"></span>{" "}
            <span className="variable">console</span>
            {".log"}(<span className="keyword">JSON</span>.stringify(
            <span className="variable">response</span>.data));
            <br />
            {"}"}) <br />
            .catch(<span className="keyword">function</span> (
            <span className="variable">error</span>) {"{"}
            <br />
            <span className="indent"></span>
            <span className="variable">console</span>
            {".log"}(<span className="variable">error</span>);
            <br />
            {"}"});
          </code>
          <div>
            <IoLogoJavascript
              size={50}
              color="orange"
              style={{ margin: "10px 0" }}
            />
          </div>
          <p>Javascript & Fetch Sample Code.</p>
          <code className="dark-theme">
            <span className="variable">fetch</span>(
            <span className="string">
              'https://ewebal-sms-api.onrender.com/api/:email/:password/:message/:senderName/:phoneNo/:code/send-bulk-sms'
            </span>
            )<br /> .then(
            <span className="keyword">function</span> (
            <span className="variable">response</span>) {"{"}
            <br />
            <span className="indent"></span>{" "}
            <span className="keyword">return</span>{" "}
            <span className="variable">response</span>.json();
            <br />
            {"}"}) <br />
            .catch(<span className="keyword">function</span> (
            <span className="variable">error</span>) {"{"}
            <br />
            <span className="indent"></span>
            <span className="variable">console</span>
            {".log"}(<span className="variable">error</span>.message);
            <br />
            {"}"});
          </code>
        </Body>
      </motion.div>
    </>
  );
};

export default SmsAPIpage;

const Intro = styled.p`
  width: 100%;
  height: 100px;
  background-color: #043260;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 880px) {
    text-align: center;
  }
`;

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
`;
