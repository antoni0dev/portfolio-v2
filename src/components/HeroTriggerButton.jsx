import styled from 'styled-components';
import YinYangSVG from './svg/YinYangSVG';
import { heroTriggerButtonRotate } from '../lib/constants';

const HeroTriggerButton = ({ isClicked, onClick, fill }) => {
  return (
    <Wrapper isClicked={isClicked} onClick={onClick}>
      <YinYangSVG
        width={isClicked ? 120 : 200}
        height={isClicked ? 120 : 200}
        fill={fill}
      />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: absolute;
  top: ${(props) => (props.isClicked ? '85%' : '50%')};
  left: ${(props) => (props.isClicked ? '92%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  transition: all 1s ease 0s;

  & > :first-child {
    animation: ${heroTriggerButtonRotate} infinite 1.5s linear;
  }

  & > :last-child {
    margin-top: 16px;
  }
`;

export default HeroTriggerButton;
