import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../assets/App.css";
import MovieListingPage from '../pages/MovieListingPage';
import HomePage from '../pages/HomePage';
import MovieDetailsPage from "../pages/MovieDetailsPage";
import ShowListingPage from '../pages/ShowListingPage';
import ShowDetailsPage from '../pages/ShowDetailsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/MovieListing">
          <MovieListingPage />
        </Route>
        <Route path="/MovieDetails/:id">
          <MovieDetailsPage />
        </Route>
        <Route path="/ShowListing">
          <ShowListingPage />
        </Route>
        <Route path="/ShowDetails/:id">
          <ShowDetailsPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
