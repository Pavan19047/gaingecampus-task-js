// src/components/Sidebar/data.jsx

import React from 'react';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { AiOutlineRobot } from 'react-icons/ai';
// The line below is the corrected one
import { FaRegFolder, FaFolderPlus } from 'react-icons/fa';

export const pinnedItems = [
  { id: 1, text: '가인치캠퍼스', icon: <HiOutlineOfficeBuilding /> },
  { id: 2, text: 'AI 컨설턴트', icon: <AiOutlineRobot /> },
  { id: 3, text: '[{김경민}] 컨설턴트', icon: 'avatar', badge: 'N' },
];

export const folderItems = [
  // This now uses the correct FaFolderPlus icon
  { id: 1, text: '새 폴더', icon: <FaFolderPlus /> },
  { id: 2, text: '{폴더명}', icon: <FaRegFolder /> },
  { id: 3, text: '{폴더명}', icon: <FaRegFolder /> },
];