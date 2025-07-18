// src/components/Logo/styled.js

import styled from 'styled-components';

export const SLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Layout properties from Figma */
  width: 4rem;  /* 40px */
  height: 4rem; /* 40px */
  border-radius: 999.9rem; /* 9999px for a perfect circle */

  background: linear-gradient(45deg, #4c65ff, #8c52ff);
  flex-shrink: 0; 

  /* Shadow property from Figma */
  /* This creates a blur of 10px with the color #2B4FF1 at 50% opacity */
  box-shadow: 0 0 1rem 0 rgba(43, 79, 241, 0.5);
`;

export const SLogoText = styled.span`
  color: white;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
`;