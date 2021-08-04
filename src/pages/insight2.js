import { useEffect, useState, useContext, useRef } from 'react';
import {ThemeContext} from '../context/themeContext'
import {Link} from 'react-router-dom';
import parseDate from '../utils/parseDate';


const title = {
  t1: {
    en: 'BLOG',
    zh: '博客'
  },
  t2: {
    en: 'PRESS',
    zh: '新闻'
  },
  t3: {
    en: 'DFG CLUB',
    zh: 'DFG CLUB'
  }
}

const baseURL = 'https://api.dfg.group/v1/article/pageCmsArticle?pageNumber=';

async function request(lan, cate, page, size = 3) {
  const url = `${baseURL}${page}&pageSize=${size}&lang=${lan}_${cate}`
  // console.log(url)
  return await (await fetch(url)).json()
}



export default function Insights () {
  const [{language}] = useContext(ThemeContext);

  const [blogPage, setBlogPage] = useState({total: 1, current: 1});
  const [blogs, setBlogs] = useState([]);
  const [pressPage, setPressPage] = useState({total: 1, current: 1});
  const [press, setPress] = useState([]);
  const [clubPage, setClubPage] = useState({total: 1, current: 1});
  const [clubsNews, setClubsNews] = useState([]);
  const [clubsPast, setClubsPast] = useState([]);

  const [active, setActive] = useState('blog');

  useEffect(() => {
    const tag = window.location.hash;
    if (tag) {
      const div = document.querySelector(`${tag}`)
      const offset = div.getBoundingClientRect();
      // console.log('set active')
      setActive(tag.slice(1).toLocaleLowerCase())
      window.scrollTo(0, offset.top);
    } else {
      window.scrollTo(0, 0);
    }
  }, [])

  useEffect(() => {
    request(language, 'blog', 1, 4).then(res => {
      const {records, pages, current} = res.data;
      setBlogs(records);
      // console.log({pages, current})
      setBlogPage({total: pages, current})
    }).catch(e => console.warn(e))
    request(language, 'press', 1, 6).then(res => {
      const {records, pages, current} = res.data;
      setPress(records)
      setPressPage({total: pages, current})
    }).catch(e => console.warn(e))
    request(language, 'club', 1, 6).then(res => {
      const {records, pages, current} = res.data;
      // console.log(records)
      if (records.length > 1) setClubsNews(records.slice(0,2));
      if (records.length > 2) setClubsPast(records.slice(2));
      setClubPage({total: pages, current})
    }).catch(e => console.warn(e))
  }, [language])



  return (
    <div className="insightspage constained">
      <nav>
        <a href="#blog" onClick={() => setActive('blog')} className={active === 'blog'?'active':null}>BLOG</a>
        <a href="#press" onClick={() => setActive('press')}  className={active === 'press'?'active':null}>PRESS</a>
        <a href="#club" onClick={() => setActive('club')} className={active === 'club'?'active':null}>DFG CLUB</a>
      </nav>
      <section className="sec-1 small" id="blog">
        <h1>{title.t1[language]}</h1>
        <ul>
          {blogs.map(b => <Link to={`/blog/${language}/${b.articleNo}`} key={b.id}>
            <li>
              <p>
                <span className="date">{parseDate(b.releaseTime)}</span>
                <span className="by">By: {b.createPer}</span>
              </p>
              <h3>{b.title}</h3>
            </li>
          </Link>)}
        </ul>
        {blogs.length > 0 && <Page cate="blog" lan={language} page={blogPage} setPage={setBlogPage} setData={setBlogs}/>}
      </section>

      <section className="sec-2" id="press">
        <h1>{title.t2[language]}</h1>
        <ul>
          {press.map(p => <Link to={`/press/${language}/${p.articleNo}`} key={p.id}>
            <li>
              <img src={p.titlePic || 'images/insight_slices/1.png'} alt="" />
              <h5>{p.title}</h5>
              <p>
                <span className="by">By: {p.createPer}</span>
                <span className="date">{parseDate(p.releaseTime)}</span>
              </p>
            </li>
          </Link>)}
        </ul>
        {press.length > 0 && <Page cate="press" lan={language} page={pressPage} setPage={setPressPage} setData={setPress} />}
      </section>

      <section className="sec-3 small" id="club">
        <h1>{title.t3[language]}</h1>
        <h3>UP COMING EVENTS</h3>
        {clubsNews.map(cn => <Link to={`/club/${language}/${cn.articleNo}`} key={cn.id}>
          <li className="coming">
            <p className="date">{parseDate(cn.releaseTime)}</p>
            <div>
              <img alt="" src={cn.titlePic || 'images/insight_slices/1.png'} />
              <div className="right">
                <h3>{cn.title}</h3>
                <p>{cn.keywords}</p>
              </div>
            </div>
          </li>
        </Link>)}

        {clubsPast.length > 0 && <>
          <h3>REVIEW</h3>
          <ul>
            {clubsPast.map(cp => <Link to={`/club/${language}/${cp.articleNo}`} key={cp.id}>
              <li>
                <img alt="" src={cp.titlePic || 'images/insight_slices/1.png'} />
                <h5>{cp.title}</h5>
                <p>
                  <span className="by">By {cp.createPer}</span>
                  <span>{parseDate(cp.releaseTime)}</span>
                </p>
              </li>
            </Link>)}
          </ul>
        </>}
        {clubsPast.length > 0 && <Page cate="club" lan={language} page={clubPage} setPage={setClubPage} setData={setClubsPast} />}
      </section>
    </div>
  )
}


function Page ({page, setPage, setData, cate, lan}) {
  const loading = useRef(false)
  const per = {
    blog: 4,
    press: 6,
  }
  // console.log({cate, page, setPage, setData})
  const getNewData = (num) => {
    if (page.total <= 1) return;
    if (loading.current) return;
    if (num <= 0 || num > page.total) return;
    loading.current = true;
    request(lan, cate, num, per[cate]).then(res => {
      loading.current = false;
      const {records, pages, current} = res.data;
      setData(records);
      // console.log({pages, current})
      setPage({total: pages, current})
    }).catch(e => console.warn(e))
  }

  const gotoPrev = () => {
    const {current} = page;
    if (current === 1) return;
    getNewData(current - 1);
  }

  const gotoNext = () => {
    const {total, current} = page;
    if (current >= total) return;
    getNewData(current + 1);
  }

  const goto = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target)
    const num = parseInt(formData.get('num'))
    getNewData(num)
  
  }

  return (
    <form className="page" onSubmit={goto} >
      <div className="arrow" onClick={gotoPrev}>&lt;</div>
      <PageNumber total={page.total} current={page.current} goto={getNewData} />
      <input type="text" name="num" />
      <div className="arrow" onClick={gotoNext}>&gt;</div>
    </form>
  )
}

function PageNumber ({total, current, goto}) {
  let html = [];
  for(let i=0;i<total;i++) {
    const num = i+1;
    html.push(num)
  }
  return html.map(h => <span key={h} onClick={() => goto(h)} className={current === h?"active":null}>{h}</span>)
}