const Footer = (): JSX.Element => (
  <footer className="p-5 bg-gray-300 dark:bg-gray-900 text-gray-600 dark:text-gray-300 text-xs">
    <div className="flex flex-1 justify-between">
      <span className="flex dark:text-white tracking-wide leading-loose">
        <p>made with</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="#de3618"
          aria-labelledby="heartTitle"
        >
          <title id="heartTitle">love</title>
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  </footer>
);

export default Footer;
