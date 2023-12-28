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
          I am a Full Stack Developer with a rich history in the MERN stack,
          bringing over 9 years of experience in developing advanced web and
          mobile applications. Based in Austria, my career has been marked by
          engagements with leading tech firms including Nexo, Bluemail, and
          EasyPay.
        </p>
        <p>
          In my role, I blend creativity with technical acumen, focusing on
          delivering high-quality, efficient solutions. My portfolio spans a
          range of complex projects, showcasing a balance of front-end finesse
          and robust back-end functionalities.
        </p>
        <p>
          As an independent freelancer and a thought leader in the tech space, I
          contribute insights through my blogs, sharing lessons and trends in
          full stack development.
        </p>
        <p>
          Connect with me to discuss innovative solutions or for insights into
          modern development practices in the evolving tech landscape.
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
