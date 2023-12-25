import styled from 'styled-components';
import { PATHS, EMAIL } from '../lib/constants';
import Logo from '../components/Logo';
import SocialIcons from '../components/SocialIcons';
import StyledLink from '../components/StyledLink';
import HeroTriggerButton from '../components/HeroTriggerButton';
import { useState } from 'react';
import { lightTheme, darkTheme } from '../themes/theme';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import SoundWidget from '../components/SoundWidget';

const linkAnimationSettings = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 }
};

const connectLinkConfig = {
  whileHover: {
    scale: 1.1,
    transition: { duration: 0.3 }
  },
  whileTap: { scale: 0.9 }
};

const HomePage = () => {
  const [isHeroShown, setIsHeroShown] = useState(false);

  const handleToggleIsHeroShown = () => setIsHeroShown(!isHeroShown);

  return (
    <Wrapper>
      <HeroTriggerButton
        isClicked={isHeroShown}
        onClick={handleToggleIsHeroShown}
      />
      <WhoAmIOverlay isShown={isHeroShown} />
      <Navbar>
        <StyledLogo color={isHeroShown ? darkTheme.text : lightTheme.text} />
        <SoundWidget />
        <ConnectLink target="_blank" rel="noreferrer" href={`mailto:${EMAIL}`}>
          <motion.h2 {...linkAnimationSettings}>Say hi...</motion.h2>
        </ConnectLink>
      </Navbar>
      {isHeroShown && <Hero />}

      {/* Links and Socials */}
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
          <AboutLink isdarkbackground={isHeroShown} to={PATHS.about}>
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

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ConnectLink = styled(motion.a)`
  color: inherit;
  text-decoration: none;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: bold;
  margin-left: auto;
  border-bottom: 2px solid ${(props) => props.text};
  border-radius: 2px;

  & > * {
    font-family: inherit;
  }
`;

const BlogLink = styled(StyledLink)`
  position: absolute;
  top: 50%;
  right: 35px;
  transform: rotate(90deg) translate(-50%, -50%);
`;

const WorkLink = styled(StyledLink)`
  color: ${(props) => props.color};
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translate(-50%, -50%) rotate(-90deg);
  transition: color 4s ease;
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
    props.isdarkbackground ? props.theme.body : props.theme.text};
  transition: color 4s ease;
`;

const StyledLogo = styled(Logo)`
  color: ${(props) => props.color};
  transition: color 4s ease;
`;

const Footer = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 32px;

  display: flex;
  justify-content: space-evenly;
`;

export default HomePage;
