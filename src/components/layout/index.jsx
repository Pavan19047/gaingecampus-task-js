import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { SLayout, SMain, SContent } from './styled';

const Layout = () => {
  return (
    <SLayout>
      <Header />
      <SMain>
        <Sidebar />
        <SContent>
          <Outlet />
        </SContent>
      </SMain>
    </SLayout>
  );
};

export default Layout;
