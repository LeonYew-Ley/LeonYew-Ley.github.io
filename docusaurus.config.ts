import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Yew\'s Notes Doc',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://leonyew-ley.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LeonYew-Ley', // Usually your GitHub org/user name.
  projectName: 'LeonYew-Ley.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Yew\'s Notes',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'homeSidebar',
          position: 'left',
          label: '🟢首页',
        },
        { to: '/tags/unity', label: '🎮Unity', position: 'left' },
        { to: '/tags/tech', label: '💻Coding', position: 'left' },
        { to: '/tags/tutorial', label: 'Docusaurus', position: 'right' },
        { to: '/tags/books', label: '📚读书', position: 'right' },
        { to: '/writing', label: '✒️随笔', position: 'right' },
        { to: '/ABOUTME', label: '关于我👦🏻', position: 'right' },
        {
          href: 'https://github.com/LeonYew-Ley/LeonYew-Ley.github.io',
          label: 'Repo',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '计算机基础',
          items: [
            {
              label: '数据结构与算法',
              to: '/',
            },
            {
              label: '计算机组成原理',
              to: '/',
            },
            {
              label: '操作系统',
              to: '/',
            },
            {
              label: '计算机网络',
              to: '/',
            },
          ],
        },
        {
          title: '游戏开发',
          items: [
            {
              label: 'Unity与开发算法',
              href: '/',
            },
            {
              label: 'C#',
              href: '/',
            }

          ],
        },
        {
          title: '闲书',
          items: [
            {
              label: '亲密关系',
              href: '/',
            },
            {
              label: '自控力',
              href: '/',
            }

          ],
        },
        {
          title: '更多链接',
          items: [
            {
            label: 'Unity Job 知识库',
            href: 'https://www.kdocs.cn/l/cgzgeDQkjSj9',
          },
          {
            label: 'Blog',
            href: 'https://ley.asia/',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/LeonYew-Ley',
          }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yew's Notes, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
