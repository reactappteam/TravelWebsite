

import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './Components/Pages/Home';
import Tour from './Components/Pages/Tour'
import Tourism from './Components/Pages/Tourism'
import SignUp from './Components/Pages/SignUp'
import Footer from './Components/Footer/Footer'
import ScrollToTop  from './Components/ScrollToTop'
function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tour" exact component={Tour} />
        <Route path="/tourism" exact component={Tourism} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
     
    </>
  );
}

export default App;
