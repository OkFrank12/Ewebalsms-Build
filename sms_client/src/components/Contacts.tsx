import { FC, useMemo, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import Swal from "sweetalert2";
import Loader from "../static/Loader";
import { deleteContactsAPI } from "../api/miniContactsAPI";

interface iContacts {
  el: any;
  stateSearch: any;
  setStateSearch: any;
  text: string;
}

const Contacts: FC<iContacts> = ({ el, stateSearch, text, setStateSearch }) => {
  const [load, setLoad] = useState<boolean>(false);
  useMemo(() => {
    setStateSearch(
      el?.contacts?.filter(
        (el: any) => el?.includes(text) || el?.includes(text)
      )
    );
  }, [el?.contacts, text]);

  const catalogID = el?._id;

  return (
    <>
      {load && <Loader />}
      <>
        {stateSearch &&
          stateSearch?.map((el: any, idx: any) => (
            <Holder key={idx}>
              <span>+{el}</span>
              <Icon1
                size={25}
                color="red"
                onClick={() => {
                  Swal.fire({
                    icon: "warning",
                    title: "Are you sure?",
                    text: "You are about to delete this contact",
                    confirmButtonText: "Proceed",
                    cancelButtonText: "Nope",
                    showCancelButton: true,
                  }).then((willDelete) => {
                    if (willDelete.isConfirmed) {
                      setLoad(true);
                      deleteContactsAPI(catalogID, idx).then((res) => {
                        if (res?.status === 200) {
                          Swal.fire({
                            icon: "success",
                            title: `${res?.data?.message}`,
                          }).then(() => {
                            setLoad(false);
                          });
                        } else if (res?.message) {
                          Swal.fire({
                            icon: "error",
                            title: "Unable to delete contact",
                            text: "Check your credentials or network",
                          }).then(() => {
                            setLoad(false);
                          });
                        }
                      });
                    }
                  });
                }}
              />
            </Holder>
          ))}
      </>
    </>
  );
};

export default Contacts;

// const Roller = styled.div`
//   width: 40px;
//   height: 40px;
//   border: 5px solid #043260;
//   border-bottom-color: #ff3d00;
//   border-radius: 50%;
//   display: inline-block;
//   box-sizing: border-box;
//   animation: rotation 1s linear infinite;

//   @keyframes rotation {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;

const Icon1 = styled(AiOutlineDelete)`
  padding: 10px;
  width: 35px;
  height: 35px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  position: relative;
  margin: 2px;
  border-radius: 5px;
  padding: 10px;
  span {
    color: #043260;
    font-weight: 800;
    letter-spacing: 1.5px;
  }

  p {
    color: grey;
    font-size: 12px;
  }

  @media screen and (max-width: 720px) {
    span {
      letter-spacing: 1px;
    }
  }

  @media screen and (max-width: 470px) {
    span {
      letter-spacing: 1.5px;
    }
  }
`;
