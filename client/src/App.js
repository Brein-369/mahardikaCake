import logo from './logo.svg';
import './App.css';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/:idCake' component={Detail}></Route>
        <Route path='/' component={Home} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
