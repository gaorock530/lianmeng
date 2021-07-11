import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {ThemeProvider} from './context/themeContext';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Insight from './pages/insight';
import Portfolio from './pages/portfolio';

import Blog from './pages/blog';
import Press from './pages/press';
import Agreement from './pages/agreement';


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header /> 
        <Switch>
          <Route path="/about" strict><About /></Route>
          <Route path="/insight" strict><Insight /></Route>
          <Route path="/portfolio" strict><Portfolio /></Route>
          <Route path="/agreement" strict><Agreement/></Route>
          <Route path="/blog/:id" strict><Blog/></Route>
          <Route path="/press/:id" strict><Press/></Route>

          <Route path="/"><Home /></Route> 
        </Switch>
        <Footer/>
      </Router>
    </ThemeProvider>
    

  );
}

export default App;
