import React from "react";
import { useEffect, useState } from "react";
import SpaceMission from "../../graphql";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { Image, Space, Text, Button } from "@mantine/core";
import { Atom, Rocket, ArrowBackUp } from "tabler-icons-react";

const StyledDiv = styled.div`
  width: 70%;
`;

const StyledTitle = styled(Text)`
  color: #26145c;
  font-size: 24px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  padding-left: 15px;
  padding-top: 20px;
`;

const StyledText = styled(Text)`
  color: #26145c;
  font-size: 16px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  padding-left: 15px;
`;

const StyledDetail = styled(Text)`
  color: #26145c;
  font-size: 12px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  padding-left: 15px;
  padding-top: 80px;
`;

const StyledIconsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledYear = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const StyledDate = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const MissionDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  const loadSpaceMission = async () => {
    const spaceMissions = await SpaceMission.getSpaceLaunch(id);
    setData(spaceMissions);
  };

  useEffect(() => {
    loadSpaceMission();
  }, []);

  return (
    <StyledDiv key={id}>
      <Image
        src={
          data && data?.ships[0] && data?.ships[0].image
            ? data?.ships[0].image
            : "https://www.universetoday.com/wp-content/uploads/2011/03/IMG_4650a_STS-133_Ken-Kremer.jpg"
        }
        height={250}
        alt={data?.mission_name}
      />
      <StyledTitle>{data?.mission_name}</StyledTitle>
      <StyledText>{data?.launch_site?.site_name_long}</StyledText>
      <StyledDetail>{data?.details}</StyledDetail>
      <Space h={60} />
      <StyledIconsDiv>
        <StyledYear>
          <Atom size={28} strokeWidth={2} color={"#26145c"} />
          <StyledText>Year:</StyledText>
          <p>{data?.launch_year}</p>
        </StyledYear>
        <StyledDate>
          <Rocket size={28} strokeWidth={2} color={"#26145c"} />
          <StyledText>Date:</StyledText>
          <p>{data?.launch_date_local}</p>
        </StyledDate>
      </StyledIconsDiv>
      <Space h={70} />
      <Button
        component={Link}
        to="/"
        styles={{
          root: {
            fontSize: 12,
            fontFamily: "Montserrat",
            backgroundColor: "transparent",
            fontWeight: 400,
            color: "#26145c",

            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        }}
        leftIcon={<ArrowBackUp size={18} strokeWidth={2} color={"#26145c"} />}
      >
        Go back to all missions
      </Button>
    </StyledDiv>
  );
};
