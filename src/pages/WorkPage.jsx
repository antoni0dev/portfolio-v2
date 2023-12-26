import styled, { useTheme } from 'styled-components';
import Logo from '../components/Logo';
import SocialLinks from '../components/SocialIcons';
import BackButton from '../components/BackButton';
import { Work } from '../data/WorkData';
import { useEffect, useRef } from 'react';
import YinYanSVG from '../components/svg/YinYangSVG';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { animationConfig } from '../lib/constants';

// TODO: add relevant work
const works = Work;

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
      <SocialLinks fillColor={theme.body} />
      <RotationWrapper ref={yinyanRef}>
        <YinYanSVG
          width={80}
          height={80}
          fill={theme.body}
          style={{ border: '1px solid black' }}
        />
      </RotationWrapper>
      <BackButton fill={theme.body} />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  height: 100%;
  padding: 32px;
  background-color: ${(props) => props.theme.text};
`;

const HorizontalSlider = styled(motion.div)`
  margin-top: 160px;
  display: flex;
  gap: 64px;
  margin-inline: 32px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  touch-action: pan-x;
`;

const StyledLogo = styled(Logo)`
  color: ${(props) => props.theme.body};
  position: fixed;
  top: 32px;
  left: 32px;
`;

const RotationWrapper = styled.div`
  position: fixed;
  right: 32px;
  bottom: 32px;
`;

export default WorkPage;
