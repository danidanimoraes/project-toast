import React from 'react';

export const useEscapeKey = (escapeAction) => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if(e.code === 'Escape'){
        escapeAction();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [escapeAction])
}