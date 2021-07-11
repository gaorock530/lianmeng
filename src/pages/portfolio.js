import { useContext } from 'react'
import {ThemeContext} from '../context/themeContext'

const content = {
  s1: {
    title: {en: 'PORTFOLIO', zh: '投资简介'},
    p1: {
      en: 'As a project growth partner, DFG has long been committed to empowering and supporting industry startups. DFG focuses on major areas, such as CeFi, DeFi, NFTs, and Web3.0, while continuously exploring investment opportunities in a booming market.',
      zh: '作为项目的战略合作伙伴，DFG长期致力于为行业初创企业提供一系列资源支持以及发展指导。DFG专注于CeFi、DeFi、NFTs、Web3.0等主要领域，并在蓬勃发展的市场中不断探索投资机会。'
    },
    p2: {
      en: 'Therefore, DFG has set up three strategically dedicated funds. A Venture Equity Fund that follows traditional methods of investment in valuable CeFi service providers, a Polkadot Ecosystem Fund that empowers its Web3.0 innovation, and a Crypto Fund that invests in promising solutions at an early stage.',
      zh: '目前DFG设有三支专项基金，分别为：1）对行业领先CeFi服务提供商进行传统投资的股权投资基金；2）赋能Web3.0创新的Polkadot生态基金；3）投资优质项目早期阶段的数字货币基金。'
    }
  },
  s2: {
    title: {en: 'VENTURE EQUITY FUND', zh: '股权投资基金'},
    p1: {
      en: 'DFG manages a venture fund that invests, in a traditional way, in equity of leading virtual asset service providers, including LedgerX, Amber Group, and Matrix Exchange, as well as Circle, the creator of USDC.',
      zh: 'DFG管理的股权投资基金，投资了众多领先的CeFi服务提供商，包括LedgerX, Amber Group，Matrix，以及USDC的发行方Circle等。'
    }
  },
  s3: {
    title1: {en: 'POLKADOT', zh: 'POLKADOT'},
    title2: {en: 'ECOSYSTEM FUND', zh: '生态基金'},
    
    p1: {
      en: 'In 2018, DFG began to acquire DOT, the native token of the Polkadot network, with a clear understanding of its potential by combining blockchain and Web3.0.',
      zh: '2018年起，DFG开始投资DOT，因为DFG坚信Polkadot是区块链和Web3.0的完美结合。'
    },
    p2: {
      en: 'In 2020, DFG established the Polkadot Ecosystem Fund with $20 million focused on empowering startups to develop the Polkadot ecosystem. Additionally, DFG is honored to be an important member of the Polkastarter Governance Committee, and a Huobi Polkadot sponsor.',
      zh: '2021年，DFG投资2000万美元设立Polkadot生态基金，该基金专注于投资赋能Polkadot生态的初创企业。DFG是Polkastarter理事会成员，火币Polkadot生态保荐人，以及ZenlinkDAO 初始治理委员会成员。'
    }
  },
  s4: {
    title: {en: 'CRYPTO FUNDT', zh: '数字货币基金'},
    p1: {
      en: 'DFG’s portfolio includes an actively managed trading fund that has earned over 600% in returns, by investing in top-tier solutions at an early stage in a wide variety of blockchain sectors.',
      zh: '数字货币基金是一支主动管理型交易基金，主要在早期阶段投资行业的优质解决方案，已获得超过600%的投资回报。'
    }
  },
}

export default function Portfolio () {
  const [{language}] = useContext(ThemeContext);
  return (
    <div className="portfoliopage">
      <section className="sec-1">
        <div className="limit">
          <h1>{content.s1.title[language]}</h1>
          <div className="para">
            <p>{content.s1.p1[language]}</p>
            <p>{content.s1.p2[language]}</p>
          </div>
        </div>
        
      </section>

      <section className="sec-2">
        <div className="small">
          <h1>{content.s2.title[language]}</h1>
          <p>{content.s2.p1[language]}</p>
        </div>
        <div className="mid">
          <div className="limit logos">
            <img alt="" src="/images/portfolio/1LedgerX.png" />
            <img alt="" src="/images/portfolio/2ss.png" />
            <img alt="" src="/images/portfolio/3Amber.png" />
            <img alt="" src="/images/portfolio/4Black Type.png" />
          </div>
        </div>
        <div className="limit grid">
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/brave.58a4cee9.png" /></li>
          <li><img alt="" src="/images/portfolio/24unocoin.1b3bacb4.png" /></li>
          <li><img alt="" src="/images/portfolio/25centre.b8a412b2.png" /></li>
          <li><img alt="" src="/images/portfolio/26creditDream.fc062d82.png" /></li>
          <li><img alt="" src="/images/portfolio/27yours.bce17858.png" /></li>
          <li><img alt="" src="/images/portfolio/28bloq.20adc02b.png" /></li>
          <li><img alt="" src="/images/portfolio/29bitquery.7a40be13.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/WeChat Image_20210203150632.png" style={{"height": "60%"}} /></li>

        </div>
      </section>
      <section className="sec-3">
        <div className="small">
          <h1>{content.s3.title1[language]}</h1>
          <h1>{content.s3.title2[language]}</h1>
          <p>{content.s3.p1[language]}</p>
          <p>{content.s3.p2[language]}</p>
        </div>
        <div className="mid">
          <div className="limit logos">
            <img alt="" src="/images/portfolio/Acala.png" />
            <img alt="" src="/images/portfolio/2ss.png" />
            <img alt="" src="/images/portfolio/Manta Website.png" />
            <img alt="" src="/images/portfolio/Reef Finance Logo.png" />
          </div>
          <div className="limit logos">
            <img alt="" src="/images/portfolio/HydraDX Website.png" />
            <img alt="" src="/images/portfolio/Equilbrium.png" />
            <img alt="" src="/images/portfolio/WechatIMG4024.png" />
            <img alt="" src="/images/portfolio/121.png" />
          </div>
        </div>
        <div className="limit grid">
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/brave.58a4cee9.png" /></li>
          <li><img alt="" src="/images/portfolio/24unocoin.1b3bacb4.png" /></li>
          <li><img alt="" src="/images/portfolio/25centre.b8a412b2.png" /></li>
          <li><img alt="" src="/images/portfolio/26creditDream.fc062d82.png" /></li>
          <li><img alt="" src="/images/portfolio/27yours.bce17858.png" /></li>
          <li><img alt="" src="/images/portfolio/28bloq.20adc02b.png" /></li>
          <li><img alt="" src="/images/portfolio/29bitquery.7a40be13.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/WeChat Image_20210203150632.png" style={{"height": "60%"}} /></li>
          <li><img alt="" src="/images/portfolio/WeChat Image_20210203150632.png" style={{"height": "60%"}} /></li>
          <li><img alt="" src="/images/portfolio/WeChat Image_20210203150632.png" style={{"height": "60%"}} /></li>
          <li><img alt="" src="/images/portfolio/WeChat Image_20210203150632.png" style={{"height": "60%"}} /></li>

        </div>

      </section>
      <section className="sec-4">
        <div className="small">
          <h1>{content.s4.title[language]}</h1>
          <p>{content.s4.p1[language]}</p>
        </div>
        <div className="mid">
          <div className="limit logos">
            <img alt="" src="/images/portfolio/Acala.png" />
            <img alt="" src="/images/portfolio/2ss.png" />
            <img alt="" src="/images/portfolio/Manta Website.png" />
            <img alt="" src="/images/portfolio/Reef Finance Logo.png" />
          </div>
          <div className="limit logos">
            <img alt="" src="/images/portfolio/HydraDX Website.png" />
            <img alt="" src="/images/portfolio/Equilbrium.png" />
            <img alt="" src="/images/portfolio/WechatIMG4024.png" />
            <img alt="" src="/images/portfolio/121.png" />
          </div>
        </div>
        <div className="limit grid">
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/brave.58a4cee9.png" /></li>
          <li><img alt="" src="/images/portfolio/24unocoin.1b3bacb4.png" /></li>
          <li><img alt="" src="/images/portfolio/25centre.b8a412b2.png" /></li>
          <li><img alt="" src="/images/portfolio/26creditDream.fc062d82.png" /></li>
          <li><img alt="" src="/images/portfolio/27yours.bce17858.png" /></li>
          <li><img alt="" src="/images/portfolio/28bloq.20adc02b.png" /></li>
          <li><img alt="" src="/images/portfolio/29bitquery.7a40be13.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/WeChat Image_20210203150632.png" style={{"height": "60%"}} /></li>
          <li><img alt="" src="/images/portfolio/WeChat Image_20210203150632.png" style={{"height": "60%"}} /></li>
          <li><img alt="" src="/images/portfolio/WeChat Image_20210203150632.png" style={{"height": "60%"}} /></li>
          <li><img alt="" src="/images/portfolio/WeChat Image_20210203150632.png" style={{"height": "60%"}} /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
          <li><img alt="" src="/images/portfolio/ripio.3e3f4633.png" /></li>
        </div>

      </section>
    </div>
  )
}