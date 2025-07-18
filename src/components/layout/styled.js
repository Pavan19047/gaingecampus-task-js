import styled from 'styled-components';

export const SMain = styled.main`
  display: flex;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  /* The padding has been removed from here to fix the alignment */
`;