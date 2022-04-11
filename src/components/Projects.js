import React from "react";
import styled from "styled-components/macro";
import { ProjectCard } from "./card/Project";
import { projects } from "../data";
export default function Projects() {
  return (
    <Wrapper $area="content">
      <Title $area="title">Projects</Title>
      <Search $area="search" placeholder="Start typing to search..." />
      {/* TODO: Use ProjectsList to host Project components OR create your own container */}
      <ProjectsList $area="projects">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </ProjectsList>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  grid-area: ${({ $area }) => $area};
  display: grid;
  grid-template-areas:
    "title"
    "search"
    "projects";
  grid-template-rows: 70px 30px auto;
`;

const Title = styled.h1`
  grid-area: ${({ $area }) => $area};
`;

const Search = styled.input`
  grid-area: ${({ $area }) => $area};
  margin: 0 20px;
`;

const ProjectsList = styled.article`
  grid-area: ${({ $area }) => $area};
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(800px, 1fr));
  justify-items: center;
}
`;
