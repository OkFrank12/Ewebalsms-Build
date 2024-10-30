import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import AdminSider from "../components/AdminSider";
import { onAdminToggleState } from "../../storeConfig/reduxState";

const MobileAdminSider = () => {
  const toggle = useSelector((state: any) => state.adminToggle);
  const dispatch = useDispatch();
  const onToggleChange = () => {
    dispatch(onAdminToggleState(!toggle));
  };
  return (
    <>
      {" "}
      <motion.div
        className="box"
        initial={{ opacity: 0, speed: 10 }}
        animate={{ opacity: 1 }}
      >
        <Body>
          <Cover onClick={onToggleChange} />
          <Close size={30} onClick={onToggleChange} /> <AdminSider />
        </Body>
      </motion.div>
    </>
  );
};

export default MobileAdminSider;

const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
`;

const Close = styled(AiOutlineClose)`
  padding: 10px;
  background-color: whitesmoke;
  margin: 2px;
  position: absolute;
  width: 45px;
  height: 45px;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  transition: all 0.75s;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
  left: 0;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
