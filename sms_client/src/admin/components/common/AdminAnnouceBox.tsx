import styled from "styled-components";
import { FC } from "react";

interface iAnnounceBox {
  title: string;
  num: any;
  hint: string;
  icons: any;
}

const AdminAnnounceBox: FC<iAnnounceBox> = ({ title, num, hint, icons }) => {
  return (
    <>
      <Box>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Span>{title}</Span>
          <Icon>{icons}</Icon>
        </div>
        <Bold>{num}</Bold>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Hint>{hint}</Hint>
        </div>
      </Box>
    </>
  );
};

export default AdminAnnounceBox;

const Hint = styled.div`
  color: #043260;
`;

const Bold = styled.h1`
  color: #043260;
`;

const Span = styled.span``;

const Icon = styled.div`
  padding: 15px;
  background-color: #ebebeb;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: crimson;
  cursor: pointer;
  transition: all 0.75s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Box = styled.div`
  width: 100%;
  border-radius: 5px;
  cursor: default;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
`;
