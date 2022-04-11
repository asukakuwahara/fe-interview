import React from "react";
import styled from "styled-components/macro";

export const ProjectCard = ({
  name,
  createdByUser,
  createdDate,
  template,
  target,
  inProduction,
}) => {
  const formattedDate = new Date(createdDate)
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");

  return (
    <Card>
      <Header>
        <ProjectTitle>{name || "N/A"}</ProjectTitle>
        <Tag>{template || "N/A"}</Tag>
      </Header>
      <Target>Target: {target || "N/A"}</Target>
      <Footer>
        CREATED: {createdByUser} · {formattedDate}
      </Footer>
    </Card>
  );
};

const Card = styled.article`
  display: grid;
  flex-direction: column;
  width: 600px;
  height: 100px;
  padding: 20px;
  border: 3px solid black;
`;

const ProjectTitle = styled.h1`
  font-size: 22px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Tag = styled.h4`
  font-size: 16px;
  color: blue;
`;

const Target = styled.p`
  text-align: start;
`;

const Footer = styled.p`
  text-align: end;
  color: grey;
  align-self: end;
  justify-self: end;
  border-top: 1px solid grey;
  width: 100%;
  padding-top: 10px;
`;
