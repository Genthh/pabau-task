import { Space } from "@mantine/core";
import { BasePage } from "../../components/common/BasePage/BasePage";
import { Sidebar } from "../../components/common/Sidebar/Sidebar";
import { MissionDetails } from "../../components/mission/MissionDetails";
import styled from "styled-components";

const StyledMission = styled.div`
  display: flex;
  height: 100px;
`;

export const Mission = () => {
  return (
    <BasePage>
      <StyledMission>
        <Space h={40} />
        <MissionDetails />
        <Sidebar />
        <Space h={40} />
      </StyledMission>
    </BasePage>
  );
};
