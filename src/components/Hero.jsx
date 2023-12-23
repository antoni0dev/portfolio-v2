import styled from 'styled-components';
import profileImg from '/images/profile.jpeg';
import { motion } from 'framer-motion';

const animationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { type: 'spring', duration: 3, delay: 1 },
};

const Hero = () => {
  return (
    <Wrapper {...animationSettings}>
      <ProfileImageWrapper {...animationSettings}>
        <ProfileImg src={profileImg} alt="profile image" />
      </ProfileImageWrapper>
      <IntroductionWrapper {...animationSettings}>
        <h1>Hi, </h1>
        <h2>I'm Antonio</h2>
        <h4>I am a seasoned senior frontend developer and contractor.</h4>
        <h6>
          I have experience in companies like Nexo, BlueMail and many others.
        </h6>
      </IntroductionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;

  background:
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  padding-inline: 12px;
`;

const IntroductionWrapper = styled(motion.div)`
  padding: 32px;
  flex: 1;
  color: ${(props) => props.theme.text};
  font-size: 2rem;
  overflow: auto;

  & > :first-child {
    margin: 0;
  }

  & > :last-child {
    color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
  }

  @media (max-width: 1000px) {
    font-size: 1.2em;
  }

  @media (max-width: 700px) {
    font-size: 1rem;
  }

  @media (max-width: 420px) {
    font-size: 0.6rem;
  }
`;

const ProfileImageWrapper = styled(motion.div)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  height: 98%;
`;

export default Hero;
