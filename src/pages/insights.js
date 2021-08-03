import Insight from './insight';
import Insight2 from './insight2';



export default function Insights () {
  const width = window.innerWidth;
  return width<600? <Insight /> : <Insight2 />
}

