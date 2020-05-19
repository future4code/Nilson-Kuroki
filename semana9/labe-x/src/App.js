import React from 'react';
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage';
import HomeUsersPage from './pages/HomeUsersPage'
import HomePage from './pages/HomePage'
import ChosenTripPage from './pages/ChosenTripPage';
import CreateTripPage from './pages/CreateTripPage'
import CadasterTrip from './pages/CadasterTripPage'
import ListUsersPage from './pages/ListUsersPage'
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/admin/list-trip">
          <AdminPage/>
        </Route>
        <Route exact path="/admin/create-trip">
          <CreateTripPage/>
        </Route>
        <Route exact path="/admin/list-users">
          <ListUsersPage/>
        </Route>
        <Route exact path="/home">
          <HomeUsersPage/>
        </Route>
        <Route exact path="/home/chosen-trip">
          <ChosenTripPage/>
        </Route>
        <Route exact path="/home/chosen-trip/cadaster-trip">
          <CadasterTrip/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
