import { useState } from 'react';
import styled from 'styled-components';
import GithubSVG from './svg/GithubSVG';
import { motion } from 'framer-motion';

// Framer motion configuration
const configuration = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 2,
    transition: {
      type: 'spring',
      duration: 3
    }
  }
};

const Card = ({
  as: Component = 'div',
  name,
  description,
  tags,
  demo,
  github
}) => {
  return (
    <Wrapper as={Component} variants={configuration}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((tag, index) => {
          return <Tag key={index}>#{tag}</Tag>;
        })}
      </Tags>
      <Footer>
        <Link href={demo} target="_blank">
          Visit
        </Link>
        <Git
          isValidHref={github}
          href={github ? github : '#'}
          onClick={(e) => {
            if (!github) {
              e.preventDefault();
            }
          }}
          target={'_blank'}
        >
          <GithubSVG width={30} height={30} />
        </Git>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled(motion.li)`
  flex: 1 0 350px;
  min-height: 400px;
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.body};
  padding: 24px 32px;
  border-radius: 0 50px 0 50px;
  border: 1px solid ${(props) => props.theme.colors.body};
  transition: all 0.2s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background-color: ${(props) => props.theme.colors.body};
    color: ${(props) => props.theme.colors.text};
    border: 1px solid ${(props) => props.theme.colors.text};
  }

  // Custom media queries for specific requirements
  @media (max-width: 1280px) {
    flex-basis: 300px;
  }

  @media (max-width: 800px) {
    flex-basis: 270px;
  }

  @media (max-width: 485px) {
    flex-basis: 250px;
  }

  @media (max-width: 380px) {
    flex-basis: 200px;
  }
`;

const Link = styled.a`
  background-color: ${(props) => props.theme.colors.body};
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Wrapper}:hover & {
    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.body};
  }
`;

const Title = styled.div`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.div`
  font-size: calc(0.8em + 0.3vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.colors.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Wrapper}:hover & {
    border-top: 2px solid ${(props) => props.theme.colors.text};
  }
`;

const Tag = styled.span`
  margin-right: 8px;
  font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    color: ${(props) => (props.isValidHref ? 'inherit' : 'gray')};
    cursor: ${(props) => (props.isValidHref ? 'pointer' : 'not-allowed')};

    &::after {
      content: ${(props) => (props.isValidHref ? '' : '"Private Github repo"')};
      content: ${(props) =>
        props.isDeploying
          ? '"Please wait a few seconds. The app spins down on idle and needs to redeploy."'
          : ''};
      position: absolute;
      top: -22px; // Position of the tooltip
      white-space: nowrap;
      padding: 5px 10px;
      background-color: gray;
      color: white;
      border-radius: 4px;
      font-size: 0.8em;
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0.3s ease,
        visibility 0.3s ease;
    }

    &::after {
      opacity: 1;
      visibility: visible;
    }
  }

  ${Wrapper}:hover & {
    & > * {
      fill: ${(props) =>
        props.isValidHref ? props.theme.colors.text : 'gray'};
    }
  }
`;
export default Card;
