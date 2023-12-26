import { keyframes } from 'styled-components';

export const missingBlogPostsConfig = {
  animate: {
    scale: [1, 1.05, 1, 1.05, 1],
    x: [0, 15, -15, 15, 0],
    y: [0, 15, -15, 15, 0],
    transition: {
      duration: 10,
      ease: 'easeInOut',
      loop: Infinity
    }
  }
};

export const linkAnimationSettings = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 }
};

export const soundWidgetConfig = {
  hidden: { scale: 4, rotate: -580, opacity: 0, color: '#666' },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    color: '#f00',
    transition: {
      duration: 3,
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
};

export const astronautFloatConfig = keyframes`
  0% { transform: translateY(-15px) }
  50% { transform: translateY(30px) translateX(30px) }
  100% { transform: translateY(-15px) }
`;
