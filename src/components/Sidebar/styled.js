import styled from 'styled-components';

export const SSidebar = styled.aside`
  background-color: #f8f9fa;
  padding: 2rem;
  width: 28rem;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const SSidebarButton = styled.button`
  width: 100%;
  padding: 1.2rem 1.5rem;
  margin-bottom: 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.8rem;
  cursor: pointer;
  text-align: left;
  font-size: 1.4rem;
  transition: background-color 0.2s, box-shadow 0.2s;

  &:hover {
    background-color: #f0f0f0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  &:active {
    background-color: #e0e0e0;
  }
`;

export const SSidebarOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e0e0e0;
`;

export const SSidebarOptionButton = styled.button`
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  font-size: 1.4rem;

  &:hover {
    color: #007bff;
    text-decoration: underline;
  }
`;
