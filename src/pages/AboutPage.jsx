import Logo from '../components/Logo';
import SocialIcons from '../components/SocialIcons';
import BackButton from '../components/BackButton';
import Particle from '../components/Particle';
import styled, { keyframes, useTheme } from 'styled-components';
import config from '../config/particlesjs-config.json';
import astronautImg from '/images/spaceman.png';

const AboutPage = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Particle config={config} />
      <StyledLogo />
      <SocialIcons fillColor={theme.body} />
      <AstronautImage src={astronautImg} alt="astronaut in space" />
      <BackButton fill={theme.body} />
      <ContentWrapper>
        <p>
          I&apos;m a front-end developer located in Austria. I love to create
          and optimize complex web and mobile apps.
        </p>
        <p>
          Thriving as an independent freelancer and avid blogger, I immerse
          myself in creating impactful projects and sharing insights through my
          writing.
        </p>
        <p>
          I firmly believe in the artistry of work infused with consciousness
          and dedication. You can connect with me via social links.
        </p>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 32px;
  height: 100svh;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const astronautFloatConfig = keyframes`
  0% { transform: translateY(-15px) }
  50% { transform: translateY(30px) translateX(30px) }
  100% { transform: translateY(-15px) }
`;

const AstronautImage = styled.img`
  position: absolute;
  top: 5%;
  right: 5%;
  width: 25%;
  animation: ${astronautFloatConfig} 3s ease-in-out infinite;
`;

const StyledLogo = styled(Logo)`
  color: ${(props) => props.theme.body};
`;

const ContentWrapper = styled.div`
  position: absolute;
  left: 15%;
  top: 32%;
  border: 1px solid ${(props) => props.theme.body};
  color: ${(props) => props.theme.body};
  padding: 64px;
  width: 50vw;
  line-height: 1.5;
  font-size: 1.4rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  backdrop-filter: blur(4px);
  overflow: auto;

  & > :not(:first-child) {
    margin-top: 12px;
  }

  & * {
    font-family: inherit;
  }
`;

export default AboutPage;
