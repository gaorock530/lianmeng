import {Link} from 'react-router-dom';
import {ThemeContext} from '../context/themeContext'
import { useEffect, useContext, useState, useRef } from 'react';


const baseURL = 'https://api.dfg.group/v1/article/pageCmsArticle?pageNumber=';

async function request(lan, cate, page, size = 3) {
  const url = `${baseURL}${page}&pageSize=${size}&lang=${lan}_${cate}`
  console.log(url)
  return await (await fetch(url)).json()
}

function parseDate (timestamp) {
  const date = new Date(timestamp);
  const string = date.toDateString().split(' ');
  const year = string[3];
  const day = string[2];
  const month = string[1];
  return `${month} ${day}, ${year}`
}

export default function Press () {

  const [{language}] = useContext(ThemeContext);
  const title = encodeURI("DFG’s Exclusive $20 Million Polkadot Fund");
  const url = encodeURI(window.location);
  const [pressPage, setPressPage] = useState({pages: 1, current: 1});
  const [press, setPress] = useState([]);
  const loading = useRef(false)

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

  const renderPress = () => press.map(p => (
    <Link to={`/press/${p.id}`} key={p.id}>
      <li>
        <img alt="" src={p.titlePic || '/images/insight_slices/1.png'} />
        <h2>{p.title}</h2>
        <div>
          <h5>By {p.createPer}</h5>
          <span>{parseDate(p.releaseTime)}</span>
        </div>
      </li>
    </Link>
  ))
  

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    request(language, 'press', 1, 4).then(res => {
      const {records, pages, current} = res.data;
      setPress(records)
      setPressPage({pages, current})
    }).catch(e => console.warn(e))
  }, [language])



  const Arrows = () => {

    const {pages, current} = pressPage;

    const leftActive = current > 1;
    const rightActive = current < pages;

    const onClickPrev = () => {
      if (!leftActive || loading.current) return;
      loading.current = true;
      request(language, 'press', current-1, 4).then(res => {
        const {records, pages, current} = res.data;
        loading.current = false
        setPress(records);
        setPressPage({pages, current})

      }).catch(e => console.warn(e))
    }

    const onClickNext = () => {
      if (!rightActive || loading.current) return;
      loading.current = true;

      request(language, 'press', current+1, 4).then(res => {
        const {records, pages, current} = res.data;
        loading.current = false
        setPress(records);
        setPressPage({pages, current})

      }).catch(e => console.warn(e))
    }


    return (
      <div className="arrows">
        <svg onClick={onClickPrev} xmlns="http://www.w3.org/2000/svg" width="31.824" height="54.116" viewBox="0 0 31.824 54.116">
          <path fill={leftActive?"#1e4aff":"#ccc"} d="M478.057,389.257l-22.265-22.264a4.831,4.831,0,0,1,0-6.766l22.265-22.264c4.366-4.367,11.132,2.4,6.766,6.766l-22.264,22.264v-6.766l22.265,22.264C489.19,386.858,482.424,393.623,478.057,389.257Z" transform="translate(-454.41 -336.552)"/>
        </svg>
        <svg onClick={onClickNext}  xmlns="http://www.w3.org/2000/svg" width="31.824" height="54.116" viewBox="0 0 31.824 54.116">
          <path fill={rightActive?"#1e4aff":"#ccc"} d="M462.587,389.257l22.265-22.264a4.831,4.831,0,0,0,0-6.766l-22.265-22.264c-4.366-4.367-11.132,2.4-6.766,6.766l22.264,22.264v-6.766l-22.265,22.264C451.455,386.858,458.22,393.623,462.587,389.257Z" transform="translate(-454.41 -336.552)"/>
        </svg>
      </div>
    )
  }

  
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
        <ul>
          {renderPress()}
        </ul>
        <Arrows />
      </section>
    </div>  
  )
}