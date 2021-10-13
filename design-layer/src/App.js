import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Contact from './components/contact';
import About from './components/about';
import Home from './components/home';
import Feature from './components/feature';

function App() {

  return (
    <div>
      <Router>

        <Route exact path="/products" component={Feature} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/" component={Home} />

      </Router>
    </div>
  );

}

export default App;
