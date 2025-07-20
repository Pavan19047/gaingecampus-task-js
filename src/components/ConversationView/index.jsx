import React from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  SViewWrapper, STopBar, STopBarLeft, STopBarCenter, STopBarRight,
  SIconButton, SCounter, SUserAvatar, SShareButton, SChatLog, SMessageWrapper, 
  SMessageBubble, SAvatar, SMessageContent, SUsername, SMessageText, 
  SMessageActions, SInputSection, SDisclaimer
} from './styled';
import ChatInput from '../ChatInput';
import Logo from '../Logo';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { FiThumbsUp, FiThumbsDown, FiRefreshCcw } from 'react-icons/fi';
import { BsShare } from 'react-icons/bs';

const mockConversation = [
  { type: 'user', name: '박하나', avatar: 'https://i.pravatar.cc/40?img=1', text: '팀장 리더십이 고민이 될 때 어떤 강의를 들으면 좋을까요? 추천 강의와 자료 알려줘!', timestamp: '3시간 전' },
  { type: 'ai', name: 'Robin', avatar: 'logo', text: `백종원 코치의 "통찰력을 성장과 성공으로 이끄는 리더십": 이 강의는 임원이 성장할 수 있도록 이끄는 방법에 대해 다루고 있으며, 백종원 코치의 경험을 바탕으로 리더십과 조직문화에 대한 깊이 있는 통찰을 제공합니다.\n\n가인지캠퍼스의 "16가지 리더십 유형별 추천전략": 다양한 리더십 유형에 따라 맞춤형으로 설계된 강의로, 팀원의 성격 유형에 맞는 리더십 스타일을 찾고자 할 때 유용합니다.\n\n"탁월한 리더의 코칭 리더십 지침서": 코칭 스킬을 통해 팀원의 성장을 돕고, 효과적인 소통 능력을 기르는 방법을 제시합니다.`, timestamp: '1시간 전', actions: true },
  { type: 'user', name: '박하나', avatar: 'https://i.pravatar.cc/40?img=1', text: '응', timestamp: '3시간 전' },
  { type: 'ai', name: 'Robin', avatar: 'logo', text: 'AI 모드 on 회신 중... 🤖', timestamp: '1분 전', actions: false }
];

const ConversationView = () => {
  const { showView, toggleSidebar, isSidebarOpen } = useOutletContext();

  return (
    <SViewWrapper>
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
          <SShareButton><BsShare /> 공유하기</SShareButton>
          <SUserAvatar src="https://i.pravatar.cc/40?img=1" alt="User Avatar" />
          <SIconButton onClick={() => showView('ai')}><IoClose /></SIconButton>
        </STopBarRight>
      </STopBar>

      <SChatLog>
        {mockConversation.map((msg, index) => (
          <SMessageWrapper key={index} type={msg.type}>
            {msg.type === 'ai' && <SAvatar><Logo size={32} /></SAvatar>}
            <SMessageContent type={msg.type}>
              <SUsername>{msg.name}</SUsername>
              <SMessageBubble type={msg.type}>
                <SMessageText>{msg.text}</SMessageText>
              </SMessageBubble>
              {msg.actions && (
                <SMessageActions>
                  <button><FiThumbsUp /></button>
                  <button><FiThumbsDown /></button>
                  <button><FiRefreshCcw /></button>
                </SMessageActions>
              )}
            </SMessageContent>
            {msg.type === 'user' && <SAvatar><img src={msg.avatar} alt="user" /></SAvatar>}
          </SMessageWrapper>
        ))}
      </SChatLog>
      
      <SInputSection>
        <ChatInput onSwitchView={() => showView('human_online')} />
        <SDisclaimer>AI Robin은 실수를 할 수 있습니다. 중요한 정보는 항상 확인하세요.</SDisclaimer>
      </SInputSection>
    </SViewWrapper>
  );
};

export default ConversationView;