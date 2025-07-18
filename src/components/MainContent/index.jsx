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

const MainContent = () => {
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
        
        {/* --- UPDATED INPUT WRAPPER STRUCTURE --- */}
        <SInputWrapper>
          <STextInput placeholder="무엇이든 물어보십시오..." />
          <SButtonRow>
            <STagButtonGroup>
              <STagButton active>
                <AiOutlineRobot /> AI 컨설턴트
              </STagButton>
              <STagButton>
                <HiOutlineUserGroup /> 휴면 컨설턴트 <SBadge>N</SBadge>
              </STagButton>
            </STagButtonGroup>
            <SSubmitButton>
              <FaArrowUp />
            </SSubmitButton>
          </SButtonRow>
        </SInputWrapper>
        {/* --- END OF UPDATED STRUCTURE --- */}

      </SChatContainer>
    </SContentWrapper>
  );
};

export default MainContent;