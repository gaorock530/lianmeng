import {Link, useLocation} from 'react-router-dom';

const pages = [
  {path: '/', name: 'Home'},
  {path: '/portfolio', name: 'Portfolio'},
  {path: '/insight', name: 'Insight'},
  {path: '/about', name: 'About'}]


export default function Header () {
  const {pathname} = useLocation();

  const renderLi = () => pages.map(i => {
    const name = pathname.toLowerCase();
    const match = (name === i.path || name === i.path + '/');
    return <li className={match?'active':null} key={i.name}><Link to={i.path}>{i.name}</Link></li>
  })

  return (
    <header>
      <img className="logo" src="/images/home_slices/h-logo.png" alt=""/>
      <nav>
        <ul>
          {renderLi()}
          <div className="language">
            <img className="flag" src="/images/home_slices/l-1.png" alt="" />
            <span>English</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>
          </div>
          <div className="search">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#cccccc"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <input type="text" name="searchText" maxLength={50} />
          </div>
        </ul>
      </nav>
    </header>
  )
} 
