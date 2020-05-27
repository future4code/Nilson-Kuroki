import React from 'react';
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage';
import HomeUsersPage from './pages/HomeUsersPage'
import HomePage from './pages/HomePage'
import CreateTripPage from './pages/CreateTripPage'
import CadasterTripPage from './pages/CadasterTripPage'
import ListUsersPage from './pages/ListUsersPage'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'

const Mytheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff5f00'
    },
    secondary: {
      main: '#a63e00',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={Mytheme}>
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
          <Route exact path="/admin/list-users/:idTrip">
            <ListUsersPage/>
          </Route>
          <Route exact path="/home">
            <HomeUsersPage/>
          </Route>
          <Route path="/home/cadaster-trip/:idTrip/:nameTrip">
            <CadasterTripPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
