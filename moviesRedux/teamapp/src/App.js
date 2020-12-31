import './App.css';
import Home from './pages/Home'
import Movies from './pages/Movies'
import TvShows from './pages/TvShows'
import Header from './components/Header'
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">

    <Header />

    {/* <Movies /> */}

    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/movies">
        <Movies />
      </Route>

      <Route path="/tvshows">
        <TvShows />
      </Route>

    </Switch>
    </div>
  );
}

export default App;
