import './App.css'
import Home from 'pages/Home';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import History from './pages/History'
import Playlists from './pages/Playlists';
import MostListened from './pages/MostListened';

function App() {
  return (
    <Switch>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/history">
        <History/>
      </Route>
      <Route path="/playlists">
        <Playlists/>
      </Route>
      <Route path="/mostlistened">
        <MostListened/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  );
}

export default App
