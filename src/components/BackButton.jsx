import styled from 'styled-components';

import BackButtonSVG from './svg/BackButtonSVG';
import { Link } from 'react-router-dom';
import { PATHS } from '../lib/constants';

const BackButton = ({ to = PATHS.root, style, fill, ...rest }) => {
  return (
    <Wrapper to={to} style={style} {...rest}>
      <BackButtonSVG fill={fill} />
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  color: inherit;

  padding: 5px;
  border-radius: 50%;
  width: ${(props) => props.width || 45 + 'px'};
  height: ${(props) => props.height || 45 + 'px'};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  // Positioning defaults
  position: fixed;
  top: 32px;
  right: 32px;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.5s ease 0.5s;
`;

export default BackButton;
