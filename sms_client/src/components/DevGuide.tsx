import styled from "styled-components";

const DevGuide = () => {
  return (
    <>
      <Body>
        <P>
          Guide for Developers on Consuming and Reading Bulk SMS API
          Documentation.
        </P>
        <ClickBtn
          href={"../../src/Ewebal SMS Solutions API Documentation.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get API Docs
        </ClickBtn>
      </Body>
    </>
  );
};

export default DevGuide;

const ClickBtn = styled.a`
  padding: 15px 20px;
  background-color: #043260;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 450ms;
  text-decoration: none;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    border-radius: 5px;
  }
`;

const P = styled.h3`
  color: #043260;
`;

const Body = styled.div`
  width: 800px;
  margin-top: 10px;
  min-height: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 20px;

  @media screen and (max-width: 880px) {
    width: 90%;
  }
`;
