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
            <img alt="" src="/images/portfolio/11.png" />
            <img alt="" src="/images/portfolio/12.png" />
            <img alt="" src="/images/portfolio/13.png" />
            <img alt="" src="/images/portfolio/14.png" />
          </div>
        </div>
        <div className="limit grid">
          <li><img alt="" src="/images/portfolio/21.png" /></li>
          <li><img alt="" src="/images/portfolio/22.png" /></li>
          <li><img alt="" src="/images/portfolio/23.png" /></li>
          <li><img alt="" src="/images/portfolio/24.png" /></li>
          <li><img alt="" src="/images/portfolio/25.png" /></li>
          <li><img alt="" src="/images/portfolio/31.png" /></li>
          <li><img alt="" src="/images/portfolio/32.png" /></li>
          <li><img alt="" src="/images/portfolio/33.png" /></li>
          <li><img alt="" src="/images/portfolio/34.png" /></li>
          <li><img alt="" src="/images/portfolio/35.png" /></li>
          <li><img alt="" src="/images/portfolio/41.svg" /></li>
          <li><img alt="" src="/images/portfolio/42.png" /></li>
          <li><img alt="" src="/images/portfolio/43.png" /></li>
          <li><img alt="" src="/images/portfolio/44.png" /></li>
          <li><img alt="" src="/images/portfolio/45.png" /></li>
          <li><img alt="" src="/images/portfolio/51.png" style={{"height": "60%"}} /></li>

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
            <img alt="" src="/images/portfolio/61.png" />
            <img alt="" src="/images/portfolio/62.png" />
            <img alt="" src="/images/portfolio/63.png" />
            <img alt="" src="/images/portfolio/64.png" />
          </div>
          <div className="limit logos">
            <img alt="" src="/images/portfolio/71.png" />
            <img alt="" src="/images/portfolio/72.png" />
            <img alt="" src="/images/portfolio/73.png" />
            <img alt="" src="/images/portfolio/74.png" />
          </div>
        </div>
        <div className="limit grid">
          <li><img alt="" src="/images/portfolio/81.png" /></li>
          <li><img alt="" src="/images/portfolio/82.png" /></li>
          <li><img alt="" src="/images/portfolio/83.svg" /></li>
          <li><img alt="" src="/images/portfolio/84.png" /></li>
          <li><img alt="" src="/images/portfolio/85.png" /></li>
          <li><img alt="" src="/images/portfolio/91.png" /></li>
          <li><img alt="" src="/images/portfolio/92.png" /></li>
          <li><img alt="" src="/images/portfolio/93.png" /></li>
          <li><img alt="" src="/images/portfolio/94.png" /></li>
          <li><img alt="" src="/images/portfolio/95.webp" /></li>
          <li><img alt="" src="/images/portfolio/101.png" /></li>
          <li><img alt="" src="/images/portfolio/102.png" style={{"height": "60%"}} /></li>
          <li><img alt="" src="/images/portfolio/103.png" /></li>
          <li><img alt="" src="/images/portfolio/104.png" /></li>
          <li><img alt="" src="/images/portfolio/105.png" /></li>
          <li><img alt="" src="/images/portfolio/111.png" /></li>
          <li><img alt="" src="/images/portfolio/112.png" /></li>
          <li><img alt="" src="/images/portfolio/113.png" /></li>
          <li><img alt="" src="/images/portfolio/114.png" style={{"height": "60%"}} /></li>

        </div>

      </section>
      <section className="sec-4">
        <div className="small">
          <h1>{content.s4.title[language]}</h1>
          <p>{content.s4.p1[language]}</p>
        </div>
        <div className="mid">
          <div className="limit logos">
            <img alt="" src="/images/portfolio/121.png" />
            <img alt="" src="/images/portfolio/122.png" />
            <img alt="" src="/images/portfolio/123.png" />
            <img alt="" src="/images/portfolio/124.png" />
          </div>
          <div className="limit logos">
            <img alt="" src="/images/portfolio/131.png" />
            <img alt="" src="/images/portfolio/132.png" />
            <img alt="" src="/images/portfolio/133.png" />
            <img alt="" src="/images/portfolio/134.png" />
          </div>
        </div>
        <div className="limit grid">
          <li><img alt="" src="/images/portfolio/141.png" style={{"height": "60%"}} /></li>
          <li><img alt="" src="/images/portfolio/142.png" /></li>
          <li><img alt="" src="/images/portfolio/143.png" /></li>
          <li><img alt="" src="/images/portfolio/144.png" /></li>
          <li><img alt="" src="/images/portfolio/145.png" /></li>
          <li><img alt="" src="/images/portfolio/151.png" /></li>
          <li><img alt="" src="/images/portfolio/152.png" /></li>
          <li><img alt="" src="/images/portfolio/153.svg" /></li>
          <li><img alt="" src="/images/portfolio/154.png" /></li>
          <li><img alt="" src="/images/portfolio/155.png" /></li>
          <li><img alt="" src="/images/portfolio/161.png" /></li>
          <li><img alt="" src="/images/portfolio/162.png" /></li>
          <li><img alt="" src="/images/portfolio/163.svg" /></li>
          <li><img alt="" src="/images/portfolio/164.jpg" /></li>
          <li><img alt="" src="/images/portfolio/165.png" /></li>
          <li><img alt="" src="/images/portfolio/171.svg" /></li>
          <li><img alt="" src="/images/portfolio/172.png" /></li>
          <li><img alt="" src="/images/portfolio/173.png" /></li>
          <li><img alt="" src="/images/portfolio/174.svg" style={{"height": "60%"}} /></li>
          <li><img alt="" src="/images/portfolio/175.png" /></li>
          <li><img alt="" src="/images/portfolio/181.png" /></li>
          <li><img alt="" src="/images/portfolio/182.svg" /></li>
          <li><img alt="" src="/images/portfolio/183.png" /></li>
          <li><img alt="" src="/images/portfolio/184.svg" /></li>
          <li><img alt="" src="/images/portfolio/185.svg" style={{"height": "60%"}} /></li>

        </div>

      </section>
    </div>
  )
}