// hooks/useDevtools.ts (or .js if you're not using TypeScript)
import { useCallback, useEffect, useState } from 'react';

const DEBUG_KEY = 'debugMode';

export function useDevtools() {
  const [isEnabled, setIsEnabled] = useState(() => {
    return localStorage.getItem(DEBUG_KEY) === 'true';
  });

  // Sync with localStorage
  useEffect(() => {
    const handleStorage = () => {
      setIsEnabled(localStorage.getItem(DEBUG_KEY) === 'true');
    };
    
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const enable = useCallback(() => {
    localStorage.setItem(DEBUG_KEY, 'true');
    setIsEnabled(true);
  }, []);

  const disable = useCallback(() => {
    localStorage.setItem(DEBUG_KEY, 'false');
    setIsEnabled(false);
  }, []);

  const toggle = useCallback(() => {
    const newState = !isEnabled;
    localStorage.setItem(DEBUG_KEY, String(newState));
    setIsEnabled(newState);
  }, [isEnabled]);

  return {
    isDevtoolsEnabled: isEnabled,
    enableDevtools: enable,
    disableDevtools: disable,
    toggleDevtools: toggle,
  };
}


function setDebugMode(value: boolean) {
  localStorage.setItem(DEBUG_KEY, value ? 'true' : 'false');
  window.dispatchEvent(new Event('storage'));
}

function enableDebugMode() {
  setDebugMode(true);
}

function disableDebugMode() {
  setDebugMode(false);
}

function toggleDevtools() {
  const current = localStorage.getItem(DEBUG_KEY) === 'true';
  setDebugMode(!current);
}



// Expose globally
window.enableDebugMode = enableDebugMode;
window.disableDebugMode = disableDebugMode;
window.toggleDevtools = toggleDevtools;