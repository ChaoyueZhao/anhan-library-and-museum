/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>档案文献</h5>
            <a href={this.docUrl('guo-tu.html', this.props.language)}>
              国图档案
            </a>
            <a href={this.docUrl('shan-xi.html', this.props.language)}>
              陕西档案
            </a>
            <a href={this.docUrl('nan-zheng.html', this.props.language)}>
              汉中档案
            </a>
            <a href={this.docUrl('tai-wan.html', this.props.language)}>
              台湾档案
            </a>
            <a href={this.docUrl('fa-guo.html', this.props.language)}>
              法国档案
            </a>
            <a href={this.docUrl('qin-gong.html', this.props.language)}>
              留学档案
            </a>
          </div>
          <div>
            <h5>社群</h5>
            {/* <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a> */}
            <a
              href="https://tieba.baidu.com/f?kw=%B0%B2%BA%BA/"
              target="_blank">
              百度安汉吧
            </a>
            <a href="https://discordapp.com/">QQ群</a>
            {/* <a href="https://twitter.com/" target="_blank">
              Twitter
            </a> */}
          </div>
          <div>
            <h5>更多</h5>
            <a href={this.docUrl('about.html', this.props.language)}>
              捐助
            </a>
            <a href={this.props.config.baseUrl + 'blog'}>博客</a>
            <a href="https://github.com/">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        {/* <a
          href="https://code.facebook.com/projects/"
          target="_blank"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/oss_logo.png'}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a> */}
        <section className="copyright">
          Copyright &copy; {currentYear} 安汉纪念馆
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
