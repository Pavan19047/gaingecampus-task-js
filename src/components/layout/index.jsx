import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { SMain, SContent } from './styled';

const Layout = () => {
  const [activeView, setActiveView] = useState('ai');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const showView = (viewName) => {
    setActiveView(viewName);
    if (!isSidebarOpen) {
      setIsSidebarOpen(true);
    }
  };
  
  return (
    <SMain>
      <Sidebar 
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar} // Pass the toggle function here
        activeView={activeView} 
        showView={showView}
      />
      
      <SContent $isSidebarOpen={isSidebarOpen}>
        <Outlet context={{ activeView, isSidebarOpen, toggleSidebar, showView }} />
      </SContent>
    </SMain>
  );
};

export default Layout;