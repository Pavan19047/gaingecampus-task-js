import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
// We no longer import SLayout, only SMain and SContent
import { SMain, SContent } from './styled';

const Layout = () => {
  return (
    // The <SMain> component is now the top-level container
    <SMain>
      <Sidebar />
      <SContent>
        <Outlet />
      </SContent>
    </SMain>
  );
};

export default Layout;