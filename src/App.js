import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { lazy, Suspense } from "react";

import {ThemeProvider} from './context/themeContext';

import Header from './components/header';
import Footer from './components/footer';
import Loading from './components/loading';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Insight = lazy(() => import('./pages/insight'));
const Portfolio = lazy(() => import('./pages/portfolio'));

const Blog = lazy(() => import('./pages/blog'));
const Press = lazy(() => import('./pages/press'));
const Agreement = lazy(() => import('./pages/agreement'));
const Policy = lazy(() => import('./pages/policy'));


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header /> 
        <Suspense fallback={<Loading />}>
          <Switch>
            
            <Route path="/" exact><Home /></Route> 
            <Route path="/about" exact><About /></Route>
            <Route path="/insight" exact><Insight /></Route>
            <Route path="/portfolio" exact><Portfolio /></Route>
            <Route path="/agreement" exact><Agreement/></Route>
            <Route path="/policy" exact><Policy/></Route>


            <Route path="/blog/:lang/:id" strict><Blog/></Route>
            <Route path="/press/:lang/:id" strict><Press/></Route>

            

            <Route path="*"><div className="notfound">NOT FOUND</div></Route>
            
            
          </Switch>
        </Suspense>
        <Footer/>
      </Router>
    </ThemeProvider>
    

  );
}

export default App;
