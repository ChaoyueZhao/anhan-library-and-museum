/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: '赵超越',
    image: '/test-site/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: '安汉纪念馆' /* title for your website */,
  tagline: '民国农垦专家、西北开发先行者安汉先生图文资料库',
  url: 'https://chaoyuezhao.github.io' /* your website url */,
  baseUrl: '/anhan-library-and-museum' /* base url for your project */,
  projectName: 'anhan-library-and-museum',
  organizationName: 'ChaoyueZhao',
  headerLinks: [
    {doc: 'guo-tu', label: '史料'},
    {blog: true, label: '博客'},
    {doc: 'about', label: '关于'},

  ],
  users,
  /* path to images for header/footer */
  // headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/footer-logo.png',
  favicon: 'img/favicon.jpg',
  /* colors for website */
  colors: {
    primaryColor: '#0288d1',
    secondaryColor: '#205C3B',
  },
  blogSidebarCount: 'ALL',
  algolia: {
    apiKey: "942be48f3800a102b7796ed6ffce425d",
    indexName: "anhan"
  },
  onPageNav: 'separate',
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    '安汉纪念馆',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/ChaoyueZhao/anhan-library-and-museum',
  /* On page navigation for the current documentation page */
  // onPageNav: 'separate',
};



module.exports = siteConfig;
