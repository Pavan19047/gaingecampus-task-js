import styled, { css } from 'styled-components';

export const SViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
  position: relative;
`;

export const STopBar = styled.header`
  height: 6.5rem;
  padding: 1.2rem 1.6rem;
  display: flex;
  justify-content: space-between;
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

export const SIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  padding: 0;
  border-radius: 0.8rem;
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const SCounter = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  background-color: #f0f4f8;
  padding: 0.6rem 1.2rem;
  border-radius: 1.2rem;
`;

export const STopBarRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 1.6rem;
`;

export const SUserAvatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
`;

export const SShareButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.8rem;
  padding: 0.8rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SChatLog = styled.div`
  flex-grow: 1;
  padding: 2.4rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-bottom: 20rem;

  @media (max-width: 768px) {
    padding: 1.2rem;
    padding-bottom: 20rem;
  }
`;

export const SMessageWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  max-width: 80%;
  align-self: ${(props) => (props.type === 'user' ? 'flex-end' : 'flex-start')};

  ${(props) =>
    props.type === 'user' &&
    `
    flex-direction: row-reverse;
  `}
`;

export const SAvatar = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.type === 'user' ? 'flex-end' : 'flex-start')};
`;

export const SUsername = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #333;
`;

export const SMessageBubble = styled.div`
  padding: 1.2rem 1.6rem;
  border-radius: 1.2rem;
  font-size: 1.5rem;
  line-height: 1.6;
  white-space: pre-wrap;

  ${(props) =>
    props.type === 'user'
      ? css`
          background-color: #e6f7d9;
          color: #333;
          border-top-right-radius: 0;
        `
      : css`
          background-color: #f8f9fa;
          color: #333;
          border: 1px solid #f0f0f0;
          border-top-left-radius: 0;
        `}
`;

export const SMessageText = styled.p`
  margin: 0;
`;

export const SMessageActions = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.8rem;

  button {
    background: none;
    border: none;
    font-size: 1.6rem;
    color: #888;
    cursor: pointer;
    &:hover {
      color: #333;
    }
  }
`;

export const SInputSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, white 70%, rgba(255, 255, 255, 0));
  padding: 2.4rem;
  padding-top: 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1.2rem;
    padding-top: 2.4rem;
  }
`;

export const SDisclaimer = styled.p`
  font-size: 1.2rem;
  color: #888;
  text-align: center;
  margin-top: 1.2rem;
`;
