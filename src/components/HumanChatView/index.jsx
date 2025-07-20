import React from "react";
import {
  SContentWrapper,
  STopBar,
  SIconButton,
  SConsultantInfo,
  SStatusIndicator,
  STopBarRight,
  SUserAvatar,
  SChatContainer,
  SConsultantAvatar,
  SSubheading,
  SMainHeading,
  SInfoBox,
} from "./styled";
import ChatInput from "../ChatInput";

import { IoArrowBack, IoClose } from "react-icons/io5";
import { FiClock } from "react-icons/fi";

const HumanChatView = ({ onBack, onSwitchView }) => {
  return (
    <SContentWrapper>
      <STopBar>
        {/* This onBack function is now fully connected */}
        <SIconButton onClick={onBack}>
          <IoArrowBack />
        </SIconButton>
        <SConsultantInfo>
          <SUserAvatar
            src="https://i.pravatar.cc/40?img=3"
            alt="Consultant Avatar"
          />
          <div>
            <p>
              [{"{"}김경민{"}"}] 컨설턴트
            </p>
            <span>
              <SStatusIndicator /> 온라인
            </span>
          </div>
        </SConsultantInfo>
        <STopBarRight>
          <SUserAvatar src="https://i.pravatar.cc/40?img=1" alt="User Avatar" />
          <SIconButton>
            <IoClose />
          </SIconButton>
        </STopBarRight>
      </STopBar>

      <SChatContainer>
        <SConsultantAvatar
          src="https://i.pravatar.cc/80?img=3"
          alt="Consultant Avatar"
        />
        <SSubheading>경영 컨설팅 전문가와 채팅</SSubheading>
        <SMainHeading>
          &#123;박하나&#125;님, [{"{"}김경민{"}"}] 컨설턴트에게 물어보세요. 😊
        </SMainHeading>

        {/* This onSwitchView function is now fully connected */}
        <ChatInput
          onSwitchView={onSwitchView}
          onSwitchToAI={onBack}
          isDarkMode={true}
        />

        <SInfoBox>
          <p>
            <FiClock /> <strong>채팅 시간:</strong> 평일 09:00-18:00 (주말,
            공휴일 제외)
          </p>
          <span>
            ({"{"}박하나{"}"}님의 편의에 신속히 답변드리기 위해 노력하고
            있습니다.)
          </span>
          <span>
            평일 09:00-18:00 운영하며, 주말 및 공휴일에는 답변이 다소 지연될 수
            있습니다. 너그러운 양해 부탁드립니다.
          </span>
        </SInfoBox>
      </SChatContainer>
    </SContentWrapper>
  );
};

export default HumanChatView;
