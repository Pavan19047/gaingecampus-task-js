// eslint-disable-next-line no-unused-vars
import styled, { css } from 'styled-components';

export const SContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const STopBar = styled.header`
  height: 6.5rem;
  padding: 0 1.2rem;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid #efeff0;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(8px);
  flex-shrink: 0;
`;

// Containers for the three-column layout
export const STopBarLeft = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`;
export const STopBarCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
export const STopBarRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 1.6rem;
`;

export const SIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2.4rem;
  color: #333;
  flex-shrink: 0;
  padding: 0.8rem;
`;

export const SCounter = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  background-color: #f0f4f8;
  padding: 0.6rem 1.2rem;
  border-radius: 1.2rem;
`;

export const SUserAvatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
`;

export const SChatContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.2rem;
  gap: 1.6rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.6rem;
  }
`;

export const SSubheading = styled.p`
  font-size: 1.4rem;
  color: #555;
  margin: 0;
  margin-top: 1rem;
`;

export const SMainHeading = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  color: #333;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;
