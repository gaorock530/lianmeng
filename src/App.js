import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';

import Agreement from './pages/agreement';


function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 
        <Switch>
          <Route path="/about" strict><About /></Route>
          <Route path="/users" strict><div>users</div></Route>
          <Route path="/agreement" strict><Agreement/></Route>
          <Route path="/"><Home /></Route> 
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
