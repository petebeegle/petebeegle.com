import { useComponentDidMount } from '@hook/useComponentDidMount';
import useTheme from 'next-theme';

const MoonIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const SunIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const DarkModeToggle = (): JSX.Element => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const loaded = useComponentDidMount();
  const switchTheme = () => {
    if (loaded) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return loaded ? (
    <button
      id="toggleDarkMode"
      className={`w-10 h-10 curser-pointer flex items-center justify-center text-primary`}
      onClick={switchTheme}
      title={`toggle ${theme} mode`}
    >
      {isDarkMode ? <MoonIcon /> : <SunIcon />}
    </button>
  ) : (
    <div className="w-10 h-10" />
  );
};

export default DarkModeToggle;
