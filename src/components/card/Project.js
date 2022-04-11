import React from "react";
import styled from "styled-components/macro";

export const ProjectCard = () => {
  return (
    <Card>
      <ProjectTitle>Project Name</ProjectTitle>
      <Tag>Template</Tag>
      <Target>Target: ...</Target>
      <Footer> CREATED: ...</Footer>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 200px;
`;

const ProjectTitle = styled.h1`
  font-weight: "bold";
`;

const Tag = styled.h4`
  font-size: "12px";
`;

const Target = styled.p``;

const Footer = styled.p``;
