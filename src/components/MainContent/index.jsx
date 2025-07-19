import React from 'react';
import {
  SContentWrapper,
  STopBar,
  SIconButton,
  SCounter,
  STopBarRight,
  SUserAvatar,
  SChatContainer,
  SSubheading,
  SMainHeading,
  SInputWrapper,
  STextInput,
  SButtonRow,
  STagButtonGroup,
  STagButton,
  SSubmitButton,
  SBadge
} from './styled';
import Logo from '../Logo';

// Import icons from react-icons
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { FaArrowUp } from 'react-icons/fa';
import { AiOutlineRobot } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';

// This component now accepts onSwitchView as a prop
const MainContent = ({ onSwitchView }) => {
  return (
    <SContentWrapper>
      <STopBar>
        <SIconButton><FiMenu /></SIconButton>
        <SCounter>✨ 3/50</SCounter>
        <STopBarRight>
          <SUserAvatar src="https://i.pravatar.cc/40?img=1" alt="User Avatar" />
          <SIconButton><IoClose /></SIconButton>
        </STopBarRight>
      </STopBar>

      <SChatContainer>
        <Logo size={60} />
        <SSubheading>국내 최초 AI 경영 코치, AI 로빈</SSubheading>
        <SMainHeading>&#123;박하나&#125;님, 경영의 고민을 말씀해주세요.</SMainHeading>
        
        <SInputWrapper>
          <STextInput placeholder="무엇이든 물어보십시오..." />
          <SButtonRow>
            <STagButtonGroup>
              <STagButton active>
                <AiOutlineRobot /> AI 컨설턴트
              </STagButton>
              {/* This button triggers the view switch using the passed prop */}
              <STagButton onClick={onSwitchView}>
                <HiOutlineUserGroup /> 휴면 컨설턴트 <SBadge>N</SBadge>
              </STagButton>
            </STagButtonGroup>
            <SSubmitButton>
              <FaArrowUp />
            </SSubmitButton>
          </SButtonRow>
        </SInputWrapper>

      </SChatContainer>
    </SContentWrapper>
  );
};

export default MainContent;