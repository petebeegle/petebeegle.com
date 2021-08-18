import DarkModeToggle from '@element/DarkModeToggle/DarkModeToggle';

const Header = (): JSX.Element => (
  <div className="flex justify-end p-5">
    <DarkModeToggle />
  </div>
);

export default Header;
