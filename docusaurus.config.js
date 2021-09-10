const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Docusaurus Test Site',
  tagline: 'Good documentation',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: process.env.BASE_URL || '/',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.json')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Markdown',
              to: '/docusaurus/markdown',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} My Project`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  
};
