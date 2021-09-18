import Link from 'next/link';

type Props = {
  href: string;
  name: string;
  className?: string;
};

const ExternalLink = ({ href, name, className }: Props): JSX.Element => (
  <span className={className ? className : 'px-1'}>
    <Link href={href}>
      <a className="flex justify-center items-center px-3 hover:underline text-secondary">
        <span className="tracking-wide">{name}</span>
        <span className="px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </span>
      </a>
    </Link>
  </span>
);

export default ExternalLink;
