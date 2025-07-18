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

export const SCounter = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  background-color: #f0f4f8;
  padding: 0.6rem 1.2rem;
  border-radius: 1.2rem;
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
  background-color: #fff;
  border-radius: 1.6rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
`;

export const STextInput = styled.input`
  width: 100%;
  height: 2.8rem;
  border: none;
  background: none;
  outline: none;
  font-size: 1.5rem;
  color: #333;
  padding: 0.4rem 1.2rem;
  
  &::placeholder {
    color: #aaa;
  }
`;

export const SButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.2rem;
  /* border-top: 1px solid #f0f0f0; */ /* This line was removed */
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
  border-radius: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  
  ${(props) =>
    props.active
      ? css`
          background-color: #333;
          color: white;
          border: 1px solid #333;
        `
      : css`
          background-color: #f0f4f8;
          color: #555;
          border: 1px solid #e0e0e0;
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
  background-color: #f0f4f8;
  color: #888;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e6ec;
  }
`;