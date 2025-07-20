import React from 'react';
import { useOutletContext } from 'react-router-dom';
import MainContent from '../components/MainContent';
import HumanChatView from '../components/HumanChatView';
import OfflineChatView from '../components/OfflineChatView';
import UnavailableChatView from '../components/UnavailableChatView';
import ConversationView from '../components/ConversationView';

const MainPage = () => {
  const { activeView, showView } = useOutletContext();

  // This function is for the button INSIDE the consultant views to cycle through them.
  const cycleHumanViews = () => {
    if (activeView === 'human_online') {
      showView('human_offline');
    } else if (activeView === 'human_offline') {
      showView('human_unavailable');
    } else {
      showView('ai'); // From the last view, go back to the AI welcome screen
    }
  };

  switch (activeView) {
    case 'ai':
      return <MainContent onSwitchView={() => showView('human_online')} />;
    case 'conversation':
      return <ConversationView onBack={() => showView('ai')} />;
    case 'human_online':
      return <HumanChatView onBack={() => showView('ai')} onSwitchView={cycleHumanViews} />;
    case 'human_offline':
      return <OfflineChatView onBack={() => showView('ai')} onSwitchView={cycleHumanViews} />;
    case 'human_unavailable':
      return <UnavailableChatView onBack={() => showView('ai')} />;
    default:
      return <MainContent onSwitchView={() => showView('human_online')} />;
  }
};

export default MainPage;