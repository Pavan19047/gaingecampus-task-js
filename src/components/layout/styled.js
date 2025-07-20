import styled from 'styled-components';

export const SMain = styled.main`
  position: relative;
  background-color: #f8f9fa;
`;

export const SContent = styled.div`
  height: 100vh;
  overflow: hidden;
  transition: margin-left 0.3s ease-in-out;
  margin-left: ${(props) => (props.$isSidebarOpen ? '28rem' : '0')};
  position: relative;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
