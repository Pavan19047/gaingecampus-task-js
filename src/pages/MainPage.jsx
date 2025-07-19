import React from 'react';
import { useOutletContext } from 'react-router-dom';
import MainContent from '../components/MainContent';
import HumanChatView from '../components/HumanChatView';
import OfflineChatView from '../components/OfflineChatView';
import UnavailableChatView from '../components/UnavailableChatView';

const MainPage = () => {
  // Get the state and functions from the parent Layout
  const { activeView, cycleViews, showAiView } = useOutletContext();

  // Render the correct component based on the activeView state
  if (activeView === 'ai') {
    return <MainContent onSwitchView={cycleViews} />;
  } else if (activeView === 'human_online') {
    return <HumanChatView onBack={showAiView} onSwitchView={cycleViews} />;
  } else if (activeView === 'human_offline') {
    return <OfflineChatView onBack={showAiView} onSwitchView={cycleViews} />;
  } else { // activeView === 'human_unavailable'
    // The last view in the cycle only needs a back button
    return <UnavailableChatView onBack={showAiView} />;
  }
};

export default MainPage;