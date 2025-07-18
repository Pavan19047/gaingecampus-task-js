import React from 'react';
import Logo from '../Logo'; // We'll reuse the circular logo component
import { SLogoGroupWrapper, SRobinText, SVersionText } from './styled';

const LogoWithText = () => {
  return (
    <SLogoGroupWrapper>
      <Logo size={28} />
      <SRobinText>Robin</SRobinText>
      <SVersionText>v1.1</SVersionText>
    </SLogoGroupWrapper>
  );
};

export default LogoWithText;