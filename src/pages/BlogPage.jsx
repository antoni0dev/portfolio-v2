import styled from 'styled-components';

import blogPageCoverImage from '/images/articleCover.jpg';

import Logo from '../components/Logo';
import BackButton from '../components/BackButton';
import SocialIcons from '../components/SocialIcons';
import BlogPost from '../components/BlogPost';
import Anchor from '../components/Anchor';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { animationConfig } from '../lib/constants';

const blogs = [];

const missingBlogPostsConfig = {
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

const BlogPage = () => {
  const [isMobileViewport, setIsViewportSmall] = useState(
    window.innerWidth < 800
  );

  useEffect(() => {
    const handleResize = () => setIsViewportSmall(window.innerWidth < 800);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Wrapper variants={animationConfig} initial="hidden" animate="show">
      <Overlay>
        <Logo />
        <StyledBackButton />
        {isMobileViewport ? (
          <StyledSocialIcons linePosition="top" />
        ) : (
          <SocialIcons />
        )}
        {!isMobileViewport && <Anchor />}
        <MainAreaWrapper>
          {blogs.length === 0 ? (
            <motion.h1
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                marginTop: 250,
                fontSize: '2rem'
              }}
              variants={missingBlogPostsConfig}
              initial={{ opacity: 0.7, x: -200 }}
              animate="animate"
            >
              {'Blog posts to be added soon...'}
            </motion.h1>
          ) : (
            <BlogPostsWrapper>
              {blogs.map((blog) => (
                <BlogPost key={blog.id} {...blog} />
              ))}
            </BlogPostsWrapper>
          )}
        </MainAreaWrapper>
      </Overlay>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  background-image: url(${blogPageCoverImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  min-height: 100svh;
  height: 150vh;
`;

const StyledBackButton = styled(BackButton)`
  right: 90px;
`;

const Overlay = styled.div`
  background-color: ${(props) => `${props.theme.bodyRgba}`};
  width: 100%;
  height: 100%;
  min-height: 100svh;
  position: relative;
  padding: 32px;
`;

const MainAreaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

const BlogPostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSocialIcons = styled(SocialIcons)`
  top: 0;
  right: 32px;
  bottom: initial;
  left: initial;
`;

export default BlogPage;
