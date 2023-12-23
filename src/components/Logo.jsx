import styled from 'styled-components';

const Logo = (props) => {
  return <Wrapper {...props}>antonio.dev</Wrapper>;
};

const Wrapper = styled.h1`
  position: relative;
  margin: 0;
  display: inline-block;
  font-family: 'Pacifico', cursive;
`;

export default Logo;
