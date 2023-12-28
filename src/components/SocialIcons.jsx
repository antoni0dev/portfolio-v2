import { Link } from 'react-router-dom';
import GithubSVG from './svg/GithubSVG';
import LinkedinSVG from './svg/LinkedinSVG';
import { SOCIAL_URLS } from '../lib/constants';
import styled, { useTheme } from 'styled-components';
import ResumeSVG from './svg/ResumeSVG';

const SOCIAL_LINKS = [
  {
    url: SOCIAL_URLS.github,
    icon: GithubSVG
  },
  {
    url: SOCIAL_URLS.linkedin,
    icon: LinkedinSVG
  },
  {
    url: SOCIAL_URLS.resume,
    icon: ResumeSVG
  }
];

const SocialIcons = ({ fillColor = '', linePosition = 'bottom', ...rest }) => {
  const theme = useTheme();

  return (
    <Wrapper {...rest}>
      {linePosition === 'top' && (
        <Line fillColor={fillColor || theme.colors.text} />
      )}
      {SOCIAL_LINKS.map(({ url, icon: Icon }, index) => (
        <StyledLink key={index} to={url} target="_blank">
          <Icon
            width={25}
            height={25}
            fill={fillColor}
            style={{
              transition: 'fill 2s ease'
            }}
          />
        </StyledLink>
      ))}

      {linePosition === 'bottom' && (
        <Line fillColor={fillColor || theme.colors.text} />
      )}
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
  height: 50px;
  background-color: ${(props) => props.fillColor};
  transition: background-color 6s ease;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

export default SocialIcons;
