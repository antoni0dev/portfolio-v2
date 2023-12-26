import styled from 'styled-components';
import FullStackSVG from '../components/svg/FullStackSVG';
import DeveloperSVG from '../components/svg/DeveloperSVG';
import Logo from '../components/Logo';
import BackButton from '../components/BackButton';
import Particle from '../components/Particle';
import particleConfig from '../configs/particlesjs-config-light.json';
import { motion } from 'framer-motion';
import { animationConfig } from '../lib/constants';

const skills = [
  {
    titleImg: <FullStackSVG width={100} height={100} />,
    titleDescription: 'Back-End Development',
    description:
      'I love channeling JavaScript finesse into the powerhouse duo of Node.js and Express.',
    thingsToBuild: [
      'Efficient Back-End Systems using Node.js',
      'Scalable Fullstack Architectures',
      'Custom APIs for versatile web services'
    ],
    skills:
      'Node.js, Express, MongoDB, API development and management, Performance, Optimization'
  },
  {
    titleImg: <DeveloperSVG width={75} height={75} />,
    titleDescription: 'Front-End Development',
    description:
      'I enjoy sculpting pixel-perfect UIs with sleek, modern flair and a dash of JavaScript genius.',
    thingsToBuild: [
      'Clean and Sleek UIs with React.js and/or React Native',
      'Scalable Component APIs',
      'Performance optimizations'
    ],
    skills:
      'React.js, Next.js, TypeScript, Redux, Zustand, React Query, RTKQ, styled-components, Material UI'
  }
];

const SkillsPage = () => {
  return (
    <>
      <Wrapper variants={animationConfig} initial="hidden" animate="show">
        <Particle config={particleConfig} />
        <Navbar>
          <Logo />
          <StyledBackButton />
        </Navbar>
        <ContentWrapper>
          <Main>
            {skills.map(
              ({
                titleImg,
                titleDescription,
                description,
                thingsToBuild,
                skills
              }) => (
                <Section key={titleDescription}>
                  <Title>
                    {titleImg}
                    <span>{titleDescription}</span>
                  </Title>
                  <p>{description}</p>
                  <div>
                    <strong>I like to Build</strong>
                    <ul>
                      {thingsToBuild.map((thing) => (
                        <li key={thing}>{thing}</li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    <strong>SKILLS</strong>
                    <br />
                    {skills}
                  </p>
                </Section>
              )
            )}
          </Main>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  min-height: 100svh;
  padding: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Main = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 32px;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 32px;
    height: auto;
  }
`;

const Section = styled.div`
  height: 100%;
  width: 30vw;
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 32px;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 1.2rem;

  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 8px;

  & * {
    font-family: inherit;
  }

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledBackButton = styled(BackButton)`
  position: relative;
  inset: 0;
  display: inline;
  transform: initial;
`;

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }

  & > :last-child {
    flex: 1;
  }
`;

export default SkillsPage;
