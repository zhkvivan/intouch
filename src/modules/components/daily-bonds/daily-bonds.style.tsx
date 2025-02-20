'use client';

import styled from 'styled-components';

const StyledDailyBonds = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1rem;
`;

const PersonPromoWrapper = styled.div`
  transform: translateX(-10px);
  position: relative;

  &::before {
    z-index: 10;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 20px;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 20px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
    pointer-events: none;
  }
`;

const PersonPromoContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: stretch;
  overflow-x: auto;
  padding: 1rem;
  /* cursor: grab; */
  /* user-select: none;
  scroll-behavior: smooth;
  -webkit-user-select: none;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; */

  &:active {
    cursor: grabbing;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const PersonPromo = styled.div`
  flex: 0 0 auto;
  width: 280px;
  height: 150px;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const PersonPromoImage = styled.img`
  max-width: 70px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
`;

const PersonDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const PersonPromoName = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
`;

const PersonPromoDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

const Data = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
  position: absolute;
  background-color: #008a46;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  top: 1rem;
  right: 1rem;
`;

const SubHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #008a46;
`;

const SubHeadingText = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  font-family: var(--font-readex-pro);
`;

const SubHeadingIconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
`;

export {
  StyledDailyBonds,
  PersonPromoWrapper,
  PersonPromoContainer,
  PersonPromo,
  PersonPromoImage,
  PersonPromoName,
  PersonPromoDescription,
  Data,
  SubHeadingWrapper,
  SubHeadingText,
  SubHeadingIconWrapper,
  PersonDetailsContainer,
};
