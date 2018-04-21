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
                width="300"
                height="100"
              />
            )}
          </a>
          <div>
            <h5>档案文献</h5>
            <a href={this.docUrl('guo-tu.html', this.props.language)}>
              馆藏档案
            </a>
            <a href={this.docUrl('shu-ji.html', this.props.language)}>
              安汉著作
            </a>
            <a href={this.docUrl('jia-pu.html', this.props.language)}>
              民间资料
            </a>
          </div>
          <div>
            <h5>社群</h5>
            {/* <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a> */}
            <a href={this.props.config.baseUrl + 'blog'}>博客</a>
            <a
              href="https://tieba.baidu.com/f?kw=%B0%B2%BA%BA/"
              target="_blank">
              安汉吧
            </a>
            <a href="https://jq.qq.com/?_wv=1027&k=5AZi1R4">QQ群</a>
            {/* <a href="https://twitter.com/" target="_blank">
              Twitter
            </a> */}
          </div>
          <div>
            <h5>更多</h5>
            <a href={this.docUrl('about.html', this.props.language)}>
              关于
            </a>
            <a href="mailto:me@zhaochaoyue.com">投稿</a>
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
          Copyright &copy; {currentYear} 安汉纪念馆 - Made with <i style={{color: '#ec1625'}}>❤</i> by <a href="http://www.zhaochaoyue.com" target="_blank" style={{color: 'rgba(255, 255, 255, 0.6)'}}>赵超越</a>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
