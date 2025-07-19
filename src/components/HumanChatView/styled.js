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
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid #EFEFF0;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(8px);
`;

export const SIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2.4rem;
  color: #333;
`;

export const SConsultantInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  p {
    margin: 0;
    font-weight: 600;
    font-size: 1.5rem;
  }
  span {
    font-size: 1.2rem;
    color: #333;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

export const SStatusIndicator = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  
  /* Updated to handle all three states: online (green), offline (red), unavailable (gray) */
  background-color: ${(props) => {
    if (props.offline) return '#e53e3e'; // Red
    if (props.unavailable) return '#888'; // Gray
    return '#4caf50'; // Green (default online)
  }}; 
`;

export const STopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
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
`;

export const SConsultantAvatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
`;

export const SInputWrapper = styled.div`
  width: 100%;
  max-width: 73.6rem;
  border-radius: 1.6rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  background-color: #171719;
`;

export const STextInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  outline: none;
  font-size: 1.5rem;
  padding: 1.2rem;
  color: #fff;
  
  &::placeholder {
    color: #888;
  }
`;

export const SButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.2rem;
`;

export const STagButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-shrink: 0;
`;

export const STagButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 5rem;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  
  ${(props) =>
    props.active
      ? css`
          background-color: #555;
          color: white;
          border: 1px solid #777;
        `
      : css`
          background-color: #444;
          color: #ccc;
          border: 1px solid #555;
        `}
`;

export const SBadge = styled.span`
  background-color: #e53e3e;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.1rem 0.4rem;
  border-radius: 0.4rem;
  margin-left: 0.4rem;
`;

export const SSubmitButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  transition: background-color 0.2s;
  background-color: #555;
  color: #fff;

  &:hover {
    background-color: #666;
  }
`;

export const SInfoBox = styled.div`
  background-color: #f8f9fa;
  border-radius: 1.2rem;
  padding: 1.6rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 70rem;
  text-align: center;
  font-size: 1.3rem;
  color: #666;

  p {
    margin: 0 0 0.8rem 0;
    font-weight: 500;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }
  
  span {
    display: block;
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;