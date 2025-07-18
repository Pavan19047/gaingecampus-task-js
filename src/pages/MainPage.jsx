import React from 'react';
import styled from 'styled-components';

const SMainContent = styled.section`
  h2 {
    font-size: 2.8rem;
  }
  p {
    font-size: 1.6rem;
    color: #333;
    line-height: 1.6;
  }
`;

const MainPage = () => {
  return (
    <SMainContent>
      <h2>Module Landing Page</h2>
      <p>This is the main content area for the GaingeCampus educational module. The UI is built based on the Figma design, incorporating responsive layouts and interactive elements.</p>
    </SMainContent>
  );
};

export default MainPage;
