import React, { useState } from 'react';
// Import your custom LogoWithText component
import LogoWithText from '../LogoWithText';
// Import styled-components and data
import {
  SSidebar, SHeader, SNewChatButton, SChatList,
  SNavItem, SItemText, SBadge, SAvatar, SDateSeparator, SFooter
} from './styled.js';
import { pinnedItems, folderItems } from './data.jsx';
// Import the new, compatible icon from Material Design
import { MdAddComment } from 'react-icons/md';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { VscLoading } from 'react-icons/vsc';

// Reusable NavItem component
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

// Main Sidebar component
const Sidebar = () => {
  const [activeChatId, setActiveChatId] = useState(1);

  return (
    <SSidebar>
      <SHeader>
        <LogoWithText />
        
        {/* Use the new, compatible icon */}
        <SNewChatButton>
          <MdAddComment />
        </SNewChatButton>
      </SHeader>

      {/* Pinned Items Section */}
      <div>
        {pinnedItems.map((item) => <NavItem key={item.id} item={item} />)}
      </div>

      {/* Folders Section */}
      <div>
        {folderItems.map((item) => <NavItem key={item.id} item={item} />)}
        <NavItem item={{ text: '경영의 어려움경영의 어려움...' }} />
      </div>

      {/* Chat History Section */}
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
        <NavItem item={{ text: '경영의 어려움경영의 어려움...', icon: <IoChatbubbleOutline /> }} />
        <NavItem item={{ text: '경영의 어려움경영의 어려움...', icon: <IoChatbubbleOutline /> }} />
      </SChatList>

      {/* Footer Section */}
      <SFooter>
        <VscLoading />
      </SFooter>
    </SSidebar>
  );
};

export default Sidebar;