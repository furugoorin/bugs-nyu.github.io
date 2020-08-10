import React from "react";
import styled, { keyframes } from "styled-components";
import aliu from "./aliu.jpg";
import amehta from "./amehta.png";
import ana from "./anachiappan.jpg";
import eshao from "./eshao.jpg";
import khanhng from "./khanhng.jpg";
import slin from "./slin.jpg";
import eriche from "./eriche.jpg";

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const PageContainer = styled.article`
  display: block;
`;

const MainDescriptionContainer = styled.section`
  margin-top: 10%;
  align-items: center;
  min-height: 100vh;
  padding-right: 15vw;
  padding-bottom: 5vw;
  padding-left: 15vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  justify-items: stretch;
  margin-bottom: 5%;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Description = styled.p`
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(0vw + 1rem);
  color: #330662;
  animation: ${fadein} 2s;
`;

const Title = styled.h2`
  font-family: Poppins;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  text-align: center;
  line-height: 0.5;
  font-size: calc(0vw + 1.5rem);
  color: #330662;
  animation: ${fadein} 2s;
`;

const ProjectContainer = styled.div`
  margin: 1vw;
  grid-column: 1
  min-height: 40vh;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 60px 0px 60px;
  animation: ${fadein} 2s;
  @media screen and (max-width: 500px) {
    padding: 0px 0px 0px 0px;
    margin: 0 0 25px 0;
    width: 70vw;
  }
`;

const SubTitle = styled.p`
  font-family: var(--normal-font);
  text-align: center;
  font-weight: lighter;
  color: rgb(117, 117, 116);
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Image = styled.img`
  width: 70%;
  object-fit: contain;
`;

const EboardTitleContainer = styled.div`
  margin-top: 15%;
  text-align: center;
  @media screen and (max-width: 650px) {
    margin-top: 20vh;
  }
`;

const EboardTitle = styled.h1`
  font-family: Poppins;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  text-align: center;
  line-height: 0.5;
  font-size: calc(0vw + 4.5rem);
  color: #330662;
  animation: ${fadein} 2s;
  @media screen and (max-width: 1000px) {
    font-size: calc(0vw + 3rem);
  }

  @media screen and (max-width: 750px) {
    font-size: calc(0vw + 1.5rem);
  }
`;

const eboards = {
  "Albert Liu": {
    image: aliu,
    role: "President",
    description:
      "Albert enjoys python scripting and long walks in Central Park. In his work time he majors in Computer Science at CAS.",
  },
  "Samuel Lin": {
    image: slin,
    role: "Vice President",
    description:
      "Samuel is a Junior at CAS majoring in Computer Science and Minoring in Web Design and Game Design. He was born and raised in Taiwan, but studied in Singapore for high school before coming to New York. He is a big foodie and enjoys trying foods from different cultures.",
  },
  "Edmond Shao": {
    image: eshao,
    role: "Webmaster",
    description:
      "Edmond is a Junior at CAS studying Computer Science and minoring in Business Studies. Aside from class, he likes cars, being a foodie and traveling.",
  },
  "Eric He": {
    image: eriche,
    role: "Secretary",
    description:
      "Hi, this is Eric. I am currently a junior studying computer science and mathematics. I like to play basketball and listen to music and read about philosophy.",
  },
  "Khanh Nguyen": {
    image: khanhng,
    role: "Director of Communications",
    description:
      "Sophomore from Vietnam studying Computer Science. BROCKHAMPTON is my all-time favorite boyband. Food and coding also fuels my existence. Outside of school, find me at Hanoi House",
  },
  "Ami Nachiappan": {
    image: ana,
    role: "Event Coordinator",
    description:
      "Junior from California studying Computer Science and minoring in Web Design. In her free time, she loves spending time with family, running, and of course, coding!",
  },
  "Aaditya Mehta": {
    image: amehta,
    role: "Treasurer",
    description:
      "A Junior studying Economics and Mathematics, Aaditya spends way too much time in Stern (#IAmStern). In his free time he likes to listen to music, take long walks, and read Econ papers, sometimes simultaneously.",
  },
  "Jiayue(Joanna) Zhang": {
    role: "Director of Marketing",
    description:
      "Jiayue (Joanna) Zhang is a Junior majoring in Mathematics and Computer Science in CAS. Intellectual challenges of her school work bring her either joy or existential crises; in most cases math the latter and CS the former. One thing she loves about NYC is that performances of her favorite artists are usually only a subway ride away from school. Her guilty pleasure is taking mahjong breaks at Bobst.",
  },
};

const Member = (props) => {
  const { name, role, image, description } = props;
  return (
    <ProjectContainer>
      <Image src={image} />
      <Title>
        {" "}
        {name}
        <SubTitle> {role} </SubTitle>
      </Title>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
    </ProjectContainer>
  );
};

const TeamPage = () => {
  return (
    <MainContainer>
      <PageContainer>
        <EboardTitleContainer>
          <EboardTitle>Meet Our Executive Board</EboardTitle>
        </EboardTitleContainer>
        <MainDescriptionContainer>
          {Object.entries(eboards).map(([name, values]) => {
            return (
              <Member
                name={name}
                role={values.role}
                description={values.description}
                image={values.image}
                key={name}
              />
            );
          })}
        </MainDescriptionContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default TeamPage;
