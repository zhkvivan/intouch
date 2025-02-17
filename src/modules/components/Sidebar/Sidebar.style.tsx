'use client';

import styled from 'styled-components';

const SidebarWrapper = styled.div`
  display: flex;
  min-width: 300px;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
  height: calc(100vh - 4rem);
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const SidebarLogo = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const SidebarCollection = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
`;

const SidebarItemWrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SidebarItemIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
`;

const SidebarItemText = styled.span``;

export {
  SidebarWrapper,
  SidebarCollection,
  SidebarItemWrapper,
  SidebarItemIcon,
  SidebarItemText,
  SidebarLogo,
};
