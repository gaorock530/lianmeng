import {Link} from 'react-router-dom';

export default function Insight () {
  return (
    <div className="insightpage">
      <section className="sec-1">
        <img src="images/insight_slices/81.png" alt="" />
        <ul>
          <li className="active"><a href="#blog">BLOG</a></li>
          <li><a href="#press">PRESS</a></li>
          <li><a href="#club">DFG CLUB</a></li>
        </ul>
      </section>
      <section className="sec-2">
        <div className="title" id="blog"></div>
        <ul>
          <Link to="/blog/1">
            <li>
              <h4>Mar 02, 2021</h4>
              <h1>DFG(数字金融集团)成为 Polkastarter 理事会成员</h1>
              <h4>By: XXX</h4>
            </li>
          </Link>
          <Link to="/blog/2">
            <li>
              <h4>Mar 02, 2021</h4>
              <h1>Announcement: 
                  DFG’s Exclusive $20 Million Polkadot Fund</h1>
              <h4>By: XXX</h4>
            </li>
          </Link>
          <Link to="/blog/3">
            <li>
              <h4>Mar 02, 2021</h4>
              <h1>DFG(数字金融集团)成为 Polkastarter 理事会成员</h1>
              <h4>By: XXX</h4>
            </li>
          </Link>
          
        </ul>
        <div className="arrows">
          <img src="images/insight_slices/3558.png" alt="" />
          <img src="images/insight_slices/3559.png" alt="" />
        </div>
      </section>
      <section className="sec-3">
        <div className="title" id="press"><div></div></div>
        <ul>
          <Link to="/press/1">
          <li>
            <img alt="" src="images/insight_slices/1.png" />
            <h2>Announcement: DFG’s Exclusive $20 Million Polkadot Fund</h2>
            <div>
              <h5>By XXXX</h5>
              <span>Feb 09, 2021</span>
            </div>
          </li>
          </Link>
          <Link to="/press/2">
          <li>
            <img alt="" src="images/insight_slices/1.png" />
            <h2>Announcement: DFG’s Exclusive $20 Million Polkadot Fund</h2>
            <div>
              <h5>By XXXX</h5>
              <span>Feb 09, 2021</span>
            </div>
          </li>
          </Link>
          <Link to="/press/3">
          <li>
            <img alt="" src="images/insight_slices/1.png" />
            <h2>Announcement: DFG’s Exclusive $20 Million Polkadot Fund</h2>
            <div>
              <h5>By XXXX</h5>
              <span>Feb 09, 2021</span>
            </div>
          </li>
          </Link>
          <Link to="/press/4">
          <li>
            <img alt="" src="images/insight_slices/1.png" />
            <h2>Announcement: DFG’s Exclusive $20 Million Polkadot Fund</h2>
            <div>
              <h5>By XXXX</h5>
              <span>Feb 09, 2021</span>
            </div>
          </li>
          </Link>
        </ul>
        <div className="arrows">
          <img src="images/insight_slices/3558.png" alt="" />
          <img src="images/insight_slices/3559.png" alt="" />
        </div>
      </section>
      <section className="sec-4"> 
        <div className="title" id="club">
          <div></div>
          <span>DFG CLUB</span>
        </div>
        <ul>
          <li>
            <img alt="" src="images/insight_slices/1.png" />
            <div>
              <h1>03</h1>
              <h3>2021.xx.xx</h3>
              <p>Announcement: DFG’s Exclusive $20 Million Polkadot Fund</p>
            </div>
          </li>
          <li>
            <img alt="" src="images/insight_slices/DFGCLUBCOVER02.png" />
            <div>
              <h1>02</h1>
              <h3>2021.xx.xx</h3>
              <p>畅享Polkadot无尽想象</p>
            </div>
          </li>
          <li>
            <img alt="" src="images/insight_slices/DFGCLUB02.png" />
            <div>
              <h1>01</h1>
              <h3>2021.xx.xx</h3>
              <p>浅谈波卡价值支持</p>
            </div>
          </li>
        </ul>
        <div className="arrows">
          <img src="images/insight_slices/3558.png" alt="" />
          <img src="images/insight_slices/3559.png" alt="" />
        </div>
      </section>
    </div>
  )
}