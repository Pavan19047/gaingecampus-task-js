import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { SMain, SContent } from './styled';

const Layout = () => {
  const [activeView, setActiveView] = useState('ai');

  // This function now handles the full cycle between all views
  const cycleViews = () => {
    if (activeView === 'ai') {
      setActiveView('human_online');
    } else if (activeView === 'human_online') {
      setActiveView('human_offline');
    } else if (activeView === 'human_offline') {
      setActiveView('human_unavailable');
    } else { // If unavailable, cycle back to AI
      setActiveView('ai');
    }
  };

  // This function specifically goes back to the AI view
  const showAiView = () => setActiveView('ai');
  
  return (
    <SMain>
      <Sidebar activeView={activeView} />
      <SContent>
        {/* Pass down the cycle and back functions to all child pages */}
        <Outlet context={{ activeView, cycleViews, showAiView }} />
      </SContent>
    </SMain>
  );
};

export default Layout;