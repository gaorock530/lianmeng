import { useContext, useEffect } from 'react'
import {ThemeContext} from '../context/themeContext'

const content = {
  s1: {
    title: {en: 'ABOUT DFG', zh: 'DFG简介'},
    p1: {
      en: 'Founded in 2015, DFG manages more than $1 billion in assets by actively investing in a variety of global blockchain and Web3.0 projects and empowering their growth that will cause a paradigm shift. With its presence in Asia, North America, and the Middle East, DFG continues to search for the best entrepreneurial teams and investment opportunities that will secure the future of the industry with bold innovation.',
      zh: 'DFG成立于2015年，通过积极投资并赋能全球区块链和Web3.0项目引起范式转移，目前管理着超过10亿美元的资产。DFG在亚洲、北美和中东均有分布，持续寻找全球优质创业团队和投资机会，助力行业创新发展。'
    },
    p2: {
      en: 'In time, DFG has achieved extraordinary returns from its genesis as an active trading fund to a more diversified investment firm through intensive research and analysis of the evolution and projection of the industry into the future.',
      zh: '通过深入分析行业发展并预测行业走向，DFG从最初的一支主动型交易基金发展成为一家多元化的投资机构，并取得了丰厚的投资回报。'
    },
    p3: {
      en: 'DFG aims to continue its performance in volatile markets and the development of specialized expertise, market access, and partnerships. Furthermore, DFG is willing to provide its analysis and exclusive insights to the industry, and constantly improve its overall influence as a trustworthy investment firm.',
      zh: 'DFG坚持在不断变化的市场环境中拓展自己的专业能力、市场资源和合作伙伴关系。此外，DFG乐于分享其行业洞见，提升行业影响力以成为值得信赖的投资机构。'
    }
  },
  s2: {
    title: {en: 'OUR TEAM', zh: '团队成员'},
    p1: {
      en: 'We are a team of experienced entrepreneurs, investors, builders, and market analysts. We are deeply inquisitive, encourage disruptive ideas, and are passionate advocates of blockchain, cryptocurrencies, and Web3.0 technology.',
      zh: '我们团队由经验丰富的创业者、投资者及市场分析师等构成。我们乐于探索新事物，鼓励颠覆性的想法，是区块链、数字资产和Web3.0技术的热情倡导者。'
    }
  },
  s3: {
    title1: {en: 'James Wo', zh: 'James Wo'},
    title2: {en: 'Funder & CEO', zh: '创始人兼首席执行官'},
    
    p1: {
      en: 'James is an experienced entrepreneur and investor in blockchain who founded DFG in 2015, where he oversees over $1 billion assets under management. He has participated in early-stage investment rounds of leading virtual asset service providers such as LedgerX, Amber Group, and the creator of USDC, Circle, in addition to being the Founder and Chairman of UAE licensed virtual asset exchange, Matrix. James speaks in global blockchain events to share his in-depth industry knowledge on blockchain technology, crypto investment, and entrepreneurship.',
      zh: 'James是区块链领域经验丰富的创业者和投资者，他于2015年创立了DFG，管理超过10亿美元的资产。他参与了LedgerX、Amber Group、Circle等领先数字资产服务提供商的早期投资，也是阿联酋合规交易平台Matrix的创始人。James经常在国际区块链峰会中发表演讲，分享他对区块链技术、数字资产投资和创业方面的行业洞见。'
    }
  },
  s4: {
    title1: {en: 'Terry Culver', zh: 'Terry Culver'},
    title2: {en: 'Executive Director', zh: '执行董事'},
    
    p1: {
      en: 'Terry has 20+ years of experience in emerging markets, technology, and enterprise development. He is an independent director of First Seafront Fund, a mutual fund with more than $6B under management, and a Director of LedgerX. He is Senior Advisor at the Columbia University School of International and Public Affairs and a member of the Executive Committee of the Chamber of Digital Commerce. His work has been featured on Bloomberg Radio, Forbes, Yahoo! Finance, FX Street, CoinDesk, and more.',
      zh: 'Terry在新兴市场、技术和企业管理方面拥有20多年经验。他是前海开源基金的独立董事以及LedgerX的董事。Terry也是哥伦比亚大学国际和公共事务学院的高级顾问，以及数字商会的执行委员会成员。他曾接受彭博电台、福布斯、雅虎金融、FX Street、CoinDesk等媒体报道。'
    }
  },
  // s5: {
  //   title1: {en: 'Joanna Liang', zh: 'Joanna Liang'},
  //   title2: {en: 'Head of Investment', zh: '投资总监'},
    
  //   p1: {
  //     en: 'Joanna has been involved in blockchain technology and digital assets investment for the past five years. She manages DFG’s crypto fund, borrowing and lending business, as well as liquidity mining. In 2020, she was part of the launch of the Polkadot Ecosystem Fund with a $20 million AUM. Prior to DFG, Joanna worked at Huobi and Nike.',
  //     zh: 'Joanna拥有丰富的区块链和数字资产投资经验。她管理DFG的数字货币基金、借贷以及流动性挖矿业务。在2020年，她主导成立了2000万美元的Polkadot生态基金。在DFG之前，Joanna曾在火币和Nike工作。'
  //   }
  // },
  // s6: {
  //   title1: {en: 'Grace Gui', zh: 'Grace Gui'},
  //   title2: {en: 'Head of Marketing & BD', zh: '市场商务总监'},
    
  //   p1: {
  //     en: 'Grace has about 10 years of experience in solutions, program management, marketing and communities. In the field of blockchain, she has rich experience in overseas event planning and media relations. Before joining DFG, Grace was in charge of global community communications at the Neo Foundation. Her legal education background leads to her in-depth thinking and strong problem-solving skills.',
  //     zh: 'Grace在解决方案、项目管理、市场营销和社区方面拥有近10年的工作经验。 在区块链领域，她在海外活动策划和媒体关系方面拥有丰富的经验。 在加入DFG之前，Grace曾在Neo基金会负责全球社区沟通。她的法学教育背景使她具有深入思考和良好的解决问题的能力。'
  //   }
  // },
  s7: {
    title1: {en: 'Feng Hano', zh: 'Feng Han'},
    title2: {en: 'Head of Research', zh: '研究总监'},
    
    p1: {
      en: 'Feng has more than five years of experience in TMT and blockchain investments. Prior to DFG, Feng joined Gingkoo Blockchain as a strategic researcher, primarily responsible for fintech and blockchain innovation and implementation. He graduated from the University of Southern California with an M.S degree in EE.',
      zh: 'Feng拥有超过五年的TMT和区块链投资经验。在加入DFG之前，他曾在金丘科技担任战略研究顾问，负责金融科技和区块链领域的创新研究和落地。Feng拥有美国南加州电子工程硕士学位。'
    }
  },
  s8: {
    title1: {en: 'Alejandro Larralde', zh: 'Alejandro Larralde'},
    title2: {en: 'Head of Marketing', zh: '市场总监'},
    
    p1: {
      en: 'Alejandro has 10+ years of experience in sales management and marketing. He has worked in a wide range of industries including real estate, travel, and leisure, international commerce, and blockchain. He currently leads the overseas area for the marketing department and focuses on building DFG’s brand awareness on a global scale through strategic partnerships in regions such as APAC, MENA, Europe, and North America.',
      zh: 'Alejandro是销售管理和市场营销的专家，他在房地产、旅游休闲、国际商务和区块链等多个行业拥有10多年的工作经验。目前他主要负责海外市场推广，致力于在全球范围内建立DFG的品牌知名度。'
    }
  },
  s9: {
    title: {en: 'JOBS', zh: '工作机会'},
    p1: {
      en: 'If you consider yourself a passionate advocate of blockchain and Web3.0 who enjoys working in a challenging and dynamic atmosphere, we would love to hear from you.',
      zh: '如果你是区块链和Web3.0的热情倡导者，并且喜欢充满挑战和活力的工作环境，我们期待与你一起创造未来。'
    },
    p2: {
      en: 'Please contact us at',
      zh: '欢迎与我们联系'
    }
  },
}

export default function About () {
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
    <div className="aboutpage">
      <section className="sec-1">
        <div className="constained">
          <h1>{content.s1.title[language]}</h1>
          <div className="para">
            <p>{content.s1.p1[language]}</p>
            <p>{content.s1.p2[language]}</p>
            <p>{content.s1.p3[language]}</p>
          </div>
        </div>
      </section>
      <section className="constained sec-2" id="s1">
        <div className="ourteam">
          <h1>{content.s2.title[language]}</h1>
          <p>{content.s2.p1[language]}</p>
        </div>
        <div className="james">
          <div className="content">
            <img className="pic" src="images/about_slices/James.png" alt="" />
            <div className="right">
              <div className="upper">
                <div className="title">
                  <h3>{content.s3.title1[language]}</h3>
                  <h4>{content.s3.title2[language]}</h4>
                </div>
                <img className="twitter" src="images/about_slices/51miz-E777345-545329E6.png" alt="" />
              </div>
              <p>{content.s3.p1[language]}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-3">
        <div>
          <img src="images/about_slices/CORE TEAM_MEMBERS.png" alt="" className="team"/>
        </div>
        <div className="staff">
          <img src="images/about_slices/30.png" alt="" />
          <div>
            <div className="title">
              <h3>{content.s4.title1[language]}</h3>
              <h4>{content.s4.title2[language]}</h4>
            </div>
            
            <p>{content.s4.p1[language]}</p>
          </div>
        </div>
        {/* <div className="staff">
          <img src="images/about_slices/29.png" alt="" />
          <div>
            <div className="title">
              <h3>{content.s5.title1[language]}</h3>
              <h4>{content.s5.title2[language]}</h4>
            </div>
            <p>{content.s5.p1[language]}</p>
          </div>
        </div>
        <div className="staff">
          <img src="images/about_slices/10.png" alt="" />
          <div>
            <div className="title">
              <h3>{content.s6.title1[language]}</h3>
              <h4>{content.s6.title2[language]}</h4>
            </div>
            <p>{content.s6.p1[language]}</p>
          </div>
        </div> */}
        <div className="staff">
          <img src="images/about_slices/11.png" alt="" />
          <div>
            <div className="title">
              <h3>{content.s7.title1[language]}</h3>
              <h4>{content.s7.title2[language]}</h4>
            </div>
            <p>{content.s7.p1[language]}</p>
          </div>
        </div>
        <div className="staff">
          <img src="images/about_slices/8.png" alt="" />
          <div>
            <div className="title">
              <h3>{content.s8.title1[language]}</h3>
              <h4>{content.s8.title2[language]}</h4>
            </div>
            <p>{content.s8.p1[language]}</p>
          </div>
        </div>
      </section>
      <section className="constained sec-4" id="s2">
        <div className="pic">
          <img src="/images/about/51miz-P1219990-PD72NRJ3-3840x2563.png" alt="" />
        </div>
        <div className="right">
          <h1>{content.s9.title[language]}</h1>
          <div className="text">
            <p>{content.s9.p1[language]} </p>
            <p>{content.s9.p2[language]}: <a href="mailto:hr@dfg.group">hr@dfg.group</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}