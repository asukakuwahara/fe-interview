import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { ProjectCard } from "./card/Project";
import { projects } from "../data";
export default function Projects() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && query.length) {
      setTags([...tags, query]);
    }
  };

  const handleDeleteTag = (selectedTag) => {
    const filteredTags = tags.filter((tag) => tag !== selectedTag);
    setTags(filteredTags);
  };

  useEffect(() => {
    const filteredResult = projects.filter((project) =>
      project.name.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredResult);
  }, [query]);

  useEffect(() => {
    // Do something with the tags here
    console.log(tags);
  }, [tags]);

  return (
    <Wrapper $area="content">
      <Title $area="title">Projects</Title>
      <Tags>
        {tags.map((tag) => (
          <Tag>
            {tag}
            <DeleteButton onClick={() => handleDeleteTag(tag)}>X</DeleteButton>
          </Tag>
        ))}
        <Search
          type="text"
          $area="search"
          placeholder="Start typing to search..."
          value={query}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
      </Tags>
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

const Tags = styled.div`
  grid-area: ${({ $area }) => $area};
  border: 1px solid black;
  display: flex;
`;

const Tag = styled.div`
  background: #add8e6;
  margin: 5px;
  padding: 0 5px;
  text-align: center;
`;

const DeleteButton = styled.button`
  background: #add8e6;
  border: none;
`;

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
  margin: 0 20px;
  border: none;
`;

const ProjectsList = styled.article`
  grid-area: ${({ $area }) => $area};
  margin-top: 15px;
  display: grid;
  grid-auto-columns: 1fr;
  justify-items: center;
}
`;
