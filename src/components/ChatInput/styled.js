import styled, { css } from 'styled-components';

export const SInputWrapper = styled.div`
  width: 100%;
  max-width: 73.6rem;
  border-radius: 1.6rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.$isDarkMode ? '#171719' : '#fff')};
`;

export const STextInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  outline: none;
  font-size: 1.5rem;
  padding: 1.2rem;
  color: ${props => (props.$isDarkMode ? '#fff' : '#333')};
  
  &::placeholder {
    color: ${props => (props.$isDarkMode ? '#888' : '#aaa')};
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
  
  ${props => {
    if (props.$isDarkMode) {
      return props.$active
        ? css` background-color: #555; color: white; border: 1px solid #777; `
        : css` background-color: #444; color: #ccc; border: 1px solid #555; `;
    } else {
      return props.$active
        ? css` background-color: #333; color: white; border: 1px solid #333; `
        : css` background-color: #f0f4f8; color: #555; border: 1px solid #e0e0e0; `;
    }
  }}
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
  background-color: ${props => (props.$isDarkMode ? '#555' : '#f0f4f8')};
  color: ${props => (props.$isDarkMode ? '#fff' : '#888')};

  &:hover {
    background-color: ${props => (props.$isDarkMode ? '#666' : '#e0e6ec')};
  }
`;