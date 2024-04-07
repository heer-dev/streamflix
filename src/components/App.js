import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import MovieListingPage from '../pages/MovieListingPage';
import MovieDetailsPage from "../pages/MovieDetailsPage";
import ShowListingPage from '../pages/ShowListingPage';
import ShowDetailsPage from '../pages/ShowDetailsPage';
import SearchResults from './SearchResults';
import RegistrationPage from '../pages/RegistrationPage';
import Dashboard from './Dashboard';
import LoginPage from '../pages/LoginPage';
import PrivateRoute from './PrivateRoute'; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/MovieListing" component={MovieListingPage} />
        <Route path="/MovieDetails/:id" component={MovieDetailsPage} />
        <Route path="/ShowListing" component={ShowListingPage} />
        <Route path="/search" component={SearchResults} />
        <Route path="/ShowDetails/:id" component={ShowDetailsPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/Login" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
