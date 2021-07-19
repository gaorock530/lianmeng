import { useEffect, useState, useContext, useRef } from 'react';
import {ThemeContext} from '../context/themeContext'
import {Link} from 'react-router-dom';

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

export default function Insight () {
  const [{language}] = useContext(ThemeContext);

  const loading = useRef(false)

  const [blogPage, setBlogPage] = useState({pages: 1, current: 1});
  const [blogs, setBlogs] = useState([]);
  const [pressPage, setPressPage] = useState({pages: 1, current: 1});
  const [press, setPress] = useState([]);
  const [clubPage, setClubPage] = useState({pages: 1, current: 1});
  const [clubs, setClubs] = useState([]);


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
  
  useEffect(() => {
    request(language, 'club', 1).then(res => {
      const {records, pages, current} = res.data;
      console.log(records)
      setBlogs(records);
      setBlogPage({pages, current})
    }).catch(e => console.warn(e))
    request(language, 'press', 1, 4).then(res => {
      const {records, pages, current} = res.data;
      setPress(records)
      setPressPage({pages, current})
    }).catch(e => console.warn(e))
    request(language, 'blog', 1).then(res => {
      const {records, pages, current} = res.data;
      setClubs(records)
      setClubPage({pages, current})
    }).catch(e => console.warn(e))
  }, [language])

  const renderBlog = () => blogs.map(b => (
    <Link to={`/blog/${b.id}`} key={b.id}>
      <li>
        <h4>{parseDate(b.releaseTime)}</h4>
        <h1>{b.title}</h1>
        <h4 className="by">By: {b.createPer}</h4>
      </li>
    </Link>
  ))

  const renderPress = () => press.map(p => (
    <Link to={`/blog/${p.id}`} key={p.id}>
      <li>
        <img alt="" src={p.titlePic || 'images/insight_slices/1.png'} />
        <h2>{p.title}</h2>
        <div>
          <h5>By {p.createPer}</h5>
          <span>{parseDate(p.releaseTime)}</span>
        </div>
      </li>
    </Link>
  ))

  const renderClub = () => clubs.map((b, idx) => (
    <li key={b.id}>
      <img alt="" src={b.titlePic || 'images/insight_slices/1.png'} />
      <div className="phone">
        <h1>0{idx + 1}</h1>
        <h3>{parseDate(b.releaseTime)}</h3>
        <p>{b.title}</p>
      </div>
    </li>

  ))

  const Arrows = ({cate}) => {
    const getPage = () => {
      switch (cate) {
        case 'blog':
          return blogPage
        case 'press':
          return pressPage
        case 'club':
          return clubPage
        default:
          return blogPage
      }
    };

    const {pages, current} = getPage();

    const leftActive = current > 1;
    const rightActive = current < pages;

    const onClickPrev = () => {
      if (!leftActive || loading.current) return;
      loading.current = true;
      request(language, cate, current-1, cate === 'press'?4:null).then(res => {
        const {records, pages, current} = res.data;
        loading.current = false
        switch (cate) {
          case 'blog':
            setBlogs(records);
            setBlogPage({pages, current})
            return blogPage
          case 'press':
            setPress(records);
            setPressPage({pages, current})
            return pressPage
          case 'club':
            setClubs(records);
            setClubPage({pages, current})
            return clubPage
          default:
            setBlogs(records);
            setBlogPage({pages, current})
            return blogPage
        }

      }).catch(e => console.warn(e))
    }

    const onClickNext = () => {
      if (!rightActive || loading.current) return;
      loading.current = true;

      request(language, cate, current+1, cate === 'press'?4:null).then(res => {
        const {records, pages, current} = res.data;
        loading.current = false
        switch (cate) {
          case 'blog':
            setBlogs(records);
            setBlogPage({pages, current})
            return 
          case 'press':
            setPress(records);
            setPressPage({pages, current})
            return
          case 'club':
            setClubs(records);
            setClubPage({pages, current})
            return 
          default:
            setBlogs(records);
            setBlogPage({pages, current})
            return
        }

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
        <div className="title" id="blog">BLOG</div>
        <ul>
          {renderBlog()}          
        </ul>
        <Arrows cate="blog" />
      </section>
      <section className="sec-3">
        <div className="title" id="press">PRESS</div>
        <ul>
          {renderPress()}
        </ul>
        <Arrows cate="press" />
      </section>
      <section className="sec-4"> 
        <div className="title" id="club">DFG CLUB</div>
        <ul>
          {renderClub()}
        </ul>
        <Arrows cate="club" />
      </section>
    </div>
  )
}