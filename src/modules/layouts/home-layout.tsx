import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { StyledHomeLayout } from './home-layout.style';
import DailyBonds from '../components/daily-bonds/daily-bonds';
import Header from '../components/header/header';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: HomeLayoutProps) => {
  return (
    <StyledHomeLayout>
      <Sidebar />
      <div>
        <Header />
        <DailyBonds />
        {children}
      </div>
    </StyledHomeLayout>
  );
};

export default Layout;
