import React from 'react';
// Reusing styles from HumanChatView to avoid duplicating code
import {
  SContentWrapper, STopBar, SIconButton, SConsultantInfo, SStatusIndicator,
  STopBarRight, SUserAvatar, SChatContainer,
  SMainHeading, SInputWrapper, SButtonRow, STagButtonGroup,
  STagButton, SSubmitButton, SInfoBox,
} from '../HumanChatView/styled';

// Import icons
import { IoArrowBack, IoClose } from 'react-icons/io5';
import { FaArrowUp } from 'react-icons/fa';
import { AiOutlineRobot } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FiClock } from 'react-icons/fi';

const UnavailableChatView = ({ onBack }) => {
  return (
    <SContentWrapper>
      <STopBar>
        <SIconButton onClick={onBack}><IoArrowBack /></SIconButton>
        <SConsultantInfo>
          <SUserAvatar src="https://i.pravatar.cc/40?img=3" alt="Consultant Avatar" />
          <div>
            <p>휴면 컨설턴트</p>
            {/* The 'unavailable' prop will trigger the gray color */}
            <span><SStatusIndicator unavailable /> 오프라인</span>
          </div>
        </SConsultantInfo>
        <STopBarRight>
          <SUserAvatar src="https://i.pravatar.cc/40?img=1" alt="User Avatar" />
          <SIconButton><IoClose /></SIconButton>
        </STopBarRight>
      </STopBar>

      <SChatContainer>
        {/* The avatar and subheading are removed in this view */}
        <SMainHeading>
          지금은 실시간 응답이 어려운 시간입니다.<br />
          남겨주시면 채팅 시간에 답변드립니다. 💬
        </SMainHeading>
        
        {/* The input field is replaced with simple placeholder text */}
        <SInputWrapper>
          <SButtonRow>
            <STagButtonGroup>
              <STagButton onClick={onBack}>
                <AiOutlineRobot /> AI 컨설턴트
              </STagButton>
              <STagButton active>
                <HiOutlineUserGroup /> 휴면 컨설턴트
              </STagButton>
            </STagButtonGroup>
            <SSubmitButton>
              <FaArrowUp />
            </SSubmitButton>
          </SButtonRow>
        </SInputWrapper>

        <SInfoBox>
          <p><FiClock /> <strong>채팅 시간:</strong> 평일 09:00-18:00 (주말, 공휴일 제외)</p>
          <span>({'{'}박하나{'}'}님의 편의에 신속히 답변드리기 위해 노력하고 있습니다.)</span>
          <span>평일 09:00-18:00 운영하며, 주말 및 공휴일에는 답변이 다소 지연될 수 있습니다. 너그러운 양해 부탁드립니다.</span>
        </SInfoBox>
      </SChatContainer>
    </SContentWrapper>
  );
};

export default UnavailableChatView;