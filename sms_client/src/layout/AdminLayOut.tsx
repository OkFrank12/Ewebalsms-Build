import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Logo from "../static/Logo";
import ewebalLogo from "../assets/Ewebal_Logo.png";
import { motion } from "framer-motion";

const AdminLayOut = () => {
  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Container>
          <Link
            to={`/`}
            style={{
              textDecoration: "none",
              color: "#043260",
            }}
          >
            <Logo color="1" image={ewebalLogo} />
          </Link>
          <Main>
            <Outlet />
          </Main>
        </Container>
      </motion.div>
    </>
  );
};

export default AdminLayOut;

const Main = styled.div`
  width: 500px;
  min-height: 100px;
  margin-top: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 55px 50px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 12px;
    padding: 40px 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f1f7;
  font-size: 16px;
  padding: 20px 0;
`;
