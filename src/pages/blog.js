import { useEffect, useState } from "react"; // useContext
import { useParams } from "react-router-dom";
import parseDate from '../utils/parseDate';
import QRCode from "react-qr-code";
// import {ThemeContext} from '../context/themeContext';


const baseURL = 'https://api.dfg.group/v1/article/detail?articleNo=';


async function request(lan, cate, no) {
  const url = `${baseURL}${no}&lang=${lan}_${cate}`
  console.log(url)
  return await (await fetch(url)).json()
}

export default function Blog () {
  // const [{language}] = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const { lang, id } = useParams();
  console.log({lang, id})

  useEffect(() => {
    if (window.innerWidth<= 600) {
      document.querySelector('header').classList.add('none')
      document.querySelector('footer').classList.add('none')
    }
    window.scrollTo(0, 0);

    request(lang, 'blog', id).then(res => {
      setData(res.data)
      console.log(window.location.href)

    }).catch(e =>console.warn(e))

    return () => {
      document.querySelector('header').classList.remove('none')
      document.querySelector('footer').classList.remove('none')
    }
  }, [lang, id])

  return data?(
    <div className="blogpage">
      <div className="phone">
        <img alt="" src="/images/logo.9ee350c8.png" />
        <span>| BLOG</span>
      </div>
      <div className="bg">
        <h5>Effective Date: {parseDate(data.releaseTime)}</h5>
        <h1>{data.title}</h1>
        <h4>{parseDate(data.releaseTime)}</h4>
        <h4>By: {data.createPer}</h4>
        <div dangerouslySetInnerHTML = {{__html: data.content}}></div>
      </div>
      <div className="share">
        <p>An investment firm 
focused on empowering 
blockchain and Web3.0.</p>
        <QRCode value={window.location.href} size={100}/>
        {/* <img src="/images/weichat/qr.png" alt="" /> */}
      </div>
    </div>
  ):<div className="loading">loading...</div>
}