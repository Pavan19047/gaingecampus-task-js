import React from 'react';
import { SLogoWrapper, SLogoText } from './styled';

const Logo = ({ size = 28 }) => {
  return (
    <SLogoWrapper style={{ width: size, height: size }}>
      <SLogoText style={{ fontSize: size * 0.5 }}>AI</SLogoText>
    </SLogoWrapper>
  );
};

export default Logo;