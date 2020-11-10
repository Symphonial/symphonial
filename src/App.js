import './App.css'
import Home from 'pages/Home';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <Switch>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  );
}

export default App
