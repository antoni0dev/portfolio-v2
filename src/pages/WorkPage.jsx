import styled, { useTheme } from 'styled-components';
import Logo from '../components/Logo';
import SocialLinks from '../components/SocialIcons';
import BackButton from '../components/BackButton';
import { workExperiences } from '../data/workExperiences';
import { useEffect, useRef } from 'react';
import YinYanSVG from '../components/svg/YinYangSVG';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { animationConfig } from '../lib/constants';
import { QUERIES } from '../themes/theme';

const works = workExperiences;

const WorkPage = () => {
  const theme = useTheme();
  const yinyanRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Arrow Right') {
        sliderRef.current.scrollLeft += 100;
      }

      if (e.key === 'Arrow Left') {
        sliderRef.current.scrollLeft -= 100;
      }
    };

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      sliderRef.current.scrollLeft += e.deltaY;
    };

    const handleHorizontalScroll = () => {
      const scrollLeft = sliderRef.current.scrollLeft;
      yinyanRef.current.style.transform = `rotate(${scrollLeft}deg)`;
    };

    const scroller = sliderRef.current;
    scroller.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);
    scroller.addEventListener('scroll', handleHorizontalScroll);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      scroller.removeEventListener('wheel', handleWheel);
      scroller.removeEventListener('scroll', handleHorizontalScroll);
    };
  }, []);

  return (
    <Wrapper>
      <StyledLogo />
      <HorizontalSlider
        ref={sliderRef}
        variants={animationConfig}
        initial="hidden"
        animate="show"
      >
        {works.map((currentWork, index) => (
          <Card key={index} {...currentWork} as="li" />
        ))}
      </HorizontalSlider>
      <SocialLinks fillColor={theme.colors.body} />
      <RotationWrapper ref={yinyanRef}>
        <YinYanSVG
          width={80}
          height={80}
          fill={theme.colors.body}
          style={{ border: '1px solid black' }}
        />
      </RotationWrapper>
      <StyledBackButton fill={theme.colors.body} />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  height: 100%;
  padding: 16px;

  background-color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (${QUERIES.laptopAndUp}) {
    padding: 32px;
  }
`;

const HorizontalSlider = styled(motion.div)`
  display: flex;
  gap: 32px;
  margin-inline: 16px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  touch-action: pan-x;
`;

const StyledLogo = styled(Logo)`
  color: ${(props) => props.theme.colors.body};
  position: fixed;
  top: 32px;
  left: 32px;
`;

const StyledBackButton = styled(BackButton)`
  display: inline;
  transform: initial;
`;

const RotationWrapper = styled.div`
  position: fixed;
  right: 32px;
  bottom: 32px;
`;

export default WorkPage;
