import styled from 'styled-components';

export const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const SMain = styled.main`
  display: flex;
  flex-grow: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SContent = styled.div`
  flex-grow: 1;
  padding: 3.2rem;
  overflow-y: auto;
`;
