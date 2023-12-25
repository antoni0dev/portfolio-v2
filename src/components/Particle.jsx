import Particles from 'react-tsparticles';
import styled from 'styled-components';
import configDark from '../config/particlesjs-config.json';
import configLight from '../config/particlesjs-config-light.json';
import { THEMES } from '../lib/constants';
import { useThemeContext } from '../providers/ThemeProvider';
import { loadFull } from 'tsparticles';

const Particle = () => {
  const { theme } = useThemeContext();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Wrapper>
      <Particles
        id="tsparticles"
        style={{
          position: 'absolute',
          top: 0
        }}
        options={theme === THEMES.light ? configLight : configDark}
        init={particlesInit}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
`;

export default Particle;
