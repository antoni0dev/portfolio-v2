import styled, { keyframes } from 'styled-components';
import { useMusicContext } from '../providers/MusicProvider';

const playKeyframe = keyframes`
  0%, 100% {
    transform: scaleY(1) translateX(0px);
  }
  25% {
    transform: scaleY(1.1) translateX(-2px);
  }
  50% {
    transform: scaleY(1) translateX(2px);
  }
  75% {
    transform: scaleY(1.1) translateX(-2px);
  }
`;

const SoundWidget = (props) => {
  const { isPlaying, toggleIsPlaying } = useMusicContext();

  return (
    <Wrapper onClick={toggleIsPlaying} {...props}>
      {[...Array.from({ length: 6 })].map((_, index) => (
        <Line key={index} isPlaying={isPlaying} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Line = styled.span`
  border: 1px solid ${(props) => props.theme.colors.text};
  animation: ${playKeyframe} 1s ease infinite;
  animation-play-state: ${(props) => (props.isPlaying ? 'running' : 'paused')};
  height: 16px;
  width: 2px;
  margin: 0 1.6px;
`;

export default SoundWidget;
