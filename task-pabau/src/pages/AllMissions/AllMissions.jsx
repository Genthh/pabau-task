import React from "react";
import styled from "styled-components";
import { Container, Space } from "@mantine/core";
import { BasePage } from "../../components/common/BasePage/BasePage";
import { MissionCards } from "../../components/missioncards/MissionCards";

const StyledContainer = styled(Container)`
  max-width: 80%;
`;

export const AllMissions = () => {
  return (
    <BasePage>
      <StyledContainer>
        <Space h={40} />
        <MissionCards />
        <Space h={40} />
      </StyledContainer>
    </BasePage>
  );
};
