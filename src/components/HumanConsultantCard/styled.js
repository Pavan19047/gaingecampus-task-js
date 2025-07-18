import styled from 'styled-components';

export const SCardWrapper = styled.div`
  position: absolute;
  bottom: 1.2rem;
  left: 1.2rem;
  width: calc(100% - 2.4rem);
  max-width: 23.2rem;
  height: 28rem;
  
  /* The shadow is applied to the wrapper */
  box-shadow: 0 0 3rem 0 rgba(75, 82, 141, 0.15);
  
  /* We apply the radius to the wrapper to help the shadow conform to the shape */
  border-radius: 1.2rem;

  /* This wrapper is now just a container for positioning and shadow */
  background-color: transparent; 
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    max-width: 100%;
  }
`;

export const SImageContainer = styled.div`
  width: 100%;
  height: 11.8rem;
  
  /* Apply radius to the top corners */
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  overflow: hidden; /* This clips the image inside */
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SContentContainer = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  /* Give the content its own white background and rounded bottom corners */
  background-color: white;
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;
`;

export const STitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const STitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
`;

export const SBadge = styled.span`
  background-color: #e53e3e;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  border-radius: 0.4rem;
`;

export const SBodyText = styled.p`
  font-size: 1.3rem;
  color: #555;
  line-height: 1.6;
  margin-top: 0.8rem;
  flex-grow: 1;
`;

export const SChatButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.8rem;
  padding: 1.2rem;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;