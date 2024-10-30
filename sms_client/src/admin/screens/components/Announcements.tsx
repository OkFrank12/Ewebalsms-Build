import styled from "styled-components";
import SmallTxt from "../../../components/SmallTxt";
import { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Loader from "../../../static/Loader";
import {
  clearAnnouncementsAPI,
  makeAnnouncementsAPI,
} from "../../../api/AdminAPI";
import { useViewAllAnnouncement } from "../../../hooks/customHooks";
import AdminAnnounceBox from "../../components/common/AdminAnnouceBox";
import { AiOutlineDelete } from "react-icons/ai";

const Announcements = () => {
  const [load, setLoad] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [hint, setHint] = useState<string>("");
  const admin = useSelector((state: any) => state.admin);
  const { announce, isLoad } = useViewAllAnnouncement();
  let copy = announce?.slice();
  copy = copy?.reverse();

  return (
    <Body>
      {load && <Loader />}
      <Main>
        <SmallTxt
          p="General Announcements"
          span="Dispatch general announcements to your users here."
        />
        <Center>
          <Holder>
            <P>Make an announcement</P>
            <InputBloc>
              <Text>Message</Text>
              <Input1
                value={message}
                placeholder="type in message"
                onChange={(e: any) => setMessage(e.target.value)}
              />
            </InputBloc>
            <InputBloc>
              <Text>Hint / Subject</Text>
              <Input
                value={hint}
                placeholder="title of the message"
                onChange={(e: any) => setHint(e.target.value)}
              />
            </InputBloc>
            <br />
            {!message || !hint ? (
              <Btn bg="">Make Announcement</Btn>
            ) : (
              <Btn
                bg="1"
                onClick={() => {
                  setLoad(true);
                  makeAnnouncementsAPI(admin, { message, hint }).then(
                    (res: any) => {
                      if (res?.status === 200) {
                        Swal.fire({
                          icon: "success",
                          title: `${res?.data?.message}`,
                          timer: 3000,
                          timerProgressBar: true,
                          text: `Announcements will be dispatched to the user's dashboard`,
                        }).then(() => {
                          window.location.reload();
                        });
                        setLoad(false);
                      } else if (res?.message) {
                        Swal.fire({
                          icon: "error",
                          title: `Credentials Error`,
                          text: `Check your credentials or network connectivity`,
                          timer: 3000,
                          timerProgressBar: true,
                        });
                        setLoad(false);
                      }
                    }
                  );
                }}
              >
                Make Announcement
              </Btn>
            )}
          </Holder>
        </Center>
        <Grid>
          {isLoad ? (
            <Roller />
          ) : (
            copy?.map((el: any) => {
              return (
                <AdminAnnounceBox
                  title={el?.hint}
                  hint={el?.message}
                  num={""}
                  icons={
                    <AiOutlineDelete
                      onClick={() => {
                        Swal.fire({
                          icon: "warning",
                          title: "About to clear out announcement?",
                          text: "Users can no longer see this announcement",
                          confirmButtonText: "Proceed",
                          cancelButtonText: "Nope",
                          showCancelButton: true,
                        }).then((willDelete) => {
                          if (willDelete.isConfirmed) {
                            setLoad(true);
                            clearAnnouncementsAPI(admin, el?._id).then(
                              (res: any) => {
                                if (res?.status === 200) {
                                  setLoad(false);
                                  Swal.fire({
                                    icon: "success",
                                    title: `${res?.data?.message}`,
                                  }).then(() => {
                                    window.location.reload();
                                  });
                                } else if (res?.message) {
                                  Swal.fire({
                                    icon: "error",
                                    title: "Unable to clear announcements",
                                    text: "This may be due to network",
                                  }).then(() => {
                                    setLoad(false);
                                  });
                                }
                              }
                            );
                          }
                        });
                      }}
                    />
                  }
                />
              );
            })
          )}
        </Grid>
      </Main>
    </Body>
  );
};

export default Announcements;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 100%;

  @media screen and (max-width: 1215px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
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

const Btn = styled.div<{
  bg: string;
}>`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  color: white;
  background-color: ${({ bg }) => (bg ? "#043260" : "#192d4237")};
  cursor: pointer;
  &:hover {
    border-radius: 5px;
  }
`;

const Text = styled.div``;

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

const Input = styled.textarea`
  height: 40px;
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
  width: 600px;
  min-height: 310px;
  padding: 20px;
  margin: 10px;
  font-size: 13px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (max-width: 850px) {
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
