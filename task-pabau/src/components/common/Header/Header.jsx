import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 40px;
  align-items: center;
  height: 80px;
  background-color: #26145c;

  h1 {
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 16px;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>SpaceX Task Assignment</h1>
    </HeaderContainer>
  );
};
