import {Link} from 'react-router-dom';

export default function Footer () {
  return (
    <footer>
      <div>
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
          <img src="/images/home_slices/f-logo.png" alt="" />
          <img src="/images/home_slices/f-logo1.png" alt="" />
          <img src="/images/home_slices/f-logo2.png" alt="" />
          <img src="/images/home_slices/f-logo3.png" alt="" />
          <img src="/images/home_slices/f-logo4.png" alt="" />
        </div>
      </div>
      <div className="bot-contact">
        <h3>CONTACT US</h3>
        <p>We are continuously on the lookout for refreshing ideas, business, and partnership opportunities. We invite you to contact us by submitting a business proposal and any resources that could help us to evaluate your application.</p>
        <input type="mail" name="mail" placeholder="example@email.com"/>
        <div>
          <span>Subscribe to our newsletter</span>
          <button>Subscribe</button>
        </div>
      </div>
      <div className="bot-term"><Link to="/">TERMS & CONDITIONS</Link>&nbsp;| PRIVACY POLICY</div>
      <div className="bot-rights">©2019-2021 DFG. All rights reserved.</div>
    </footer>
  )
}