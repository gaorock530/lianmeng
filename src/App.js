import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';


function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 
        <Switch>
          <Route path="/about"><div>about</div></Route>
          <Route path="/users"><div>users</div></Route>
          <Route path="/"><Home /></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
