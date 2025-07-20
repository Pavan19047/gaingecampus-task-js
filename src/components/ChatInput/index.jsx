import React from "react";
import {
  SInputWrapper,
  STextInput,
  SButtonRow,
  STagButtonGroup,
  STagButton,
  SSubmitButton,
  SBadge,
} from "./styled";
import { FaArrowUp } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";

const ChatInput = ({ onSwitchView, isDarkMode = false, onSwitchToAI }) => {
  return (
    <SInputWrapper $isDarkMode={isDarkMode}>
      <STextInput
        placeholder="무엇이든 물어보십시오..."
        $isDarkMode={isDarkMode}
      />
      <SButtonRow>
        <STagButtonGroup>
          <STagButton
            onClick={onSwitchToAI}
            $active={!isDarkMode}
            $isDarkMode={isDarkMode}
          >
            <AiOutlineRobot /> AI 컨설턴트
          </STagButton>
          <STagButton
            onClick={onSwitchView}
            $active={isDarkMode}
            $isDarkMode={isDarkMode}
          >
            <HiOutlineUserGroup /> 휴면 컨설턴트 <SBadge>N</SBadge>
          </STagButton>
        </STagButtonGroup>
        <SSubmitButton $isDarkMode={isDarkMode}>
          <FaArrowUp />
        </SSubmitButton>
      </SButtonRow>
    </SInputWrapper>
  );
};

export default ChatInput;
