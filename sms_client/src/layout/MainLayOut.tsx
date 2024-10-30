import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

const MainLayOut = () => {
  const ScrollUp = () => {
    window.scroll(0, 0);
  };
  return (
    <>
      <Header />
      <Outlet />
      <Btn onClick={ScrollUp}>
        <AiOutlineArrowUp />
      </Btn>
      <Footer />
    </>
  );
};

export default MainLayOut;

const Btn = styled.div`
  color: #043260;
  width: 45px;
  height: 45px;
  position: fixed;
  bottom: 15px;
  cursor: pointer;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
`;
