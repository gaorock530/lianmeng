import { useState, useRef, useContext } from 'react';
import {Link, useLocation} from 'react-router-dom';
import {ThemeContext, TOGGLE} from '../context/themeContext'

const pages = [
  {path: '/', en: 'Home', zh: '首页'},
  {path: '/portfolio', en: 'Portfolio', zh: '投资组合'},
  {path: '/insight', en: 'Insight', zh: '行业洞察'},
  {path: '/about', en: 'About', zh: '关于我们'}];

const lan = {
  'en': {
    name: 'English',
    logo: 'l-1.png'
  },
  'zh': {
    name: '中文', 
    logo: 'cn.png'
  }
}


export default function Header () {
  const [{language} , dispatch] = useContext(ThemeContext);
  // console.log({language})

  const {pathname} = useLocation();
  const miniNav = useRef(null);
  const otherLanguage = useRef(null);
  const [currentLanguage, setCurrentLanguage] = useState(language === 'zh');

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
    dispatch({ type: TOGGLE })
    setCurrentLanguage(!currentLanguage);
    localStorage.setItem('lang', !currentLanguage?'zh':'en')
    miniNav.current.classList.remove('show')  
  }

  const openLanguage = () => {
    const other = document.querySelectorAll('.other-language')
    other.forEach(el => el.classList.toggle('show'))
  }


  const renderLi = () => pages.map(i => {
    const name = pathname.toLowerCase();
    const match = (name === i.path || name === i.path + '/');
    return <li className={match?'active':null} key={i.en}><Link to={i.path}>{i[language]}</Link></li>
  })

  const RenderLanguage = () => {
    let now = 'zh', then = 'en';
    if (!currentLanguage) {
      now = 'en';
      then = 'zh';
    }
    const current = lan[now];
    const other = lan[then];

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
      <div className="header-wrapper">
        <img className="logo" src="/images/dfg.png" alt=""/>
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
      </div>
     
    </header>
  )
} 
