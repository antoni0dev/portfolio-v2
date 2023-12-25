import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Particle = ({ config }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return <Particles id="tsparticles" options={config} init={particlesInit} />;
};

export default Particle;
