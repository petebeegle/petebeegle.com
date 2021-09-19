import ExternalLink from '@element/ExternalLink/ExternalLink';
import DefaultLayout from '@layout/DefaultLayout';

const HomePage = (): JSX.Element => (
  <DefaultLayout>
    <div className="flex items-center justify-center py-5 flex-1 flex-col">
      <h1 id="banner" className="tracking-wide leading-loose">
        pete beegle
      </h1>
      <div className="flex items-center justify-center">
        <ExternalLink
          href="https://github.com/petebeegle"
          className="px-3"
          name="github"
        />
        <ExternalLink
          href="https://gitlab.com/petebeegle"
          className="px-3"
          name="gitlab"
        />
        <ExternalLink
          href="https://www.linkedin.com/in/pete-beegle/"
          className="px-3"
          name="linkedin"
        />
      </div>
    </div>
  </DefaultLayout>
);

export default HomePage;
