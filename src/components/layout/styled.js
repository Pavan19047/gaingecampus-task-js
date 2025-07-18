import styled from 'styled-components';

// Ensure this component is exported correctly
export const SMain = styled.main`
  display: flex;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// The error is because this component was likely missing the 'export' keyword
export const SContent = styled.div`
  flex-grow: 1;
  padding: 3.2rem;
  overflow-y: auto;
`;