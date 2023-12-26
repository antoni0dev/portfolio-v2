import Logo from '../components/Logo';
import SocialIcons from '../components/SocialIcons';
import BackButton from '../components/BackButton';
import Particle from '../components/Particle';
import styled, { keyframes, useTheme } from 'styled-components';
import config from '../config/particlesjs-config.json';
import astronautImg from '/images/spaceman.png';
import { motion } from 'framer-motion';
import { animationConfig } from '../lib/constants';

const AboutPage = () => {
  const theme = useTheme();

  return (
    <Wrapper variants={animationConfig} initial="hidden" animate="show">
      <Particle config={config} />
      <StyledLogo />
      <SocialIcons fillColor={theme.body} />
      <AstronautImage src={astronautImg} alt="astronaut in space" />
      <BackButton fill={theme.body} />
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
  top: 18%;
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
