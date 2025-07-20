import React from 'react';
import {
  SCardWrapper,
  SImageContainer,
  SContentContainer,
  STitleGroup,
  STitle,
  SBadge,
  SBodyText,
  SChatButton
} from './styled';
import { FaRegGem } from 'react-icons/fa';

// Make sure you have this image in src/assets/
import consultantImage from '../../assets/consultant-team.png';

// Accept onChatNow as a prop
const HumanConsultantCard = ({ onChatNow }) => {
  return (
    <SCardWrapper>
      <SImageContainer>
        <img src={consultantImage} alt="Human Consultant Team" />
      </SImageContainer>
      <SContentContainer>
        <STitleGroup>
          <STitle>휴면 컨설턴트</STitle>
          <SBadge>N</SBadge>
        </STitleGroup>
        <SBodyText>
          멤버십 회원분들께 드리는 혜택, 전문 컨설턴트들의 상담을 통해 더 구체적인 해결책을 찾아보십시오.
        </SBodyText>
        {/* Add the onClick handler to the button */}
        <SChatButton onClick={onChatNow}>
          <FaRegGem />
          지금 대화하기
        </SChatButton>
      </SContentContainer>
    </SCardWrapper>
  );
};

export default HumanConsultantCard;