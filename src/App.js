import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import AdminPage from './components/AdminPage';
import ProfilePage from './components/ProfilePage';
import RegPage from './components/RegPage';
import PerformancePage from './components/PerformancePage';
import './App.css';
import ForgotPasswordPage from './components/ForgotPasswordPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/admin" activeClassName="active" exact>
                Login as Admin
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName="active">
                Login as Student
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/forgot-password">
            <ForgotPasswordPage />
          </Route>
          <Route path="/profile-page">
            <ProfilePage />
          </Route>
          <Route path="/registration-page">
            <RegPage />
          </Route>
          <Route path="/performance-page">
            <PerformancePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
