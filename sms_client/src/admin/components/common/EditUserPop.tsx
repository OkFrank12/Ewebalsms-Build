import styled from "styled-components";

const EditUserPop = () => {
  return (
    <>
      <Container></Container>
    </>
  );
};

export default EditUserPop;

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
