import React, {useState} from 'react';
import './App.css';
import Home from './pages/Home'
import Movies from './pages/Movies'
import TvShows from './pages/TvShows'
import Header from './components/Header'
import {Switch, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux'


function App(props) {
  
  return (
    <div className="App">
    
    <Header/>

    {/* <Movies /> */}
    
    <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/movies">
     
            <Movies/>
           
      </Route>

      <Route path="/tvshows">
        <TvShows />
      </Route>

    </Switch>
    </div>
  );
}


export default App;
