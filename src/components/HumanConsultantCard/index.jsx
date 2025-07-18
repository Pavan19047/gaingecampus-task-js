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
// This is the corrected import path
import { FaRegGem } from 'react-icons/fa';

// Make sure you have this image in src/assets/
import consultantImage from '../../assets/consultant-team.png';

const HumanConsultantCard = () => {
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
        <SChatButton>
          <FaRegGem />
          지금 대화하기
        </SChatButton>
      </SContentContainer>
    </SCardWrapper>
  );
};

export default HumanConsultantCard;