import styled from "styled-components";

const Loader = () => {
  return (
    <>
      <Bg>
        <Roller />
      </Bg>
    </>
  );
};

export default Loader;

const Bg = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 150;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Roller = styled.div`
  width: 48px;
  height: 48px;
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
