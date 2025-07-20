import React from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  SContentWrapper, STopBar, STopBarLeft, STopBarCenter, STopBarRight,
  SIconButton, SCounter, SUserAvatar, SChatContainer, SSubheading, SMainHeading,
} from './styled';
import Logo from '../Logo';
import ChatInput from '../ChatInput';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const MainContent = () => {
  const { showView, toggleSidebar, isSidebarOpen } = useOutletContext();

  return (
    <SContentWrapper>
      <STopBar>
        <STopBarLeft>
          <SIconButton onClick={toggleSidebar}>
            {isSidebarOpen ? <IoClose /> : <FiMenu />}
          </SIconButton>
        </STopBarLeft>
        <STopBarCenter>
          <SCounter>✨ 3/50</SCounter>
        </STopBarCenter>
        <STopBarRight>
          <SUserAvatar src="https://i.pravatar.cc/40?img=1" alt="User Avatar" />
          <SIconButton><IoClose /></SIconButton>
        </STopBarRight>
      </STopBar>

      <SChatContainer>
        <Logo size={60} />
        <SSubheading>국내 최초 AI 경영 코치, AI 로빈</SSubheading>
        <SMainHeading>경영의 고민을 말씀해주세요.</SMainHeading>
        <ChatInput onSwitchView={() => showView('human_online')} />
      </SChatContainer>
    </SContentWrapper>
  );
};

export default MainContent;