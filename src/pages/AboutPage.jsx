import Logo from '../components/Logo';
import SocialIcons from '../components/SocialIcons';
import BackButton from '../components/BackButton';
import Particle from '../components/Particle';
import styled, { useTheme } from 'styled-components';
import config from '../configs/particlesjs-config.json';
import astronautImg from '/images/spaceman.png';
import { motion } from 'framer-motion';
import { animationConfig } from '../lib/constants';
import { astronautFloatConfig } from '../configs/animationConfigs';
import { QUERIES } from '../themes/theme';

const AboutPage = () => {
  const theme = useTheme();

  return (
    <Wrapper variants={animationConfig} initial="hidden" animate="show">
      <Particle config={config} />
      <StyledLogo />
      <StyledSocialIcons fillColor={theme.colors.body} />
      <AstronautImage src={astronautImg} alt="astronaut in space" />
      <StyledBackButton fill={theme.colors.body} />
      <ContentWrapper>
        <p>
          Hey there! I&apos;m deeply rooted in the React and React Native world,
          with a journey spanning 8+ years in making the web and mobile spaces
          more innovative, dynamic and accessible. Living in Austria, I&apos;ve
          had the pleasure of collaborating with awesome teams at Nexo,
          Bluemail, and EasyPay.
        </p>
        <p>
          What sets my work apart? It&apos;s not just about coding for me.
          It&apos;s about creating something that catches your the and feels
          right at the fingertips. My projects are a mix of my love for sleek
          design and the thrill of solving complex technical puzzles.
        </p>
        <p>
          I love write performant and clean code but I also love to collaborate
          with other programmers and I have a strong background of working in
          multinational and multi-ethnic teams.
        </p>
        <p>
          Connect with me to discuss B2B contract opportunities or any other
          professional collaborations.
        </p>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  padding: 32px;
  height: 100svh;
  background-color: ${(props) => props.theme.colors.body};
  position: relative;
`;

const AstronautImage = styled.img`
  position: absolute;
  top: 15%;
  right: 5%;
  width: 25%;
  animation: ${astronautFloatConfig} 3s ease-in-out infinite;
`;

const StyledLogo = styled(Logo)`
  color: ${(props) => props.theme.colors.body};
`;

const StyledBackButton = styled(BackButton)`
  display: inline;
  transform: initial;
`;

const StyledSocialIcons = styled(SocialIcons)`
  display: none;

  @media (${QUERIES.tabletAndUp}) {
    display: flex;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  left: 15%;
  top: 18%;
  border: 1px solid ${(props) => props.theme.colors.body};
  color: ${(props) => props.theme.colors.body};
  width: 70vw;
  padding: 32px;
  line-height: 1.5;
  font-size: 1.4rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  backdrop-filter: blur(4px);
  overflow: auto;

  @media (${QUERIES.tabletAndUp}) {
    padding: 40px;
  }

  @media (${QUERIES.laptopAndUp}) {
    padding: 64px;
    width: 50vw;
  }

  & > :not(:first-child) {
    margin-top: 12px;
  }

  & * {
    font-family: inherit;
  }
`;

export default AboutPage;
