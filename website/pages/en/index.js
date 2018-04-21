/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        {/* <Logo img_src={imgUrl('docusaurus.svg')} /> */}
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('guo-tu.html', language)}>查看资料</Button>
            <Button href={docUrl('about.html#捐助本站', language)}>捐助</Button>
            {/* <Button href={docUrl('doc2.html', language)}>Example Link 2</Button>  */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: '提供海量档案文献在线阅览和免费下载，<br/>独家揭秘法国和台湾的珍贵档案',
        image: imgUrl('jie-mi.svg'),
        imageAlign: 'top',
        title: '档案解密',
      },
      {
        content: '最权威的安汉研究数据库，收录文章包括<br/>学术论文，回忆录，纪念文章和文学作品等',
        image: imgUrl('yan-jiu.svg'),
        imageAlign: 'top',
        title: '安汉研究',
      },
    ]}
  </Block>
);

// const FeatureCallout = props => (
//   <div
//     className="productShowcaseSection paddingBottom"
//     style={{textAlign: 'center'}}>
//     <h2>Feature Callout</h2>
//     <MarkdownBlock>These are features of this project</MarkdownBlock>
//   </div>
// );

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: '<p style="text-align: left">基于本站资源完成的学术论文《安汉生平事迹考略》，即将发表于《渭南师范学院学报》2018年第8期。本站将提供免费阅读，敬请期待。',
        image: imgUrl('paper.svg'),
        imageAlign: 'right',
        title: '喜讯',
      },
    ]}
  </Block>
);

// const TryOut = props => (
//   <Block id="try">
//     {[
//       {
//         content: 'Talk about trying this out',
//         image: imgUrl('docusaurus.svg'),
//         imageAlign: 'left',
//         title: 'Try it Out',
//       },
//     ]}
//   </Block>
// );

// const Description = props => (
//   <Block background="dark">
//     {[
//       {
//         content: 'This is another description of how this project is useful',
//         image: imgUrl('docusaurus.svg'),
//         imageAlign: 'right',
//         title: 'Description',
//       },
//     ]}
//   </Block>
// );

// const Showcase = props => {
//   if ((siteConfig.users || []).length === 0) {
//     return null;
//   }
//   const showcase = siteConfig.users
//     .filter(user => {
//       return user.pinned;
//     })
//     .map((user, i) => {
//       return (
//         <a href={user.infoLink} key={i}>
//           <img src={user.image} title={user.caption} />
//         </a>
//       );
//     });

//   return (
//     <div className="productShowcaseSection paddingBottom">
//       <h2>{"Who's Using This?"}</h2>
//       <p>This project is used by all these people</p>
//       <div className="logos">{showcase}</div>
//       <div className="more-users">
//         <a className="button" href={pageUrl('users.html', props.language)}>
//           More {siteConfig.title} Users
//         </a>
//       </div>
//     </div>
//   );
// };

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <LearnHow />
          {/* <Showcase language={language} /> */}
          {/* <FeatureCallout />
          
          <TryOut />
          <Description />
           */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
