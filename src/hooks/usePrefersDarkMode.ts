import { useEffect, useState } from 'react';

/**
 * A hook to get the dark mode OS preference.
 *
 * @returns Whether the OS prefers darkmode.
 */
export const usePrefersDarkMode = (): boolean => {
  const [value, setValue] = useState(true);

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    setValue(matchMedia.matches);

    const handler = () => setValue(matchMedia.matches);
    matchMedia.addEventListener('change', handler);

    return () => matchMedia.removeEventListener('change', handler);
  }, []);

  return value;
};
