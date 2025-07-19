import React, { useState, useEffect } from 'react';
import LogoWithText from '../LogoWithText';
import HumanConsultantCard from '../HumanConsultantCard';
import {
  SSidebar, SHeader, SNewChatButton, SChatList, SLoadingWrapper,
  SNavItem, SItemText, SBadge, SAvatar, SDateSeparator, SFooter
} from './styled.js';
import { pinnedItems, folderItems } from './data.jsx';
import { MdAddComment } from 'react-icons/md';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { VscLoading } from 'react-icons/vsc';

const NavItem = ({ item, active }) => (
  <SNavItem active={active}>
    {item.icon === 'avatar' ? (
      <SAvatar src="https://i.pravatar.cc/32" alt="User Avatar" />
    ) : (
      item.icon
    )}
    <SItemText>{item.text}</SItemText>
    {item.badge && <SBadge>{item.badge}</SBadge>}
  </SNavItem>
);

const Sidebar = ({ activeView }) => {
  // You can add this console.log here for debugging
  // console.log('Sidebar activeView is currently:', activeView); 

  const [activeChatId, setActiveChatId] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const mockChats = Array.from({ length: 15 }, (_, i) => ({
    id: i + 3,
    text: `오래된 대화 내용입니다 ${i + 1}`
  }));

  return (
    <SSidebar>
      <SHeader>
        <LogoWithText />
        <SNewChatButton>
          <MdAddComment />
        </SNewChatButton>
      </SHeader>

      <div>
        {pinnedItems.map((item) => <NavItem key={item.id} item={item} />)}
      </div>

      <div>
        {folderItems.map((item) => <NavItem key={item.id} item={item} />)}
        <NavItem item={{ text: '경영의 어려움경영의 어려움...' }} />
      </div>
      
      {isLoading ? (
        <SLoadingWrapper>
          <VscLoading />
        </SLoadingWrapper>
      ) : (
        <SChatList>
          <SDateSeparator>오늘</SDateSeparator>
          <div onClick={() => setActiveChatId(1)}>
            <NavItem 
              item={{ text: '경영의 어려움경영의 어려움...', icon: <IoChatbubbleOutline /> }}
              active={activeChatId === 1} 
            />
          </div>
          <div onClick={() => setActiveChatId(2)}>
            <NavItem 
              item={{ text: '경영의 어려움경영의 어려움...', icon: <IoChatbubbleOutline /> }} 
              active={activeChatId === 2} 
            />
          </div>
          
          <SDateSeparator>2025년 5월 17일</SDateSeparator>
          {mockChats.map(chat => (
            <NavItem 
              key={chat.id}
              item={{ text: chat.text, icon: <IoChatbubbleOutline /> }} 
            />
          ))}
        </SChatList>
      )}

      <SFooter />

      {/* This is the line that controls the card's visibility */}
      {activeView === 'ai' && <HumanConsultantCard />}
      
    </SSidebar>
  );
};

export default Sidebar;