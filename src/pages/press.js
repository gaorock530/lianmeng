import {Link} from 'react-router-dom';
import { useEffect } from 'react';

export default function Press () {

  const title = encodeURI("DFG’s Exclusive $20 Million Polkadot Fund");
  const url = encodeURI(window.location);

  const add = () => {
    if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
      window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) { // IE Favorite
      window.external.AddFavorite(window.location.href, document.title);
    } else if (window.opera && window.print) { // Opera Hotlist
      this.title = document.title;
      return true;
    } else { // webkit - safari/chrome
      alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') !== -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
    }
  }
  

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="presspage">
      <section className="sec-1">
        <h1>DFG’s Exclusive $20 Million Polkadot Fund</h1>
        <div className="subtitle">
          <h5>Effective Date: August 14, 2015</h5>
          <ul>
            <li><a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${title}&url=${url}`}><img alt="" src="/images/press_slices/3560.png" /></a></li>
            <li><a target="_blank" rel="noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}><img alt="" src="/images/press_slices/3563.png" /></a></li>
            <li><a target="_blank" rel="noreferrer" href={`http://www.facebook.com/sharer.php?u=${url}&p[title]=${title}`}><img alt="" src="/images/press_slices/3564.png" /></a></li>
            <li><img alt="" src="/images/press_slices/3567.png" /></li>
            <li onClick={add}><img alt="" src="/images/press_slices/3605.png" /></li>
          </ul>
        </div>
        <p>These Terms of Service, together with our Privacy Policy, govern your access to and use of the websites (the “DCG Sites” or the “Sites”) of Digital Currency Group Inc. and those of its subsidiaries and affiliates, including Grayscale and Genesis (collectively, “DCG”, “Grayscale”, “Genesis”, “we”, “our”, or “us”), and your use of any of the services provided through these Sites. These Terms of Service and any additional terms and conditions, policies, agreements and disclosures to which you have agreed are hereafter referred to collectively as the “Agreement”. Please read these Terms of Service carefully. </p>
        <p>Your use of a DCG Site is governed by the version of the Terms of Service in effect on the date of use. DCG may modify the Terms of Service at any time and without prior notice. By using and accessing any DCG Site, you acknowledge and agree to review the most current version of these Terms of Service prior to each such use. Your continued use of and access to any of the DCG Sites constitutes your acknowledgement of, and agreement to, the then current Terms of Service. Please also note that the terms and conditions of these Terms of Service are in addition to any other agreements between you and DCG and/or its affiliates and agents, including any customer agreements, and any other agreements that govern your use of products, services, content, tools, and information available on the DCG Sites. </p>
        <p>DCG reserves the right, in its sole discretion, without any obligation and without any notice requirement, to change, improve or correct the information, materials and descriptions on the DCG Sites and/or to suspend and/or deny access to any DCG Site for scheduled or unscheduled maintenance, upgrades, improvements or corrections. The information and materials on the DCG Site may contain typographical errors or inaccuracies. Any dated information is published as of its date only, and DCG does not undertake any obligation or responsibility to update or amend any such information. DCG may discontinue or change any product or service described in or offered on DCG Site at any time without prior notice. DCG further reserves the right, in its sole discretion, to block or otherwise discontinue your access and use of DCG Site at any time and for any reason. You agree that DCG and its subsidiaries and affiliates will not be liable to you or to any third party for any such modification, suspension or discontinuance.</p>
        <div className="pic">
          <img alt="" src="/images/press_slices/houses-facades-2159262_1920(2).png" />
          <img alt="" src="/images/press_slices/houses-facades-2159262_1920(1).png" />
        </div>
        <p>DCG reserves the right, in its sole discretion, without any obligation and without any notice requirement, to change, improve or correct the information, materials and descriptions on the DCG Sites and/or to suspend and/or deny access to any DCG Site for scheduled or unscheduled maintenance, upgrades, improvements or corrections. The information and materials on the DCG Site may contain typographical errors or inaccuracies. Any dated information is published as of its date only, and DCG does not undertake any obligation or responsibility to update or amend any such information. DCG may discontinue or change any product or service described in or offered on DCG Site at any time without prior notice. DCG further reserves the right, in its sole discretion, to block or otherwise discontinue your access and use of DCG Site at any time and for any reason. You agree that DCG and its subsidiaries and affiliates will not be liable to you or to any third party for any such modification, suspension or discontinuance.</p>

      </section>
      <section className="sec-3">
        <div className="title">PRESS</div>
        <ul>
          <Link to="/press/1">
          <li>
            <img alt="" src="/images/insight_slices/1.png" />
            <h2>Announcement: DFG’s Exclusive $20 Million Polkadot Fund</h2>
            <div>
              <h5>By XXXX</h5>
              <span>Feb 09, 2021</span>
            </div>
          </li>
          </Link>
          <Link to="/press/2">
          <li>
            <img alt="" src="/images/insight_slices/1.png" />
            <h2>Announcement: DFG’s Exclusive $20 Million Polkadot Fund</h2>
            <div>
              <h5>By XXXX</h5>
              <span>Feb 09, 2021</span>
            </div>
          </li>
          </Link>
          <Link to="/press/3">
          <li>
            <img alt="" src="/images/insight_slices/1.png" />
            <h2>Announcement: DFG’s Exclusive $20 Million Polkadot Fund</h2>
            <div>
              <h5>By XXXX</h5>
              <span>Feb 09, 2021</span>
            </div>
          </li>
          </Link>
          <Link to="/press/4">
          <li>
            <img alt="" src="/images/insight_slices/1.png" />
            <h2>Announcement: DFG’s Exclusive $20 Million Polkadot Fund</h2>
            <div>
              <h5>By XXXX</h5>
              <span>Feb 09, 2021</span>
            </div>
          </li>
          </Link>
        </ul>
        <div className="arrows">
          <img src="/images/insight_slices/3558.png" alt="" />
          <img src="/images/insight_slices/3559.png" alt="" />
        </div>
      </section>
    </div>  
  )
}