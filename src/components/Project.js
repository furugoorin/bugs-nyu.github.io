import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  margin: 1vw;
  grid-column: 1
  min-height: 40vh;
  background-color: none;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0px 0px 0px 3px #330662;
  align-items: center;
  padding: 5px 10px 10px 10px;
  transition: all 0.2s linear;

  &:hover {
    box-shadow: 0px 0px 0px 10px #330662;
  }

  @media screen and (max-width: 768px) {
    padding: 5px 5px 5px 5px;
    margin: 0;
    width: 70vw;
    transform: none;
    animation: none;
    transition: none;
  }
`;

const SubTitle = styled.h2`
  font-family: var(--normal-font);
  text-align: center;
  font-weight: lighter;
  width: 100%;
  border-bottom: 1px solid white;
  color: white;
`;

const LinkContainer = styled.div`
  text-align: center;
  transition: all 0.3s linear;
  padding: 0 10px 10px 10px;
`;

const URLLink = styled.a`
  font-size: small;
  text-decoration: none;
  color: white;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Description = styled.h4`
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(0vw + 1.2rem);
  color: white;
  padding: 10px;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Title = styled.h1`
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 0.5;
  font-size: calc(0vw + 2rem);
  color: white;
`;

const Project = ({
  title,
  subtitle,
  description,
  link,
  urlLink,
  odd,
  light,
}) => {
  return (
    <ProjectContainer odd={odd}>
      <URLLink href={urlLink}>
        <Title light={light}>{title}</Title>
      </URLLink>
      <SubTitle>{subtitle}</SubTitle>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
      <LinkContainer>
        <URLLink href={`https://${link}`} light={light}>
          {link}
        </URLLink>
      </LinkContainer>
    </ProjectContainer>
  );
};

export default Project;
