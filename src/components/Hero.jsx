import styled from 'styled-components';
import profileImg from '/images/profile.jpeg';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const animationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { type: 'spring', duration: 3, delay: 1 }
};

const Hero = () => {
  const [currentViewportWidth, setCurrentViewportWidth] = useState(
    window.innerWidth
  );

  console.log('width', currentViewportWidth);

  useEffect(() => {
    const handleResize = () => setCurrentViewportWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Wrapper {...animationSettings}>
      <ProfileImageWrapper {...animationSettings}>
        <ProfileImg src={profileImg} alt="profile image" />
      </ProfileImageWrapper>
      <IntroductionWrapper {...animationSettings}>
        <h1>Hey </h1>
        {currentViewportWidth >= 500 && <h2>I&apos;m Antonio</h2>}
        {currentViewportWidth >= 600 && (
          <h4>Senior Software Developer and Contractor based in Austria</h4>
        )}
        {currentViewportWidth >= 700 && (
          <h6>
            I have been igniting innovation at companies like Nexo, BlueMail,
            and other tech giants for 9+ Years.
          </h6>
        )}
      </IntroductionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: relative;
  max-width: 65vw;
  max-height: 55vh;
  display: flex;

  @media (max-width: 620px) {
    max-height: 250px;
  }

  @media (max-width: 550px) {
    max-height: 180px;
  }

  @media (max-width: 450px) {
    max-height: 130px;
  }

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
  overflow: auto;
  overflow-wrap: break-word;
  font-size: 2rem;

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

  @media (max-width: 480px) {
    font-size: 1rem;
    width: max-content;
    overflow: initial;
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
