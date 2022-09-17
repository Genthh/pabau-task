import React from "react";
import { useEffect, useState } from "react";
import SpaceMission from "../../graphql";
import styled from "styled-components";
import {
  Card,
  Group,
  Image,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";

const FlexContainer = styled.div`
  width: 80rem;
  margin-top: 30px;
  color: #26145c;
`;

const StyledTitle = styled(Text)`
  font-size: 14px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: #26145c;
  padding-bottom: 8px;
`;

const StyledText = styled(Text)`
  font-size: 12px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  color: #26145c;

  &::first-letter {
    text-transform: capitalize;
  }
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 8px;
`;

export const MissionCards = () => {
  const theme = useMantineTheme();

  const [data, setData] = useState([]);

  const loadSpaceMission = async () => {
    const spaceMissions = await SpaceMission.getSpaceMission(10);
    setData(spaceMissions);
  };

  useEffect(() => {
    loadSpaceMission();
  }, []);

  console.log("data", data);

  return (
    <>
      <FlexContainer>
        <Group spacing="lg">
          {data.map((item, index) => (
            <Card
              shadow="sm"
              radius={0}
              p="lg"
              style={{ width: 265, height: 360, cursor: "pointer" }}
              key={index}
              component={Link}
              to={`mission/${item.id}`}
            >
              <Card.Section
                style={{
                  padding: "12px 12px 0 12px",
                }}
              >
                <Image
                  src={
                    item && item.ships[0] && item.ships[0].image
                      ? item.ships[0].image
                      : "https://www.universetoday.com/wp-content/uploads/2011/03/IMG_4650a_STS-133_Ken-Kremer.jpg"
                  }
                  height={130}
                  alt={item.mission_name}
                />
              </Card.Section>
              <Group
                position="apart"
                style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
              >
                <StyledTitle>{item.mission_name}</StyledTitle>
              </Group>
              <Space h="md" />
              <Group position="apart">
                <Group spacing={5}>
                  <StyledDetails>
                    <StyledText>{item.launch_site.site_name_long}</StyledText>
                  </StyledDetails>
                </Group>
              </Group>
            </Card>
          ))}
        </Group>
      </FlexContainer>
    </>
  );
};
