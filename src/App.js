

import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products'
import Services from './Components/Pages/Services'
import SignUp from './Components/Pages/SignUp'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/services" exact component={Services} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
     
    </>
  );
}

export default App;
