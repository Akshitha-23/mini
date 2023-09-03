import React from 'react';
import './App.css';
import logo from './logo.webp';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import AdminPage from './components/AdminPage';
import ProfilePage from './components/ProfilePage';
import RegPage from './components/RegPage';
import PerformancePage from './components/PerformancePage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import Navbar from './components/Navbar';
import Sem1Chart from "./components/Charts/Sem1Chart";
import Sem2Chart from "./components/Charts/Sem2Chart"
import Sem3Chart from "./components/Charts/Sem3Chart"
import Sem4Chart from "./components/Charts/Sem4Chart"

function App() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  return (
    <div className="image-container">
    <Router>
      
      <div className="container-fluid p-0">
     
      <nav className="navbar-container">
  <div className="navbar-date">{formattedDate}</div>
  <div className="navbar-logo"> <img src={logo} alt="Background" className="logo-image" /></div>
  <ul className="navbar-items">
    <li className="navbar-item">
      <Link to="/" className="navbar-link">
        Home
      </Link>
    </li>
    <li className="navbar-item">
      <Link to="/login" className="navbar-link">
        Student
      </Link>
    </li>
    <li className="navbar-item">
      <Link to="/admin" className="navbar-link">
        Admin
      </Link>
    </li>
    <li className="navbar-item dropdown">
      <a
        className="navbar-link"
        href="/"
        id="navbarDropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Contact Us
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <a className="dropdown-item" href="/">
            Phone: 099598 34090
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Email: web@cvr.ac.in
          </a>
        </li>
      </ul>
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
          <Route path="/navbarcharts">
            <Navbar />
          </Route>
          <Route path="/sem1-chart">
              <Navbar />
              <Sem1Chart />
          </Route>
          <Route path="/sem2-chart">
               <Navbar />
              <Sem2Chart />
          </Route>
          <Route path="/sem3-chart">
              <Navbar />
              <Sem3Chart />
          </Route>
          <Route path="/sem4-chart">
              <Navbar />
              <Sem4Chart />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
