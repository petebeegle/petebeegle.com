import { useLocalStorage } from '@hook/useLocalStorage';
import { usePrefersDarkMode } from '@hook/usePrefersDarkMode';
import { Dispatch, SetStateAction, useEffect } from 'react';

/**
 * A hook to toggle dark mode.
 *
 * @returns A tuple with dark mode enabled and a setter to toggle the value.
 */
export const useDarkMode = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const prefersDarkMode = usePrefersDarkMode();

  const [enabled, setEnabled] = useLocalStorage<boolean>(
    'dark-mode',
    prefersDarkMode
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(enabled ? 'light' : 'dark');
    root.classList.add(enabled ? 'dark' : 'light');
  }, [enabled]);

  return [enabled, setEnabled];
};
