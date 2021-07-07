import {Link} from 'react-router-dom';

export default function Footer () {
  return (
    <footer>
      <div className="grid">
        <div className="top-layer">
          <div className="bot-nav">
            <ul>
              <h4>About</h4>
              <li>About DFG</li>
              <li>Our Team</li>
              <li>Jobs</li>
              <li>Media Kit</li>
            </ul>
            <ul>
              <h4>Portfolio</h4>
              <li>Overview</li>
              <li>Venture Equity Fund</li>
              <li>Polkadot Ecosystem  Fund</li>
              <li>Crypto Fund</li>
            </ul>
            <ul>
              <h4>Insight</h4>
              <li>Blog</li>
              <li>Press</li>
              <li>DFG Club</li>
            </ul>
          </div>
          <div className="bot-share">
            <img src="/images/home_slices/f-logo.png" alt="" className="logo" />
            <a href="https://twitter.com/DFG_OfficiaI" referrerPolicy="no-referrer" target="_blink" ><img src="/images/home_slices/f-logo1.png" alt="" /></a>
            <a href="https://dfg-official.medium.com/" referrerPolicy="no-referrer" target="_blink" ><img src="/images/home_slices/f-logo2.png" alt="" /></a>
            <a href="https://www.youtube.com/channel/UCaLymWUyQS7l3yUH1c-D-tA" referrerPolicy="no-referrer" target="_blink" ><img src="/images/home_slices/f-logo3.png" alt="" /></a>
            <a href="https://www.linkedin.com/company/33517476" referrerPolicy="no-referrer" target="_blink" ><img src="/images/home_slices/f-logo4.png" alt="" /></a>
          </div>
        </div>
        <form className="top-layer bot-contact">
          <h3>CONTACT US</h3>
          <p>We are continuously on the lookout for refreshing ideas, business, and partnership opportunities. We invite you to contact us by submitting a business proposal and any resources that could help us to evaluate your application.</p>
          <input type="mail" name="mail" placeholder="example@email.com"/>
          <div>
            <span>Subscribe to our newsletter</span>
            <button>Subscribe</button>
          </div>
        </form>
      </div>
      <div className="grid">
        <div className="bot-term"><Link to="/agreement">TERMS & CONDITIONS&nbsp;| PRIVACY POLICY</Link></div>
        <div className="bot-rights">©2019-2021 DFG. All rights reserved.</div>
      </div>
      
    </footer>
  )
}