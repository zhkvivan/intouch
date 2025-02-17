'use client';

import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const StyledHeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

const SubHeading = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`;

const GreetingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export { StyledHeader, StyledHeaderTitle, SubHeading, GreetingsContainer };
