import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { editCatalog } from "../api/contactsAPI";
import Swal from "sweetalert2";
import Loader from "../static/Loader";

interface iPop {
  setEditCatalog: any;
  el: any;
}

const EditCatalogName: FC<iPop> = ({ setEditCatalog, el }) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  const [catalogName, setCatalogName] = useState<string>(el?.catalogName);
  const [load, setLoad] = useState<boolean>(false);
  return (
    <>
      {load && <Loader />}
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <Container>
          {isLoading ? (
            <Roller />
          ) : (
            <>
              {" "}
              <Cover onClick={() => setEditCatalog(false)} />
              <Card>
                <P>Edit Catalog Name</P>
                <hr />
                <Yellow>Here you can edit catalog name...</Yellow>
                <Name>Current Catalog Name</Name>
                <Input
                  placeholder="Catalog Name"
                  defaultValue={el?.catalogName}
                  value={catalogName}
                  onChange={(e: any) => {
                    setCatalogName(e.target.value);
                  }}
                />
                {!catalogName && <Text>Fill in this field!!!</Text>}
                <Btn
                  onClick={() => {
                    setLoad(true);
                    editCatalog(el?.userID, el?._id, { catalogName }).then(
                      (res: any) => {
                        if (res) {
                          Swal.fire({
                            icon: "success",
                            title: `${res.message}`,
                          }).then(() => {
                            setLoad(false);
                            setEditCatalog(false);
                          });
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: `Can't Edit`,
                          }).then(() => {
                            setLoad(false);
                          });
                        }
                      }
                    );
                  }}
                >
                  Edit Catalog Name
                </Btn>
              </Card>
            </>
          )}
        </Container>
      </motion.div>
    </>
  );
};

export default EditCatalogName;

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

const Text = styled.div`
  text-align: right;
  color: red;
`;

const Yellow = styled.div`
  color: orange;
  margin: 10px 0;
`;

const Input = styled.input`
  margin: 10px 0;
  height: 40px;
  width: 97%;
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

const P = styled.h3`
  color: #043260;
  margin-bottom: 10px;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
