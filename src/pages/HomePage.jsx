import styled from 'styled-components';
import { PATHS, EMAIL } from '../lib/constants';
import IntroPowerButton from '../components/IntroPowerButton';
import Logo from '../components/Logo';
import SocialIcons from '../components/SocialIcons';
import StyledLink from '../components/StyledLink';
import HeroTriggerButton from '../components/HeroTriggerButton';
import { useState } from 'react';
import { lightTheme, darkTheme } from '../themes/theme';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const linkAnimationSettings = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

const HomePage = () => {
  const [isHeroShown, setIsHeroShown] = useState(false);

  const handleToggleIsHeroShown = () => setIsHeroShown(!isHeroShown);

  return (
    <Wrapper>
      <StyledPowerButton
        opacity={!isHeroShown ? 1 : 0}
        onClick={handleToggleIsHeroShown}
      />
      <HeroTriggerButton
        isClicked={isHeroShown}
        onClick={handleToggleIsHeroShown}
      />
      <WhoAmIOverlay isShown={isHeroShown} />
      <StyledLogo color={isHeroShown ? darkTheme.text : lightTheme.text} />
      {isHeroShown && <Hero />}

      {/* Links and Socials */}
      <ContactLink target="_blank" to={{ pathname: `mailto:${EMAIL}` }}>
        <motion.h2 {...linkAnimationSettings}>Say hi...</motion.h2>
      </ContactLink>
      <BlogLink to={PATHS.blog}>
        <motion.h2 {...linkAnimationSettings}>Blog</motion.h2>
      </BlogLink>
      <WorkLink
        color={isHeroShown ? darkTheme.text : lightTheme.text}
        to={PATHS.work}
      >
        <motion.h2 {...linkAnimationSettings}>Work</motion.h2>
      </WorkLink>
      <SocialIcons fillColor={isHeroShown ? darkTheme.text : lightTheme.text} />

      <Footer>
        <motion.h2 {...linkAnimationSettings}>
          <AboutLink isDarkBackground={isHeroShown} to={PATHS.about}>
            About
          </AboutLink>
        </motion.h2>
        <motion.h2 {...linkAnimationSettings}>
          <StyledLink to={PATHS.skills}>Skills</StyledLink>
        </motion.h2>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 100%;
  position: relative;
  padding: 32px;
`;

const ContactLink = styled(StyledLink)`
  position: absolute;
  top: 32px;
  right: calc(16px + 1vh);
`;

const BlogLink = styled(StyledLink)`
  position: absolute;
  top: 50%;
  right: 40px;
  transform: rotate(90deg) translate(-50%, -50%);
`;

const WorkLink = styled(StyledLink)`
  color: ${(props) => props.color};
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translate(-50%, -50%) rotate(-90deg);
  transition: color 4s ease;
`;

const StyledPowerButton = styled(IntroPowerButton)`
  position: fixed;
  top: 32px;
  left: 50%;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.5s ease 0.5s;
`;

const WhoAmIOverlay = styled.div`
  background-color: ${(props) => props.theme.homepageOverlayBg};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.isShown ? '100%' : '0%')};
  height: ${(props) => (props.isShown ? '100%' : '0%')};
  transition:
    height 0.5s ease,
    width 1s ease 0.5s;
`;

const AboutLink = styled(StyledLink)`
  color: ${(props) =>
    props.isDarkBackground ? props.theme.body : props.theme.text};
  transition: color 4s ease;
`;

const StyledLogo = styled(Logo)`
  color: ${(props) => props.color};
  transition: color 4s ease;
`;

const Footer = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 16px;

  display: flex;
  justify-content: space-evenly;
`;

export default HomePage;
