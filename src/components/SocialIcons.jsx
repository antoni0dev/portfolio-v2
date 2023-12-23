import { Link } from 'react-router-dom';
import GithubSVG from './svg/GithubSVG';
import FacebookSVG from './svg/FacebookSVG';
import TwitterSVG from './svg/TwitterSVG';
import { SOCIAL_URLS } from '../lib/constants';
import styled from 'styled-components';

const SOCIAL_LINKS = [
  {
    url: SOCIAL_URLS.github,
    icon: GithubSVG,
  },
  {
    url: SOCIAL_URLS.linkedin,
    icon: TwitterSVG,
  },
  {
    url: SOCIAL_URLS.facebook,
    icon: FacebookSVG,
  },
];

const SocialIcons = ({ fillColor }) => {
  return (
    <Wrapper>
      {SOCIAL_LINKS.map(({ url, icon: Icon }, index) => (
        <StyledLink key={index} to={url} target="_blank">
          <Icon
            width={25}
            height={25}
            fill={fillColor}
            style={{
              transition: 'fill 2s ease',
            }}
          />
        </StyledLink>
      ))}

      <Line fillColor={fillColor} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  position: fixed;
  bottom: 0;
  left: 32px;
`;

const Line = styled.span`
  width: 2px;
  height: 128px;
  background-color: ${(props) => props.fillColor};
  transition: background-color 6s ease;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

export default SocialIcons;
