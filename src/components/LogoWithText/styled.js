// src/components/LogoWithText/styled.js

import styled from 'styled-components';

export const SLogoGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

// This is the updated style block
export const SRobinText = styled.span`
  /* Typography properties from Figma */
  font-family: 'Pretendard', sans-serif; /* Font from image */
  font-weight: 700; /* Weight: Bold (700) */
  font-size: 2.4rem; /* Size: 24px */
  line-height: 3.2rem; /* Line height: 32px */
  letter-spacing: -0.023em; /* Letter spacing: -2.3% */

  /* Color properties from Figma */
  /* This uses the new linear-gradient colors */
  background: linear-gradient(90deg, #021C8E, #6452FF);
  
  /* Standard CSS for applying gradient to text */
  background-clip: text;
  -webkit-background-clip: text; /* For Safari */
  color: transparent;
`;

export const SVersionText = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #b0b0b0; 
  margin-left: -0.4rem; 
`;