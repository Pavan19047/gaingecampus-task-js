// src/components/Sidebar/styled.js

import styled, { css } from 'styled-components';

export const SSidebar = styled.aside`
  background-color: #f7f7f8;
  width: 28rem;
  height: 100vh;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  gap: 2rem;
  font-family: 'Helvetica Neue', sans-serif;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0.4rem;
`;

export const SLogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const SVersion = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #888;
  margin-left: 0.4rem;
`;

// src/components/Sidebar/styled.js

export const SNewChatButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  /* Layout properties from Figma */
  width: 3.6rem; /* 36px */
  height: 4rem; /* 40px */
  border-radius: 0.5rem; /* 5px */
  padding: 1rem; /* 10px */

  /* General styles */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2.2rem; /* Adjusted for better fit */
  color: #555;

  /* Animation properties from Figma */
  transition: background-color 100ms ease-out;

  /* Hover state ("Variant2" from Figma) */
  &:hover {
    background-color: #edeef0; /* A subtle background for hover */
    color: #000;
  }
`;

export const SChatList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const SNavItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  gap: 1.2rem;
  border-radius: 0.8rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 1.4rem;
  color: #333;
  transition: background-color 0.2s;

  &:hover {
    background-color: #edeef0;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #e6e6e8;
      font-weight: 500;
    `}
`;

export const SItemText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
`;

export const SBadge = styled.span`
  background-color: #e53e3e;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  border-radius: 0.4rem;
  margin-left: auto;
`;

export const SAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export const SDateSeparator = styled.div`
  padding: 1rem 1rem 0.5rem;
  font-size: 1.2rem;
  color: #888;
  font-weight: 500;
`;

export const SFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;