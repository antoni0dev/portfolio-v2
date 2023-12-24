import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogPost = ({ name, tags = [], date, imgSrc, link }) => {
  return (
    <Wrapper>
      <Link target="_blank" to={{ pathname: link }}>
        <Image src={imgSrc} alt="name blog post image" />
      </Link>
      <ContentWrapper>
        <Title>{name}</Title>
        <HashtagsWrapper>
          {tags.map((tag, index) => (
            <Tag key={index}>#{tag}</Tag>
          ))}
        </HashtagsWrapper>
        <Date>{date}</Date>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(10rem + 15vw);
  text-decoration: none;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.5s ease;
  }
`;

const Image = styled.img`
  width: 100%;
  flex: 1;
  min-height: 150px;
  border: 2px solid transparent;
`;

const Title = styled.h3`
  color: inherit;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
`;

const ContentWrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const HashtagsWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const Tag = styled.span``;
const Date = styled.span``;

export default BlogPost;
