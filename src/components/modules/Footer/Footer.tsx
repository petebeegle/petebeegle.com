import ExternalLink from '@element/ExternalLink/ExternalLink';

const Footer = (): JSX.Element => (
  <footer className="p-5 text-secondary text-xs">
    <div className="flex flex-1 justify-between">
      <span className="flex tracking-wide leading-loose">
        <p>made with</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2"
          viewBox="0 0 20 20"
          fill="#EF4444"
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

      {process.env.NEXT_PUBLIC_COMMIT_ID && (
        <ExternalLink
          href={`https://github.com/petebeegle/petebeegle.com/commit/${process.env.NEXT_PUBLIC_COMMIT_ID}`}
          className="flex px-1"
          name={process.env.NEXT_PUBLIC_COMMIT_ID}
        />
      )}
    </div>
  </footer>
);

export default Footer;
