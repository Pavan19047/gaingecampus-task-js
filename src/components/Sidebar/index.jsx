import React from 'react';
import { SSidebar, SSidebarButton, SSidebarOptions, SSidebarOptionButton } from './styled';

const Sidebar = () => {
  const handleClick = (action) => {
    console.log(`${action} clicked`);
  };

  return (
    <SSidebar>
      <div>
        <SSidebarButton onClick={() => handleClick('Chat 1')}>
          Previous Chat Item 1
        </SSidebarButton>
        <SSidebarButton onClick={() => handleClick('Chat 2')}>
          Previous Chat Item 2
        </SSidebarButton>
      </div>
      <SSidebarOptions>
        <SSidebarOptionButton onClick={() => handleClick('Edit')}>Edit</SSidebarOptionButton>
        <SSidebarOptionButton onClick={() => handleClick('Delete')}>Delete</SSidebarOptionButton>
      </SSidebarOptions>
    </SSidebar>
  );
};

export default Sidebar;
