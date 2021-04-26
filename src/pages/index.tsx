import Head from 'next/head';
import { DarkModeToggle } from '../components/darkModeToggle';
import { ExternalLink } from '../components/externalLink';

export default function Home() {
  return (
    <div>
      <Head>
        <title>pete beegle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="top-0 right-0 flex justify-end p-5">
        <DarkModeToggle />
      </div>

      <main className="flex items-center justify-center py-5 flex-1 flex-col">
        <h1 className="text-gray-900 dark:text-white font-semibold text-6xl tracking-wide leading-loose">
          pete beegle
        </h1>
        <div className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
          <ExternalLink
            className="px-1"
            href="https://github.com/petebeegle"
            name="github"
          />
          <ExternalLink
            className="px-1"
            href="https://gitlab.com/petebeegle"
            name="gitlab"
          />
          <ExternalLink
            className="px-1"
            href="https://www.linkedin.com/in/pete-beegle/"
            name="linkedin"
          />
        </div>
      </main>
    </div>
  );
}
