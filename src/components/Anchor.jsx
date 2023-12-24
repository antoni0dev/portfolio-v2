import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import LinkSVG from './svg/LinkSVG';
import AnchorSVG from './svg/AnchorSVG';

const Anchor = () => {
  const ref = useRef(null);
  const [anchorCableLength, setAnchorCableLength] = useState(
    (window.innerHeight - 70) / 25
  );
  console.log('anchorCableLength', anchorCableLength);

  useEffect(() => {
    const handleAdjustAnchorCableLength = () =>
      setAnchorCableLength(parseInt((window.innerHeight - 70) / 25));

    window.addEventListener('resize', handleAdjustAnchorCableLength);

    return () =>
      window.removeEventListener('resize', handleAdjustAnchorCableLength);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowSize = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;

      let unscrolledHeight = bodyHeight - (scrollPosition + windowSize);
      let unscrolledHeightPercentage =
        (unscrolledHeight * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${
        -unscrolledHeightPercentage < -92 ? -92 : -unscrolledHeightPercentage
      }%)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper ref={ref}>
      {[...Array(anchorCableLength)].map((_, index) => (
        <LinkSVG key={index} width={30} height={25} className="chain" />
      ))}
      <AnchorSVG width={70} height={70} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 32px;
  transform: translateY(-92%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .chain {
    transform: rotate(135deg);
  }
`;

export default Anchor;
