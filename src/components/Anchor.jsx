import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LinkSVG from './svg/LinkSVG';
import AnchorSVG from './svg/AnchorSVG';

const ANCHOR_HEIGHT = 70;
const CHAIN_PIECE_LENGTH = 25;

// Hide the anchor + cable so that initially only the anchor is visible
const MAX_ANCHOR_NEGATIVE_TRANSFORM = -95;

const Anchor = () => {
  const [anchorCablePieces, setAnchorCablePieces] = useState(
    Math.floor((window.innerHeight - ANCHOR_HEIGHT) / CHAIN_PIECE_LENGTH)
  );

  const [anchorTranslateY, setAnchorTranslateY] = useState(
    MAX_ANCHOR_NEGATIVE_TRANSFORM
  );

  useEffect(() => {
    const handleAdjustAnchorCableLength = () =>
      setAnchorCablePieces(
        Math.floor((window.innerHeight - ANCHOR_HEIGHT) / CHAIN_PIECE_LENGTH)
      );

    window.addEventListener('resize', handleAdjustAnchorCableLength);

    return () =>
      window.removeEventListener('resize', handleAdjustAnchorCableLength);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowSize = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;

      let notYetScrolledHeight = bodyHeight - (scrollPosition + windowSize);
      let newTranslateYValue = Math.max(
        MAX_ANCHOR_NEGATIVE_TRANSFORM,
        -(notYetScrolledHeight / (bodyHeight - windowSize)) * 100
      );

      setAnchorTranslateY(newTranslateYValue);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper style={{ transform: `translateY(${anchorTranslateY}%)` }}>
      {[...Array(anchorCablePieces)].map((_, index) => (
        <LinkSVG
          key={index}
          width={30}
          height={CHAIN_PIECE_LENGTH}
          className="chain"
        />
      ))}
      <AnchorSVG width={70} height={70} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 32px;
  transition: transform 0.15s ease;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .chain {
    transform: rotate(135deg);
  }
`;

export default Anchor;
