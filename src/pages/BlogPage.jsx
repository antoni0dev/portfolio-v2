import styled from 'styled-components';

import blogPageCoverImage from '/images/articleCover.jpg';

import Logo from '../components/Logo';
import BackButton from '../components/BackButton';
import SocialIcons from '../components/SocialIcons';
import BlogPost from '../components/BlogPost';
import { Blogs } from '../data/BlogData';
import Anchor from '../components/Anchor';
import { useEffect, useState } from 'react';

// TODO: add blogs
const blogs = Blogs;

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
    <Wrapper>
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
            <h1>{'Blog posts to be added soon :)'}</h1>
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

const Wrapper = styled.div`
  background-image: url(${blogPageCoverImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  min-height: 100svh;
`;

const StyledBackButton = styled(BackButton)`
  right: 90px;
`;

const Overlay = styled.div`
  background-color: ${(props) => `${props.theme.bodyRgba}`};
  width: 100%;
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
