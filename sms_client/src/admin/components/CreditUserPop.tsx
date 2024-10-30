import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useViewOneUser } from "../../hooks/customHooks";
import { creditUserWithUnitsAPI } from "../../api/AdminAPI";
import Swal from "sweetalert2";
import Loader from "../../static/Loader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface iUser {
  setToggle: any;
  user: any;
}

const CreditUserPop: FC<iUser> = ({ setToggle, user }) => {
  const navigate = useNavigate();
  const { data } = useViewOneUser(user?.userID);
  const admin = useSelector((state: any) => state.admin);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);
  const [units, setUnits] = useState<number>(user?.amountDeposited / 2);
  const validInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/[^,\d]/g, "");
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {load && <Loader />}
      <Container>
        {loading ? (
          <Roller />
        ) : (
          <>
            <Cover onClick={() => setToggle(false)} />
            <Card>
              <P>
                Credit User{" "}
                <span
                  style={{ color: "orange", textTransform: "capitalize" }}
                >{`<${data?.userName}>`}</span>
              </P>
              <Yellow>
                Amount to credit user is{" "}
                <b style={{ textTransform: "capitalize" }}>{units} units</b>
              </Yellow>
              <Name>Units *</Name>
              <Input
                value={units}
                onInput={validInput}
                onChange={(e: any) => setUnits(e.target.value)}
              />
              <Btn
                onClick={() => {
                  setLoad(true);
                  creditUserWithUnitsAPI(user?.userID, user?._id, admin, {
                    units,
                  }).then((res: any) => {
                    if (res?.status === 200) {
                      Swal.fire({
                        icon: "success",
                        title: `${res?.data?.message}`,
                      }).then(() => {
                        setLoad(false);
                        setToggle(false);
                        navigate(
                          `/admin-dashboard/manage-all-users/user-transactions/${user?._id}`
                        );
                      });
                    } else if (res?.message) {
                      Swal.fire({
                        icon: "error",
                        title: "Unable to Credit User",
                        text: "Check your credentials or network",
                      }).then(() => {
                        setLoad(false);
                        setToggle(false);
                      });
                    }
                  });
                }}
              >
                Credit User
              </Btn>
            </Card>
          </>
        )}
      </Container>
    </>
  );
};

export default CreditUserPop;

const Btn = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  background-color: #043260;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 450ms;

  &:hover {
    border-radius: 5px;
  }
`;

const Input = styled.input`
  margin: 10px 0;
  height: 40px;
  width: 100%;
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

const Yellow = styled.div`
  color: orange;
  margin: 10px 0;
`;

const P = styled.h3`
  color: #043260;
  margin-bottom: 10px;
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

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
