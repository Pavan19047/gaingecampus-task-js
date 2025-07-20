import styled, { css } from 'styled-components';

export const SSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f7f7f8;
  width: 28rem;
  height: 100vh;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.$isOpen ? '0' : '-100%')});

  @media (max-width: 768px) {
    width: 85%;
    max-width: 32rem;
  }
`;

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0.4rem;
  flex-shrink: 0;
`;

export const SHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const SHeaderButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2.2rem;

  &:hover {
    background-color: #edeef0;
  }
`;

export const SNewChatButton = styled(SHeaderButton)``;

export const SCloseButton = styled(SHeaderButton)`
  /* This hides the button on desktop screens */
  display: none;

  /* This makes the button visible only on mobile screens */
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const SChatList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 2rem 0;
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
    props.$active &&
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
  flex-shrink: 0;
  height: 1rem;
`;

export const SLoadingWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #888;
  margin: 2rem 0;
`;
