import styled from "styled-components";
import SmallTxt from "../../../components/SmallTxt";
import moment from "moment";
import { useState } from "react";
import { updateAdminCredentialsAPI } from "../../../api/AdminAPI";
import Swal from "sweetalert2";
import Loader from "../../../static/Loader";

const AdminSummary = () => {
  const data = JSON.parse(localStorage.getItem("adminCredentials")!);
  const [adminName, setAdminName] = useState<string>(data?.adminName);
  const [adminFullName, setAdminFullName] = useState<string>(
    data?.adminFullName
  );
  const [contact, setContact] = useState<string>(data?.contact);
  const [email, setEmail] = useState<string>(data?.email);
  const [load, setLoad] = useState<boolean>(false);

  return (
    <>
      {load && <Loader />}
      <Body>
        <Main>
          <Top>
            <SmallTxt
              p="Admin Summary"
              span="An Overview of your personal details"
            />
          </Top>
          <Box>
            <>
              <Title>
                Account <div>✅</div>
              </Title>
              <InputHolder>
                <p>Admin Name</p>
                <Input
                  type="text"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                />
              </InputHolder>
              <br />
              <InputHolder>
                <p>Full Name</p>
                <Input
                  type="text"
                  value={adminFullName}
                  onChange={(e) => setAdminFullName(e.target.value)}
                />
              </InputHolder>
              <br />
              <Grid>
                <InputHolder>
                  <p>Role</p>
                  <Input type="text" value={data?.role?.toUpperCase()} />
                </InputHolder>
                <InputHolder>
                  <p>Contact</p>
                  <Input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </InputHolder>
              </Grid>
              <br />
              <InputHolder>
                <p>Email</p>
                <Input
                  style={{ textTransform: "lowercase" }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputHolder>
              <br />
              <Grid>
                <InputHolder>
                  <p>Date Created</p>
                  <Input
                    type="text"
                    value={moment(data?.createdAt).format("LLL")}
                  />
                </InputHolder>
                <InputHolder>
                  <p>Last Updated</p>
                  <Input
                    type="text"
                    value={moment(data?.updatedAt).format("LLL")}
                  />
                </InputHolder>
              </Grid>
              <Btn
                bg="1"
                onClick={() => {
                  setLoad(true);
                  updateAdminCredentialsAPI(data?._id, {
                    adminName,
                    adminFullName,
                    contact,
                    email,
                  }).then((res: any) => {
                    if (res?.status === 200) {
                      setLoad(false);
                      Swal.fire({
                        icon: "success",
                        title: `${res?.data?.message}`,
                      }).then(() => {
                        window.location.reload();
                      });
                    } else if (res?.message) {
                      setLoad(false);
                      Swal.fire({
                        icon: "error",
                        title: "Network Error",
                        text: "Slow or No Network",
                      });
                    }
                  });
                }}
              >
                Save
              </Btn>
            </>
          </Box>
        </Main>
      </Body>
    </>
  );
};

export default AdminSummary;

const Btn = styled.div<{
  bg: string;
}>`
  width: 100%;
  height: 50px;
  background-color: ${({ bg }) => (bg ? "#043260" : "#192d4237")};
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  align-items: center;
  transition: all 450ms;
  cursor: pointer;

  &:hover {
    border-radius: 5px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

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
  text-transform: capitalize;
  &:focus {
    outline: 4px solid #043260;
  }
`;

const InputHolder = styled.div`
  width: 100%;

  p {
    color: #043260;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Top = styled.div`
  width: 100%;
`;

const Box = styled.div`
  width: 600px;
  font-size: 15px;
  background-color: white;
  padding: 30px;
  min-height: 500px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 20px;
  }
`;

const Main = styled.div`
  width: 97%;
  height: 100%;
  margin-top: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;
