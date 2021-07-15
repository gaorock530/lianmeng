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


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header /> 
        <Switch>
          <Suspense fallback={<Loading />}>
            
            <Route path="/about" strict exact><About /></Route>
            <Route path="/insight" strict exact><Insight /></Route>
            <Route path="/portfolio" strict exact><Portfolio /></Route>
            <Route path="/agreement" strict exact><Agreement/></Route>
            <Route path="/blog/:id" strict><Blog/></Route>
            <Route path="/press/:id" strict><Press/></Route>

            <Route path="/" exact><Home /></Route> 
          </Suspense>
          
        </Switch>
        <Footer/>
      </Router>
    </ThemeProvider>
    

  );
}

export default App;
