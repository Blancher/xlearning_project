import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import Education from './Education';
import Transportation from './Transportation';
import Pricing from './Pricing';

export default function App() {
  return (
    <Router>
      <header id="title">
        <h1>DCS Sustainable Housing</h1>
        <NavBar/>
      </header>
      <main>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/education">
          <Education/>
        </Route>
        <Route path="/transportation">
          <Transportation/>
        </Route>
        <Route path="/pricing">
          <Pricing/>
        </Route>
      </main>
      <h2 id='webdev'>website made by Ben Saacks</h2>
    </Router>
  );
}