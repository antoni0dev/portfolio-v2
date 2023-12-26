import styled from 'styled-components';
import profileImg from '/images/profile.jpeg';
import { motion } from 'framer-motion';

const animationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { type: 'spring', duration: 3, delay: 1 }
};

const Hero = () => {
  return (
    <Wrapper {...animationSettings}>
      <ProfileImageWrapper {...animationSettings}>
        <ProfileImg src={profileImg} alt="profile image" />
      </ProfileImageWrapper>
      <IntroductionWrapper {...animationSettings}>
        <h1>Hey, I&apos;m Antonio</h1>
        <h4>Senior Software Developer and Contractor based in Austria</h4>
        <h6>
          I have been igniting innovation at companies like Nexo, BlueMail, and
          other tech giants for 9+ Years.
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
  max-height: 55vh;
  display: flex;

  /* @media (max-width: ) {
    
  } */

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
  overflow-wrap: break-word;
  font-size: 2rem;
  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > :first-child {
    margin: 0;
  }

  & > :last-child {
    color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
  }

  @media (max-width: 1250px) {
    font-size: 1.4em;
  }

  @media (max-width: 1000px) {
    font-size: 1.2em;
  }

  @media (max-width: 850px) {
    font-size: 0.7rem;
  }

  @media (max-width: 550px) {
    font-size: 0.4rem;
  }

  @media (max-width: 550px) {
    font-size: 0.3rem;
  }
`;

const ProfileImageWrapper = styled(motion.div)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  height: 97%;
`;

export default Hero;
