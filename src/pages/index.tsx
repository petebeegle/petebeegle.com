import ExternalLink from '@element/ExternalLink/ExternalLink';
import DefaultLayout from '@layout/DefaultLayout';

const HomePage = (): JSX.Element => (
  <DefaultLayout>
    <div className="flex items-center justify-center py-5 flex-1 flex-col">
      <h1 className="text-gray-900 dark:text-white font-semibold text-6xl tracking-wide leading-loose">
        pete beegle
      </h1>
      <div className="flex items-center justify-center">
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
    </div>
  </DefaultLayout>
);

export default HomePage;
