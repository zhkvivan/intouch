import React from 'react';
import HomeLayout from '../../modules/layouts/home-layout';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: HomeLayoutProps) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default Layout;
