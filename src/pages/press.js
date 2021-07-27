import {Link, useParams} from 'react-router-dom';
import {ThemeContext} from '../context/themeContext'
import { useEffect, useContext, useState, useRef } from 'react';
import parseDate from '../utils/parseDate';


const detailBaseURL = 'https://api.dfg.group/v1/article/detail?articleNo=';


async function detailRequest(lan, cate, no) {
  const url = `${detailBaseURL}${no}&lang=${lan}_${cate}`
  console.log(url)
  return await (await fetch(url)).json()
}


const baseURL = 'https://api.dfg.group/v1/article/pageCmsArticle?pageNumber=';

async function request(lan, cate, page, size = 3) {
  const url = `${baseURL}${page}&pageSize=${size}&lang=${lan}_${cate}`
  console.log(url)
  return await (await fetch(url)).json()
}

export default function Press () {

  const [{language}] = useContext(ThemeContext);
  const { lang, id } = useParams();
  const url = encodeURI(window.location);
  const [data, setData] = useState(null);
  const [pressPage, setPressPage] = useState({pages: 1, current: 1});
  const [press, setPress] = useState([]);
  const loading = useRef(false)

  const add = () => {
    const text = data?data.title:document.title;
    if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
      window.sidebar.addPanel(text, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) { // IE Favorite
      window.external.AddFavorite(window.location.href, text);
    } else if (window.opera && window.print) { // Opera Hotlist
      this.title = text;
      return true;
    } else { // webkit - safari/chrome
      alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') !== -1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
    }
  }

  const renderPress = () => press.map(p => (
    <Link to={`/press/${language}/${p.articleNo}`} key={p.id}>
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
    detailRequest(lang, 'press', id).then(res => {
      setData(res.data)

    }).catch(e => console.warn(e))
  }, [lang, id])

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

  
  return data?(
    <div className="presspage">
      <section className="sec-1">
        <h1>{data.title}</h1>
        <div className="subtitle">
          <h5>Effective Date: {parseDate(data.releaseTime)}</h5>
          <ul>
            <li><a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${data.title}&url=${url}`}><img alt="" src="/images/press_slices/3560.png" /></a></li>
            <li><a target="_blank" rel="noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}><img alt="" src="/images/press_slices/3563.png" /></a></li>
            <li><a target="_blank" rel="noreferrer" href={`http://www.facebook.com/sharer.php?u=${url}&p[title]=${data.title}`}><img alt="" src="/images/press_slices/3564.png" /></a></li>
            <li><img alt="" src="/images/press_slices/3567.png" /></li>
            <li onClick={add}><img alt="" src="/images/press_slices/3605.png" /></li>
          </ul>
        </div>
        <div dangerouslySetInnerHTML = {{__html: data.content}}></div>

      </section>
      <section className="sec-3">
        <ul>
          {renderPress()}
        </ul>
        <Arrows />
      </section>
    </div>  
  ):<div className="loading">Loading...</div>
}