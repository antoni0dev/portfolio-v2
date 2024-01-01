import { keyframes } from 'styled-components';

export const PATHS = {
  root: '/',
  about: '/about',
  blog: '/blog',
  skills: '/skills',
  work: '/work'
};

export const PUBLIC_URLS = {
  github: 'https://github.com/antoni0dev',
  linkedin: 'https://www.linkedin.com/in/antonio-simeonov/',
  resume: 'https://resume.io/r/jNGPhKqO3'
};

export const SOCIAL_URLS = {
  github: PUBLIC_URLS.github,
  linkedin: PUBLIC_URLS.linkedin,
  resume: PUBLIC_URLS.resume
};

export const EMAIL = 'antonios.consult@gmail.com';

export const THEMES = {
  light: 'light',
  dark: 'dark'
};

export const animationConfig = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 3,
      duration: 0.8
    }
  }
};

export const heroTriggerButtonRotate = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg);
  }
`;
