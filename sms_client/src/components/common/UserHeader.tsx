import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { onToggleState } from "../../storeConfig/reduxState";
import MobileUserSider from "../../static/MobileUserSider";
import { useViewOneUser } from "../../hooks/customHooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../static/Loader";
import Swal from "sweetalert2";
import { PiUserSwitchFill } from "react-icons/pi";

const UserHeader = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();
  const onToggleChange = () => {
    dispatch(onToggleState(!toggle));
  };
  const user = useSelector((state: any) => state.user);

  const { data, isLoading } = useViewOneUser(user);

  const [load, setLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {load && <Loader />}
      <Body jcc={toggle ? "end" : "space-between"}>
        {!toggle ? (
          <Menu size={30} onClick={onToggleChange} />
        ) : (
          <MobileUserSider />
        )}
        {isLoading ? (
          <>
            <Roller />
          </>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                marginLeft: "3px",
              }}
            >
              <Units>₦ {data?.units?.toLocaleString()}.00</Units>
            </div>
            <Avatar>{data?.userName?.charAt(0)}</Avatar>
            <div>
              <Username>{data?.userName}</Username>
              <FullName>{data?.fullName}</FullName>
            </div>
            {data?.role === "admin" && (
              <Mode
                onClick={() => {
                  setLoading(true);
                  Swal.fire({
                    icon: "success",
                    title: `Successfully switched to admin mode`,
                  }).then(() => {
                    setLoading(false);
                    navigate("/admin-dashboard");
                    // dispatch(onUserLogOut());
                  });
                }}
              >
                <Icon />
                <span>Switch Mode</span>
              </Mode>
            )}
          </div>
        )}
      </Body>
    </>
  );
};

export default UserHeader;

const Icon = styled(PiUserSwitchFill)`
  font-size: 30px;
  margin-right: 5px;
`;

const Mode = styled.div`
  padding: 5px 10px;
  margin: 0 10px;
  background-color: #043260;
  color: white;
  transition: all 500ms;
  cursor: pointer;
  align-items: center;
  display: flex;

  &:hover {
    border-radius: 5px;
    transform: scale(1.05);
  }
`;

const Roller = styled.div`
  width: 20px;
  height: 20px;
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

const Menu = styled(AiOutlineMenu)`
  padding: 10px;
  background-color: whitesmoke;
  margin: 2px;
  height: 45px;
  width: 45px;
  display: none;
  cursor: pointer;
`;

const Units = styled.div`
  margin-right: 5px;
  padding: 5px 10px;
  background-color: whitesmoke;
  color: red;
`;

const FullName = styled.div`
  color: grey;
  text-transform: capitalize;
  margin-right: 10px;
`;

const Username = styled.h3`
  text-transform: capitalize;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #043260;
  border-radius: 50%;
  color: white;
  margin-right: 5px;
  text-transform: uppercase;
`;

const Body = styled.div<{
  jcc?: string;
}>`
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: end;
  z-index: 20;
  background-color: white;
  border-bottom: 1px solid silver;

  @media screen and (max-width: 800px) {
    justify-content: ${({ jcc }) => jcc};
    ${Menu} {
      display: block;
    }
  }

  @media screen and (max-width: 560px) {
    font-size: 12px;

    ${Icon} {
      margin-right: 0;
    }

    ${Mode} {
      border-radius: 50%;
      padding: 5px;
      width: 40px;
      height: 40px;
      span {
        display: none;
      }
    }
  }
`;
