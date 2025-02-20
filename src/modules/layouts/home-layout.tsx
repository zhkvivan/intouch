import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { MainContent, StyledHomeLayout } from './home-layout.style';
import DailyBonds from '../components/daily-bonds/daily-bonds';
import Header from '../components/header/header';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: HomeLayoutProps) => {
  return (
    <StyledHomeLayout>
      <Sidebar />
      <MainContent>
        <Header />
        <DailyBonds />
        {children}
      </MainContent>
    </StyledHomeLayout>
  );
};

export default Layout;
