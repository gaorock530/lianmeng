import { useContext } from 'react'
import {ThemeContext} from '../context/themeContext'

const content = {
  h1: {
    en: 'An Investment Firm Focused On Empowering Blockchain And Web3.0.',
    zh: '一家专注于赋能区块链和Web3.0的投资机构'
  },
  h2: {
    title: {en :'WHO IS DFG', zh: 'DFG简介'},
    p1: {
      en: 'Digital Finance Group (DFG) is a global blockchain and cryptocurrency investment firm. DFG was founded in 2015 and has assets under management of over $1 billion.',
      zh: 'DFG是一家全球化的区块链和数字资产投资机构，成立于2015年，管理着超过10亿美元的资产。'
    },
    p2: {
      en: 'DFG has a professional investment and research team that focuses on the discovery and creation of value through analytical research based on the most impactful and promising global blockchain and Web3.0 projects that will bring a paradigm shift to the world.',
      zh: 'DFG拥有专业的投资和研究团队，专注于分析研究最具影响力和前景的全球区块链和Web3.0项目，从中发现和创造价值，引起范式转移。'
    }
  },
  h3: {
    p1: {
      title: {en: 'INDUSTRY BUILDER', zh: '行业引领者'},
      text: {en: 'DFG promotes laying out the foundation of blockchain and Web3.0, by investing in promising solutions and empowering their growth.', zh: 'DFG通过投资有前景的解决方案并赋能其发展，从而推动区块链和Web3.0的基础建设。'}
    },
    p2: {
      title: {en: 'DIVERSIFIED INVESTMENTS', zh: '多元化投资'},
      text: {en: 'DFG has diversified investments in blockchain and Web 3.0, including CeFi, DeFi, NFTs, the Polkadot ecosystem, among others.', zh: 'DFG对区块链和Web 3.0进行了多元化投资，包括CeFi、DeFi、NFTs、Polkadot生态等。'}
    },
    p3: {
      title: {en: 'LONG-TERM VALUE', zh: '长期投资者'},
      text: {en: 'DFG provides comprehensive support to its portfolio projects through business consultancy, resources, and engagement with a broader community to help create long-term value.', zh: 'DFG为项目提供全面支持助力其长期发展，包括但不限于商业咨询、资源对接以及构建社区合作等。'}
    }
  },
  h4: {
    title: {en: 'PORTFOLIO', zh: '投资组合'},
    p1: {en: 'Venture Equity Fund', zh: '股权投资基金'},
    p2: {en: 'Polkadot Ecosystem Fund', zh: 'Polkadot生态基金'},
    p3: {en: 'Crypto Fund', zh: '数字货币基金'},
  },
  h5: {
    title: {en: 'DFG INSIGHT', zh: '行业洞察'}
  }
}

export default function Home () {
  const [{language}] = useContext(ThemeContext);

  return (
    <div className="homepage">
      <section className="sec-1">
        <p>{content.h1[language]}</p>
      </section>
      <section className="constained sec-2">
        <div className="who">
          <div className="city-text">
            <h3>{content.h2.title[language]}</h3>
            <p>{content.h2.p1[language]}</p>
            <p>{content.h2.p2[language]}</p>
          </div>
          <div>
            <img className="city" src="images/home_slices/city-336708_1920@2x.png" alt=""/>
            <div className="city-bar"></div>
          </div>
        </div>
        <ul>
          <li>
            <h4>{content.h3.p1.title[language]}</h4>
            <p>{content.h3.p1.text[language]}</p>
          </li>
          <li>
            <h4>{content.h3.p2.title[language]}</h4>
            <p>{content.h3.p2.text[language]}</p>
          </li>
          <li>
            <h4>{content.h3.p3.title[language]}</h4>
            <p>{content.h3.p3.text[language]}</p>
          </li>

         
        </ul>
        
        <img className="edge" src="images/home_slices/OUR EDGE@2x.png" alt="" />
      </section>
      <section className="constained sec-3">
        <div className="content">
          <h1>{content.h4.title[language]}</h1>
          <ul>
            <li>{content.h4.p1[language]}</li>
            <li>{content.h4.p2[language]}</li>
            <li>{content.h4.p3[language]}</li>
          </ul>
        </div>
      </section>
      <section className="sec-4">
        <h1 className="constained">{content.h5.title[language]}</h1>
        <div className="blocks">
          <div className="b1">
            <img src="images\home_slices\b2.png" alt="" />
            <p>
                   established a 20 million Polkadot Ecological Fund in 2020, which market value has now exceeded $500 million.Because we agree with Polkadot's design philosophy and work together to solve problems that affect technology scenarios in different industries. DFG has a heavy position in Polkadot and will hold it for a long time.
            </p>
          </div>
          <div className="b2">
            <img src="images\home_slices\b3.png" alt="" />
            <p>
                   established a 20 million Polkadot Ecological Fund in 2020, which market value has now exceeded $500 million.Because we agree with Polkadot's design philosophy and work together to solve problems that affect technology scenarios in different industries. DFG has a heavy position in Polkadot and will hold it for a long time.
            </p>
          </div>
          <div className="b3">
            <img src="images\home_slices\b4.png" alt="" />
            <p>
                   established a 20 million Polkadot Ecological Fund in 2020, which market value has now exceeded $500 million.Because we agree with Polkadot's design philosophy and work together to solve problems that affect technology scenarios in different industries. DFG has a heavy position in Polkadot and will hold it for a long time.
            </p>
          </div>
          <div className="b4">
            <img src="images\home_slices\b5.png" alt="" />
            <p>
                   established a 20 million Polkadot Ecological Fund in 2020, which market value has now exceeded $500 million.Because we agree with Polkadot's design philosophy and work together to solve problems that affect technology scenarios in different industries. DFG has a heavy position in Polkadot and will hold it for a long time.
            </p>
          </div>
          <div className="b5">
            <img src="images\home_slices\b6.png" alt="" />
            <p>
                   established a 20 million Polkadot Ecological Fund in 2020, which market value has now exceeded $500 million.Because we agree with Polkadot's design philosophy and work together to solve problems that affect technology scenarios in different industries. DFG has a heavy position in Polkadot and will hold it for a long time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}