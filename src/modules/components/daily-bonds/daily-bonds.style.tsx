'use client';

import styled from 'styled-components';

const StyledDailyBonds = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1rem;
`;

const PersonPromoContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: stretch;
`;

const PersonPromo = styled.div`
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  height: 100%;
  justify-content: space-between;
`;

const PersonPromoImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
`;

const PersonPromoName = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
`;

const PersonPromoDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

const LastTalked = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
`;

export {
  StyledDailyBonds,
  PersonPromoContainer,
  PersonPromo,
  PersonPromoImage,
  PersonPromoName,
  PersonPromoDescription,
  LastTalked,
};
