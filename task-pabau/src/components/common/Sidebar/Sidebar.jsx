import { Text, Textarea, Button } from "@mantine/core";
import React from "react";
import styled from "styled-components";

const SideDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 220px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 30%;
  height: 470px;
`;

const StyledTitle = styled(Text)`
  color: #26145c;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
`;

const StyledTextarea = styled(Textarea)`
  width: 24em;
`;

export const Sidebar = () => {
  return (
    <SideDiv>
      <StyledTitle>Add comment</StyledTitle>
      <StyledTextarea size="sm" placeholder="Add comment" withAsterisk />
      <Button
        styles={{
          root: {
            fontSize: 16,
            fontFamily: "Montserrat",
            backgroundColor: "#26145c",
            fontWeight: 600,
            width: 380,

            "&:hover": {
              backgroundColor: "#26145c",
            },
          },
        }}
      >
        Send
      </Button>
    </SideDiv>
  );
};
