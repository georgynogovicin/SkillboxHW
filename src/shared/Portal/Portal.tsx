import React from 'react';
import {createPortal} from 'react-dom';

interface PortalProps {
  children: React.ReactNode
}

export function Portal({children}: PortalProps) {
  const node = document.querySelector('#modal');
  if (!node) return null;
  
  return (
    createPortal(children, node)
  );
}
