import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parseDate from '../utils/parseDate';


const baseURL = 'https://api.dfg.group/v1/article/detail?articleNo=';


async function request(lan, cate, no) {
  const url = `${baseURL}${no}&lang=${lan}_${cate}`
  console.log(url)
  return await (await fetch(url)).json()
}

export default function Club () {
  const [data, setData] = useState(null);
  const { lang, id } = useParams();
  console.log({lang, id})

  useEffect(() => {
    window.scrollTo(0, 0);

    request(lang, 'club', id).then(res => {
      setData(res.data)
      console.log(res)

    }).catch(e =>console.warn(e))
  }, [lang, id])

  return data?(
    <div className="clubpage">

      <h5>Effective Date: {parseDate(data.releaseTime)}</h5>
      <h1>{data.title}</h1>
      <h4>{parseDate(data.releaseTime)}</h4>
      <h4>By: {data.createPer}</h4>
      <div dangerouslySetInnerHTML = {{__html: data.content}}></div>
    </div>
  ):<div className="loading">loading...</div>
}