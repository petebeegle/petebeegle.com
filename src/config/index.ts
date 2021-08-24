import { DefaultSeoProps } from 'next-seo';

export const SEO: DefaultSeoProps = {
  defaultTitle: 'pete beegle',
  description: 'i am a software developer',
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
  ],
};
