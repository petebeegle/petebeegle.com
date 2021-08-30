import DefaultLayout from '@layout/DefaultLayout';
import { SEO } from 'config';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = (): JSX.Element => (
  <DefaultLayout>
    <NextSeo {...SEO} noindex={true} nofollow={true} title="not found" />
    <div className="flex items-center justify-center flex-1 flex-col">
      <Image
        className="flex-1"
        src="/404.gif"
        layout="fixed"
        width={426}
        height={212}
        alt="Not Found"
      />
      <div className="flex items-center justify-center flex-col">
        <p className="mb-24 mt-8 text-2xl font-medium text-center">
          I think we should be leaving now.
        </p>
        <Link href="/" passHref>
          <a
            id="home"
            className="btn bg-gradient-to-r from-indigo-700 to-blue-500 bg-200 bg-left hover:bg-right transition-all duration-[0.5s] ease-out leading-loose tracking-wide px-16"
          >
            Take me home
          </a>
        </Link>
      </div>
    </div>
  </DefaultLayout>
);

export default NotFound;
