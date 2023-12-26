import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top: 5px solid blue;
  border-radius: 50%;
  margin: auto;
`;

const spinTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 1
};

const Loader = () => {
  return <Wrapper animate={{ rotate: 360 }} transition={spinTransition} />;
};

export default Loader;
