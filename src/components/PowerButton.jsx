import styled from 'styled-components';

import PowerButtonSVG from './svg/PowerButtonSVG';
import { Link } from 'react-router-dom';
import { PATHS } from '../lib/constants';

const PowerButton = ({ to = PATHS.root, style, ...rest }) => {
  return (
    <Wrapper to={to} style={style} {...rest}>
      <PowerButtonSVG />
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  transform: translate(-50%, 0);
  color: inherit;
  background-color: #fcf6f4;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid #000;
  width: ${(props) => props.width || 35 + 'px'};
  height: ${(props) => props.height || 35 + 'px'};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  // Positioning defaults
  position: fixed;
  top: 32px;
  left: 50%;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.5s ease 0.5s;

  &:hover {
    background-color: inherit;
    color: inherit;
  }
`;

export default PowerButton;
