import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { ProjectCard } from "./card/Project";
import { projects } from "../data";
export default function Projects() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      setTag([...tag, query]);
    }
  };

  useEffect(() => {
    const filteredResult = projects.filter((project) =>
      project.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredResult);
  }, [query]);

  useEffect(() => {
    console.log(tag);
  }, [tag]);

  return (
    <Wrapper $area="content">
      <Title $area="title">Projects</Title>
      <Search
        type="text"
        $area="search"
        placeholder="Start typing to search..."
        value={query}
        onChange={handleChange}
        onKeyDown={onEnter}
      />
      {/* TODO: Use ProjectsList to host Project components OR create your own container */}
      <ProjectsList $area="projects">
        {data.length ? (
          data.map((project) => <ProjectCard {...project} key={project.id} />)
        ) : (
          <h2>Nothing found</h2>
        )}
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
