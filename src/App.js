import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Quote from './Quote';
import Calculator from './Calculator';
import Navbar from './components/Nav';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/quote" component={Quote} />
      <Route exact path="/calculator" component={Calculator} />
    </Switch>
  </BrowserRouter>
);

export default App;
