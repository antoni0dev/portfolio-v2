import styled from 'styled-components';
import profileImg from '/images/profile.jpeg';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { QUERIES, breakpoints } from '../themes/theme';

const animationSettings = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { type: 'spring', duration: 3, delay: 1 }
};

const Hero = () => {
  const [currentViewportWidth, setCurrentViewportWidth] = useState(
    window.innerWidth
  );

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
        {currentViewportWidth < breakpoints.tabletMin ? (
          <>
            <h3>Hey </h3>
            <h4>I&apos;m Antonio</h4>
          </>
        ) : (
          <>
            <h1>Hey </h1>
            <h2>I&apos;m Antonio</h2>
          </>
        )}
        {currentViewportWidth < breakpoints.tabletMin ? (
          <h5>Senior Front-End Developer and Contractor based in Austria</h5>
        ) : (
          <h4>Senior Front-End Developer and Contractor based in Austria</h4>
        )}
        <h6>
          I have been igniting innovation at companies like Nexo, BlueMail, and
          other tech giants for 9+ Years.
        </h6>
      </IntroductionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: relative;
  max-width: 65vw;
  max-height: 55vh;
  display: flex;
  max-height: min(55vh, 550px);

  background:
    linear-gradient(
        to right,
        ${(props) => props.theme.colors.body} 50%,
        ${(props) => props.theme.colors.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.colors.body} 50%,
        ${(props) => props.theme.colors.text} 50%
      )
      top;

  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.colors.body};
  border-right: 2px solid ${(props) => props.theme.colors.text};
  padding-inline: 12px;
`;

const IntroductionWrapper = styled(motion.div)`
  padding: 8px;
  flex: 1;
  color: ${(props) => props.theme.colors.text};
  overflow: auto;
  display: flex;
  flex-direction: column;
  font-size: clamp(1rem, 2vw + 1rem, 2rem);

  @media (${QUERIES.tabletAndUp}) {
    padding: 24px;
  }

  @media (${QUERIES.laptopAndUp}) {
    padding: 32px;
    justify-content: space-between;
  }

  @media (${QUERIES.desktopAndUp}) {
    padding: 64px;
  }

  & > :first-child {
    margin: 0;
  }

  & > :last-child {
    color: ${(props) => `rgba(${props.theme.colors.textRgba},0.6)`};
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
