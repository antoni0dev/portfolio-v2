import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = ({ to, children, ...rest }) => {
  return (
    <Wrapper to={to} {...rest}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`;

export default StyledLink;
