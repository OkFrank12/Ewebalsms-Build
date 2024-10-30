import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import styled from "styled-components";
import { usePopulateCatalogs } from "../hooks/customHooks";
import { useSelector } from "react-redux";
import "../code.css";
import { mutate } from "swr";
import { Link } from "react-router-dom";
import { deleteCatalog } from "../api/contactsAPI";
import Swal from "sweetalert2";
import { useState } from "react";
import Loader from "../static/Loader";

const Catalogs = () => {
  const user = useSelector((state: any) => state.user);
  const { catalogs, isLoading } = usePopulateCatalogs(user);
  const [load, setLoad] = useState<boolean>(false);
  return (
    <>
      {load && <Loader />}
      {isLoading ? (
        <>
          <Roller />
        </>
      ) : (
        <>
          {catalogs &&
            catalogs?.map((el: any) => (
              <Holder key={el?._id}>
                <span>{el?.contacts?.length}</span>
                <p>{el?.catalogName}</p>
                <Action>
                  <Link
                    to={`/user-dashboard/set-catalogs/${
                      el?._id
                    }/${crypto.randomUUID()}`}
                  >
                    <Icon title="view contacts" size={25} color="#043260" />
                  </Link>
                  <Icon1
                    title="delete contacts"
                    size={25}
                    color="red"
                    onClick={() => {
                      Swal.fire({
                        icon: "warning",
                        title: "Are you sure?",
                        text: "You are about to delete this catalog",
                        confirmButtonText: "Proceed",
                        cancelButtonText: "Nope",
                        showCancelButton: true,
                      }).then((willDelete) => {
                        if (willDelete.isConfirmed) {
                          setLoad(true);
                          mutate(`${user}/${el?._id}/delete-catalog`, () =>
                            deleteCatalog(user, el?._id).then((res) => {
                              if (res) {
                                Swal.fire({
                                  icon: "success",
                                  title: `${res?.message}`,
                                }).then(() => {
                                  setLoad(false);
                                });
                              }
                            })
                          );
                        }
                      });
                    }}
                  />
                </Action>
              </Holder>
            ))}
        </>
      )}
    </>
  );
};

export default Catalogs;

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

const Icon = styled(AiOutlineEye)`
  padding: 10px;
  background-color: white;
  margin: 2px;
  height: 35px;
  width: 35px;
  border-radius: 5px;
  cursor: pointer;
`;

const Icon1 = styled(AiOutlineDelete)`
  padding: 10px;
  background-color: white;
  margin: 2px;
  border-radius: 5px;
  height: 35px;
  width: 35px;
  cursor: pointer;
`;

const Action = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
`;

const Holder = styled.div`
  width: 100%;
  min-height: 50px;
  flex-direction: column;
  background-color: whitesmoke;
  position: relative;
  padding: 10px;
  span {
    color: #043260;
    font-size: 50px;
    font-weight: 800;
  }
  p {
    color: grey;
    font-size: 12px;
    text-transform: capitalize;
    flex-wrap: wrap;
  }
`;
