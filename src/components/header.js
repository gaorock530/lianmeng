import { useState, useRef } from 'react';
import {Link, useLocation} from 'react-router-dom';

const pages = [
  {path: '/', name: 'Home'},
  {path: '/portfolio', name: 'Portfolio'},
  {path: '/insight', name: 'Insight'},
  {path: '/about', name: 'About'}];

const lan = {
  'en': {
    name: 'English',
    logo: 'l-1.png'
  },
  'cn': {
    name: '中文', 
    logo: 'cn.png'
  }
}


export default function Header () {
  const {pathname} = useLocation();
  const miniNav = useRef(null);
  const otherLanguage = useRef(null);
  const [currentLanguage, setCurrentLanguage] = useState(false);

  const onMiniMenuClick = () => {
    miniNav.current.classList.toggle('show');
    if (!miniNav.current.classList.contains('show')) {
      otherLanguage.current.classList.remove('show');
    }
  }

  const onUlClick = e => {
    if (e.target.tagName === 'LI' || e.target.tagName === 'A') {
      miniNav.current.classList.remove('show')
    } 
  }

  const changeLanguage = () => {
    setCurrentLanguage(!currentLanguage)
  }

  const openLanguage = () => {
    const other = document.querySelectorAll('.other-language')
    other.forEach(el => el.classList.toggle('show'))
  }


  const renderLi = () => pages.map(i => {
    const name = pathname.toLowerCase();
    const match = (name === i.path || name === i.path + '/');
    return <li className={match?'active':null} key={i.name}><Link to={i.path}>{i.name}</Link></li>
  })

  const RenderLanguage = () => {
    let now = 'cn', then = 'en';
    if (!currentLanguage) {
      now = 'en';
      then = 'cn';
    }
    console.log('change')
    const current = lan[now];
    const other = lan[then];

    console.log({current, other})

    return (
      <li>
        <div className="language" onClick={openLanguage}>
          <img className="flag" src={`/images/home_slices/${current.logo}`} alt="" />
          <span>{current.name}</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>
        </div>
        <div className="other-language" onClick={changeLanguage} ref={otherLanguage}>
          <img className="flag" src={`/images/home_slices/${other.logo}`} alt="" />
          <span>{other.name}</span>
        </div>
      </li>
    )
  }

  return (
    <header>
      <img className="logo" src="/images/home_slices/h-logo.png" alt=""/>
      <div className="mini">
        <svg xmlns="http://www.w3.org/2000/svg" width="21.361" height="21.357" viewBox="0 0 21.361 21.357">
          <path id="路径_3566" data-name="路径 3566" fill="#999" d="M20.594,21.357a.763.763,0,0,1-.549-.229l-3.89-3.89-.137.114a9.793,9.793,0,1,1,1.335-1.335l-.114.137,3.89,3.89a.763.763,0,0,1-.534,1.312ZM9.787,1.527a8.237,8.237,0,1,0,8.237,8.229A8.237,8.237,0,0,0,9.787,1.527Z" transform="translate(0 0)"/>
        </svg>
        <img alt="" src="/images/menu.svg" onClick={onMiniMenuClick} />
        <ul className="nav" ref={miniNav} onClick={onUlClick}>
          {renderLi()}
          <RenderLanguage />
        </ul>
      </div>
      <nav>
        <ul>
          {renderLi()}
          <RenderLanguage />
          {/* <div className="language">
            <img className="flag" src="/images/home_slices/l-1.png" alt="" />
            <span>English</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>
          </div> */}
          <div className="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.361" height="21.357" viewBox="0 0 21.361 21.357">
              <path id="路径_3566" data-name="路径 3566" fill="#999" d="M20.594,21.357a.763.763,0,0,1-.549-.229l-3.89-3.89-.137.114a9.793,9.793,0,1,1,1.335-1.335l-.114.137,3.89,3.89a.763.763,0,0,1-.534,1.312ZM9.787,1.527a8.237,8.237,0,1,0,8.237,8.229A8.237,8.237,0,0,0,9.787,1.527Z" transform="translate(0 0)"/>
            </svg>
            <input type="text" name="searchText" maxLength={50} />
          </div>
        </ul>
      </nav>
    </header>
  )
} 
