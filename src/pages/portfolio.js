import { useContext, useEffect } from 'react'
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
    title: {en: 'CRYPTO FUND', zh: '数字货币基金'},
    p1: {
      en: 'DFG’s portfolio includes an actively managed trading fund that has earned over 600% in returns, by investing in top-tier solutions at an early stage in a wide variety of blockchain sectors.',
      zh: '数字货币基金是一支主动管理型交易基金，主要在早期阶段投资行业的优质解决方案，已获得超过600%的投资回报。'
    }
  },
}

const links = [
  ['https://www.ledgerx.com/', 'https://www.circle.com/en/', 'https://www.ambergroup.io', 'https://www.matrix.co/'],
  ['https://www.ripio.com/', 'https://brave.com/', 'https://www.unocoin.com/in', 'https://purse.io/shop', 'https://www.circle.com/en/'],
  ['http://www.creditdream.co/', 'https://www.yours.org/', 'https://www.bloq.com/', 'https://bitquery.io/', 'https://titan.io/'],
  ['https://bigtime.gg/', 'https://cryptoart.ai/', 'https://www.fvbank.us/#/home', 'https://chainsafe.io/', 'https://bitquery.io/'],
  ['https://www.rsk.co/', '', '', '', ''],
  
  ['https://acala.network/', 'https://www.plasmnet.io/', 'https://manta.network/', 'https://reef.finance/', ''],
  ['https://hydradx.io/', 'https://equilibrium.io/zh', 'https://usetech.com/', 'https://bit.country/', ''],
  ['https://www.t3rn.io/', 'https://apron.pro/', 'https://efinity.io/', 'https://rmrk.app/', 'https://www.ternoa.com/'],
  ['https://subquery.network/', 'https://zenlink.pro/zh/', 'https://standard.tech/', 'https://www.ethalend.org/', 'https://minterest.com/'],
  ['https://www.konomi.network/', 'https://tidal.finance/', 'https://protocol.fractal.id/', 'http://parami.io/', 'https://integritee.network/'],
  ['https://zcloak.network/', 'https://hackerlink.io/', 'https://www.subdao.network/', 'https://linktr.ee/zeitgeistpm', ''],
  
  ['https://solana.com/', 'https://near.org/', 'https://www.avalabs.org/', 'https://swarm.ethereum.org/', ''],
  ['https://www.chia.net/', 'https://www.rendertoken.com/', 'https://www.nucypher.com/', 'https://daomaker.com/', ''],
  ['https://bitcoin.org/en/', 'https://ethereum.org/en/', 'https://polkadot.network/', 'https://cosmos.network/', 'https://ethereumclassic.org/'],
  ['https://pokt.network/', 'https://shyft.network/', 'https://nayms.io/', 'https://chainflip.io/', 'https://kine.io/'],
  ['https://dinoswap.exchange/', 'https://zh.blockswap.network/', 'https://sienna.network/', 'https://meme.com/', 'http://corra.finance/'],
  ['https://linktr.ee/doingud', 'http://starrynift.art/', 'https://metisdao.org/', 'https://www.pylons.tech/', 'https://www.daosquare.io/'],
  ['https://deepdao.io/', 'https://republic.co/crypto', 'http://musenetwork.org/', 'https://www.alpha5.io/#/', 'https://mintable.app/'],
]

const more = {
  logo1: {
    l1: {
      t: 'LedgerX',
      en: 'Leading investor in LedgerX, which aims to become the most important US regulated exchange for bitcoin derivatives.',
      zh: '全球领先的受美国CFTC监管的数字资产期货和期权交易所'
    },
    l2: {
      t: 'Circle',
      en: 'The world\'s leading payments and treasury infrastructure service provider and creator of the fastest growing full reserve stablecoin in the world (USDC).',
      zh: '全球领先的支付服务提供商，以及全球增长最快的稳定币USDC的发行方'
    },
    l3: {
      t: 'Amber Group',
      en: 'A leading global encrypted financial intelligent service platform.',
      zh: '业内领先的全球化加密金融智能服务提供商'
    },
    l4: {
      t: 'Matrix',
      en: 'The most secure and compliant global virtual asset exchange in the Middle East.',
      zh: '中东地区最安全、合规的全球数字资产交易平台'
    }
  },
  logo2: {
    l1: {
      t: 'Acala',
      en: 'The all-in-one DeFi hub of Polkadot',
      zh: 'Polkadot一站式DeFi中心'
    },
    l2: {
      t: 'Astar Network (Previously Plasm)',
      en: 'Polkadot native dApp hub supporting EVM, WebAssembly and Layer2. ',
      zh: 'Polkadot上支持以太坊虚拟机、WebAssembly以及Layer 2的原生dApp集线器'
    },
    l3: {
      t: 'Manta Network',
      en: 'An interoperable privacy protocol for the DeFi stack built on Substrate.',
      zh: '基于 Substrate 构建的DeFi堆栈互操作隐私协议'
    },
    l4: {
      t: 'Reef Finance',
      en: 'A cross-chain DeFi operating system, smart liquidity aggregator and yield engine powered by Polkadot.',
      zh: '由Polkadot赋能的跨链 DeFi 操作系统、智能流动性聚合器和收益引擎'
    },
    l5: {
      t: 'HydraDX',
      en: 'The multi-headed liquidity omni pool built on Substrate.',
      zh: '基于 Substrate 构建的多头流动性综合池'
    },
    l6: {
      t: 'Equilibrium',
      en: 'The first interoperable DeFi conglomerate on Polkadot comprised of a money market and a cross-chain DEX.',
      zh: 'Polkadot首个可互操作的由做市商和跨链DEX组成的DeFi协议'
    },
    l7: {
      t: 'Unique',
      en: 'An NFT chain for Kusama and Polkadot.',
      zh: '基于Kusama和Polkadot生态、专注于NFT的区块链'
    },
    l8: {
      t: 'Bit.Country',
      en: 'A metaverse and NFT portal on Polkadot.',
      zh: '建立在Polkadot生态上的“元宇宙”和NFT世界传送门'
    }
  },
  logo3: {
    l1: {
      t: 'Solana',
      en: 'A high-performance blockchain supporting builders around the world creating crypto apps.',
      zh: '高性能的支持全球加密应用的区块链平台'
    },
    l2: {
      t: 'NEAR',
      en: 'An open-source platform that accelerates the development of decentralized applications.',
      zh: '加速去中心化应用程序开发的开源平台'
    },
    l3: {
      t: 'Avalanche',
      en: 'A highly-scalable, open-source platform for launching decentralized finance applications.',
      zh: '支持去中心化金融应用的高度可扩展的开源平台'
    },
    l4: {
      t: 'Swarm',
      en: 'A decentralized storage and communication system of the Ethereum Web3.0 stack.',
      zh: '以太坊Web3.0堆栈的分布式存储和通信网络'
    },
    l5: {
      t: 'Chia Network',
      en: 'A blockchain and smart transaction platform focused on energy efficiency.',
      zh: '专注于能源效率的区块链和智能交易平台'
    },
    l6: {
      t: 'RNDR',
      en: 'The first network to transform the power of GPU compute into a decentralized economy of connected 3D assets.',
      zh: '首个将GPU计算能力转换为连接3D资产的去中心化经济网络'
    },
    l7: {
      t: 'NuCypher',
      en: 'Cryptographic infrastructure for privacy-preserving applications.',
      zh: '隐私保护应用程序的加密基础设施'
    },
    l8: {
      t: 'Dao Maker',
      en: 'A DeFi platform for retail ventures looking to invest in equity and tokens.',
      zh: '面向寻求股票和代币投资的零售企业的DeFi平台'
    }
  }
}

export default function Portfolio () {
  const [{language}] = useContext(ThemeContext);

  useEffect(() => {
    const tag = window.location.hash;
    if (tag) {
      const div = document.querySelector(`${tag}`)
      const offset = div.getBoundingClientRect();
      window.scrollTo(0, offset.top);
    } else {
      window.scrollTo(0, 0);
    }

  }, [])

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

      <section className="sec-2" id="s1">
        <div className="small">
          <h1>{content.s2.title[language]}</h1>
          <p>{content.s2.p1[language]}</p>
        </div>
        <div className="mid">
          <div className="limit logos">
            <li><a href={links[0][0]} target="_blink"><img alt="" src="/images/portfolio/11.png" /><div className="more"><h3>{more.logo1.l1.t}</h3><p>{more.logo1.l1[language]}</p></div></a></li>
            <li><a href={links[0][1]} target="_blink"><img alt="" src="/images/portfolio/12.png" /><div className="more"><h3>{more.logo1.l2.t}</h3><p>{more.logo1.l2[language]}</p></div></a></li>
            <li><a href={links[0][2]} target="_blink"><img alt="" src="/images/portfolio/13.png" /><div className="more"><h3>{more.logo1.l3.t}</h3><p>{more.logo1.l3[language]}</p></div></a></li>
            <li><a href={links[0][3]} target="_blink"><img alt="" src="/images/portfolio/14.png" /><div className="more"><h3>{more.logo1.l4.t}</h3><p>{more.logo1.l4[language]}</p></div></a></li>
          </div>
        </div>
        <div className="limit grid">
          <li><a href={links[1][0]} target="_blink"><img alt="" src="/images/portfolio/21.png" /></a></li>
          <li><a href={links[1][1]} target="_blink"><img alt="" src="/images/portfolio/22.png" /></a></li>
          <li><a href={links[1][2]} target="_blink"><img alt="" src="/images/portfolio/23.png" /></a></li>
          <li><a href={links[1][3]} target="_blink"><img alt="" src="/images/portfolio/24.png" /></a></li>
          <li><a href={links[1][4]} target="_blink"><img alt="" src="/images/portfolio/25.png" /></a></li>
          <li><a href={links[2][0]} target="_blink"><img alt="" src="/images/portfolio/31.png" /></a></li>
          <li><a href={links[2][1]} target="_blink"><img alt="" src="/images/portfolio/32.png" /></a></li>
          <li><a href={links[2][2]} target="_blink"><img alt="" src="/images/portfolio/33.png" /></a></li>
          <li><a href={links[2][3]} target="_blink"><img alt="" src="/images/portfolio/34.png" /></a></li>
          <li><a href={links[2][4]} target="_blink"><img alt="" src="/images/portfolio/35.png" /></a></li>
          <li><a href={links[3][0]} target="_blink"><img alt="" src="/images/portfolio/41.svg" /></a></li>
          <li><a href={links[3][1]} target="_blink"><img alt="" src="/images/portfolio/42.png" /></a></li>
          <li><a href={links[3][2]} target="_blink"><img alt="" src="/images/portfolio/43.png" /></a></li>
          <li><a href={links[3][3]} target="_blink"><img alt="" src="/images/portfolio/44.png" /></a></li>
          <li><a href={links[3][4]} target="_blink"><img alt="" src="/images/portfolio/45.png" /></a></li>
          <li><a href={links[4][0]} target="_blink"><img alt="" src="/images/portfolio/51.png" style={{"height": "60%"}} /></a></li>

        </div>
      </section>
      <section className="sec-3" id="s2">
        <div className="small">
          <h1>{content.s3.title1[language]}</h1>
          <h1>{content.s3.title2[language]}</h1>
          <p>{content.s3.p1[language]}</p>
          <p>{content.s3.p2[language]}</p>
        </div>
        <div className="mid">
          <div className="limit logos">
          <li><a href={links[5][0]} target="_blink"><img alt="" src="/images/portfolio/61.png" /><div className="more"><h3>{more.logo2.l1.t}</h3><p>{more.logo2.l1[language]}</p></div></a></li>
          <li><a href={links[5][1]} target="_blink"><img alt="" src="/images/portfolio/62.png" /><div className="more"><h3>{more.logo2.l2.t}</h3><p>{more.logo2.l2[language]}</p></div></a></li>
          <li><a href={links[5][2]} target="_blink"><img alt="" src="/images/portfolio/63.png" /><div className="more"><h3>{more.logo2.l3.t}</h3><p>{more.logo2.l3[language]}</p></div></a></li>
          <li><a href={links[5][3]} target="_blink"><img alt="" src="/images/portfolio/64.png" /><div className="more"><h3>{more.logo2.l4.t}</h3><p>{more.logo2.l4[language]}</p></div></a></li>
          </div>
          <div className="limit logos">
          <li><a href={links[6][0]} target="_blink"><img alt="" src="/images/portfolio/71.png" /><div className="more"><h3>{more.logo2.l5.t}</h3><p>{more.logo2.l5[language]}</p></div></a></li>
          <li><a href={links[6][1]} target="_blink"><img alt="" src="/images/portfolio/72.png" /><div className="more"><h3>{more.logo2.l6.t}</h3><p>{more.logo2.l6[language]}</p></div></a></li>
          <li><a href={links[6][2]} target="_blink"><img alt="" src="/images/portfolio/73.png" /><div className="more"><h3>{more.logo2.l7.t}</h3><p>{more.logo2.l7[language]}</p></div></a></li>
          <li><a href={links[6][3]} target="_blink"><img alt="" src="/images/portfolio/74.png" /><div className="more"><h3>{more.logo2.l8.t}</h3><p>{more.logo2.l8[language]}</p></div></a></li>
          </div>
        </div>
        <div className="limit grid">
          <li><a href={links[7][0]} target="_blink"><img alt="" src="/images/portfolio/81.png" /></a></li>
          <li><a href={links[7][1]} target="_blink"><img alt="" src="/images/portfolio/82.png" /></a></li>
          <li><a href={links[7][2]} target="_blink"><img alt="" src="/images/portfolio/83.svg" /></a></li>
          <li><a href={links[7][3]} target="_blink"><img alt="" src="/images/portfolio/84.svg" /></a></li>
          <li><a href={links[7][4]} target="_blink"><img alt="" src="/images/portfolio/85.png" /></a></li>
          <li><a href={links[8][0]} target="_blink"><img alt="" src="/images/portfolio/91.png" /></a></li>
          <li><a href={links[8][1]} target="_blink"><img alt="" src="/images/portfolio/92.png" /></a></li>
          <li><a href={links[8][2]} target="_blink"><img alt="" src="/images/portfolio/93.png" /></a></li>
          <li><a href={links[8][3]} target="_blink"><img alt="" src="/images/portfolio/94.png" /></a></li>
          <li><a href={links[8][4]} target="_blink"><img alt="" src="/images/portfolio/95.webp" /></a></li>
          <li><a href={links[9][0]} target="_blink"><img alt="" src="/images/portfolio/101.png" /></a></li>
          <li><a href={links[9][1]} target="_blink"><img alt="" src="/images/portfolio/102.png" style={{"height": "60%"}} /></a></li>
          <li><a href={links[9][2]} target="_blink"><img alt="" src="/images/portfolio/103.png" /></a></li>
          <li><a href={links[9][3]} target="_blink"><img alt="" src="/images/portfolio/104.png" /></a></li>
          <li><a href={links[9][4]} target="_blink"><img alt="" src="/images/portfolio/105.png" /></a></li>
          <li><a href={links[10][0]} target="_blink"><img alt="" src="/images/portfolio/111.png" /></a></li>
          <li><a href={links[10][1]} target="_blink"><img alt="" src="/images/portfolio/112.png" /></a></li>
          <li><a href={links[10][2]} target="_blink"><img alt="" src="/images/portfolio/113.png" /></a></li>
          <li><a href={links[10][3]} target="_blink"><img alt="" src="/images/portfolio/114.svg" style={{"height": "90px"}} /></a></li>

        </div>

      </section>
      <section className="sec-4" id="s3">
        <div className="small">
          <h1>{content.s4.title[language]}</h1>
          <p>{content.s4.p1[language]}</p>
        </div>
        <div className="mid">
          <div className="limit logos">
          <li><a href={links[11][0]} target="_blink"><img alt="" src="/images/portfolio/121.png" /><div className="more"><h3>{more.logo3.l1.t}</h3><p>{more.logo3.l1[language]}</p></div></a></li>
          <li><a href={links[11][1]} target="_blink"><img alt="" src="/images/portfolio/122.png" /><div className="more"><h3>{more.logo3.l2.t}</h3><p>{more.logo3.l2[language]}</p></div></a></li>
          <li><a href={links[11][2]} target="_blink"><img alt="" src="/images/portfolio/123.png" /><div className="more"><h3>{more.logo3.l3.t}</h3><p>{more.logo3.l3[language]}</p></div></a></li>
          <li><a href={links[11][3]} target="_blink"><img alt="" src="/images/portfolio/124.png" /><div className="more"><h3>{more.logo3.l4.t}</h3><p>{more.logo3.l4[language]}</p></div></a></li>
          </div>
          <div className="limit logos">
          <li><a href={links[12][0]} target="_blink"><img alt="" src="/images/portfolio/131.png" /><div className="more"><h3>{more.logo3.l5.t}</h3><p>{more.logo3.l5[language]}</p></div></a></li>
          <li><a href={links[12][1]} target="_blink"><img alt="" src="/images/portfolio/132.png" /><div className="more"><h3>{more.logo3.l6.t}</h3><p>{more.logo3.l6[language]}</p></div></a></li>
          <li><a href={links[12][2]} target="_blink"><img alt="" src="/images/portfolio/133.png" /><div className="more"><h3>{more.logo3.l7.t}</h3><p>{more.logo3.l7[language]}</p></div></a></li>
          <li><a href={links[12][3]} target="_blink"><img alt="" src="/images/portfolio/134.png" /><div className="more"><h3>{more.logo3.l8.t}</h3><p>{more.logo3.l8[language]}</p></div></a></li>
          </div>
        </div>
        <div className="limit grid">
          <li><a href={links[13][0]} target="_blink"><img alt="" src="/images/portfolio/141.svg" style={{"height": "60%"}} /></a></li>
          <li><a href={links[13][1]} target="_blink"><img alt="" src="/images/portfolio/142.png" /></a></li>
          <li><a href={links[13][2]} target="_blink"><img alt="" src="/images/portfolio/143.png" /></a></li>
          <li><a href={links[13][3]} target="_blink"><img alt="" src="/images/portfolio/144.png" /></a></li>
          <li><a href={links[13][4]} target="_blink"><img alt="" src="/images/portfolio/145.svg" /></a></li>
          <li><a href={links[14][0]} target="_blink"><img alt="" src="/images/portfolio/151.png" /></a></li>
          <li><a href={links[14][1]} target="_blink"><img alt="" src="/images/portfolio/152.png" /></a></li>
          <li><a href={links[14][2]} target="_blink"><img alt="" src="/images/portfolio/153.svg" /></a></li>
          <li><a href={links[14][3]} target="_blink"><img alt="" src="/images/portfolio/154.png" /></a></li>
          <li><a href={links[14][4]} target="_blink"><img alt="" src="/images/portfolio/155.png" /></a></li>
          <li><a href={links[15][0]} target="_blink"><img alt="" src="/images/portfolio/161.png" /></a></li>
          <li><a href={links[15][1]} target="_blink"><img alt="" src="/images/portfolio/162.png" /></a></li>
          <li><a href={links[15][2]} target="_blink"><img alt="" src="/images/portfolio/163.svg" /></a></li>
          <li><a href={links[15][3]} target="_blink"><img alt="" src="/images/portfolio/164.jpg" /></a></li>
          <li><a href={links[15][4]} target="_blink"><img alt="" src="/images/portfolio/165.png" /></a></li>
          <li><a href={links[16][0]} target="_blink"><img alt="" src="/images/portfolio/171.svg" /></a></li>
          <li><a href={links[16][1]} target="_blink"><img alt="" src="/images/portfolio/172.png" /></a></li>
          <li><a href={links[16][2]} target="_blink"><img alt="" src="/images/portfolio/173.png" /></a></li>
          <li><a href={links[16][3]} target="_blink"><img alt="" src="/images/portfolio/174.svg" style={{"height": "80px"}} /></a></li>
          <li><a href={links[16][4]} target="_blink"><img alt="" src="/images/portfolio/175.svg" /></a></li>
          <li><a href={links[17][0]} target="_blink"><img alt="" src="/images/portfolio/181.png" /></a></li>
          <li><a href={links[17][1]} target="_blink"><img alt="" src="/images/portfolio/182.svg" /></a></li>
          <li><a href={links[17][2]} target="_blink"><img alt="" src="/images/portfolio/183.svg" /></a></li>
          <li><a href={links[17][3]} target="_blink"><img alt="" src="/images/portfolio/184.svg" /></a></li>
          <li><a href={links[17][4]} target="_blink"><img alt="" src="/images/portfolio/185.svg" style={{"height": "60%"}} /></a></li>

        </div>

      </section>
    </div>
  )
}