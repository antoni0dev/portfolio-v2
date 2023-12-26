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
import { missingBlogPostsConfig } from '../configs/animationConfigs';

const blogs = [];

const BlogPage = () => {
  return (
    <Wrapper variants={animationConfig} initial="hidden" animate="show">
      <Overlay>
        <Logo />
        <StyledBackButton />
        <SocialIcons />
        <Anchor />
        <MainAreaWrapper>
          {blogs.length === 0 ? (
            <EmptyBlogsHeading
              variants={missingBlogPostsConfig}
              initial={{ opacity: 0.7, x: -200 }}
              animate="animate"
            >
              {'Blog posts to be added soon...'}
            </EmptyBlogsHeading>
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
  right: 120px;
  display: inline;

  @media (max-width: 400px) {
    top: 90px;
    left: 50px;
  }
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

const EmptyBlogsHeading = styled(motion.h1)`
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 250px;
  font-size: '2rem';
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

export default BlogPage;
