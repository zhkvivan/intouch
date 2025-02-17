import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { StyledHomeLayout } from './home-layout.style';
import DailyBonds from '../components/daily-bonds/daily-bonds';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: HomeLayoutProps) => {
  return (
    <StyledHomeLayout>
      <Sidebar />
      <DailyBonds />
    </StyledHomeLayout>
  );
};

export default Layout;
