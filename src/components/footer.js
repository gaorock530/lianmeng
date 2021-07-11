import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {ThemeContext} from '../context/themeContext'

const content = {
  h1: {
    title: {en: 'About', zh: '关于我们'},
    l1: {en: 'About DFG', zh: 'DFG简介'},
    l2: {en: 'Our Team', zh: '团队成员'},
    l3: {en: 'Jobs', zh: '工作机会'},
    l4: {en: 'Media Kit', zh: '合作媒体'}
  },
  h2: {
    title: {en: 'Portfolio', zh: '投资组合'},
    l1: {en: 'Overview', zh: '投资简介'},
    l2: {en: 'Venture Equity Fund', zh: '股权投资基金'},
    l3: {en: 'Polkadot Ecosystem Fund', zh: 'Polkadot生态基金'},
    l4: {en: 'Crypto Fund', zh: '数字货币基金'}
  },
  h3: {
    title: {en: 'Insight', zh: '行业洞察'},
    l1: {en: 'Blog', zh: '博客'},
    l2: {en: 'Press', zh: '新闻报道'},
    l3: {en: 'DFG Club', zh: '俱乐部'}
  },
  contact: {
    title: {en: 'CONTACT US', zh: '联系我们'},
    text: {en: 'We are continuously on the lookout for refreshing ideas, business, and partnership opportunities. We invite you to contact us by submitting a business proposal and any resources that could help us to evaluate your application.', zh: '我们一直在寻找创新的观点、商业想法以及合作机会。 我们诚邀您与我们进一步探讨，共同构建区块链和Web3.0的世界。'},
    subs: {en: 'Subscribe to our newsletter', zh: '订阅我们的newsletter'},
    button: {en: 'Subscribe', zh: '订阅'}
  },
}

export default function Footer () {
  const [{language}] = useContext(ThemeContext);
  return (
    <footer>
      <div className="constained">
        <div className="grid">
          <div className="top-layer">
            <div className="bot-nav">
              <ul>
                <h4>{content.h1.title[language]}</h4>
                <li>{content.h1.l1[language]}</li>
                <li>{content.h1.l2[language]}</li>
                <li>{content.h1.l3[language]}</li>
                <li>{content.h1.l4[language]}</li>
              </ul>
              <ul>
                <h4>{content.h2.title[language]}</h4>
                <li>{content.h2.l1[language]}</li>
                <li>{content.h2.l2[language]}</li>
                <li>{content.h2.l3[language]}</li>
                <li>{content.h2.l4[language]}</li>
              </ul>
              <ul>
                <h4>{content.h3.title[language]}</h4>
                <li>{content.h3.l1[language]}</li>
                <li>{content.h3.l2[language]}</li>
                <li>{content.h3.l3[language]}</li>
              </ul>
            </div>
            <div className="bot-share">
              <img src="/images/DFGwhite-02.png" alt="" className="logo" />
              <a href="https://twitter.com/DFG_OfficiaI" referrerPolicy="no-referrer" target="_blink" ><img src="/images/home_slices/f-logo1.png" alt="" /></a>
              <a href="https://dfg-official.medium.com/" referrerPolicy="no-referrer" target="_blink" ><img src="/images/home_slices/f-logo2.png" alt="" /></a>
              <a href="https://www.youtube.com/channel/UCaLymWUyQS7l3yUH1c-D-tA" referrerPolicy="no-referrer" target="_blink" ><img src="/images/home_slices/f-logo3.png" alt="" /></a>
              <a href="https://www.linkedin.com/company/33517476" referrerPolicy="no-referrer" target="_blink" ><img src="/images/home_slices/f-logo4.png" alt="" /></a>
            </div>
          </div>
          <form className="top-layer bot-contact">
            <h3>{content.contact.title[language]}</h3>
            <p>{content.contact.text[language]}</p>
            <input type="mail" name="mail" placeholder="example@email.com"/>
            <div>
              <span>{content.contact.subs[language]}</span>
              <button>{content.contact.button[language]}</button>
            </div>
          </form>
        </div>
        <div className="grid">
          <div className="bot-term"><Link to="/agreement">TERMS & CONDITIONS&nbsp;| PRIVACY POLICY</Link></div>
          <div className="bot-rights">©2019-2021 DFG. All rights reserved.</div>
        </div>
      </div>
     
      
    </footer>
  )
}