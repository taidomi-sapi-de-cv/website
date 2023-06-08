import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// import logo from '../logo.svg';
import './App.css';

// import {Counter} from './Counter';
// import {Ping} from './Ping';
import Login from "./Login/Login.lazy";
import Profile from "./Profile/Profile.lazy";
import LandingPage from "../pages/LandingPage/LandingPage.lazy";
import DashboardPage from "../pages/DashboardPage/DashboardPage.lazy";
import Error404 from "./Error404/Error404.lazy";
import Dashboard from "./Dashboard/Dashboard.lazy";
import Wallet from "./Wallet/Wallet.lazy";
import routes from "../config/routes";
import RegisterUser from "./RegisterUser/RegisterUser.lazy";

function App() {
    const isLogged = true;
    return (
        <Router>
            <Routes>
                <Route index element={<LandingPage/>}/>
                <Route path={routes.authentication}>
                    <Route index element={<Login/>}/>
                    <Route path={routes.login} element={<Login/>}/>
                    <Route path={routes.register} element={<RegisterUser/>}/>
                </Route>
                <Route path={routes.dashboard} element={isLogged ? <DashboardPage/> : <Login/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path={routes.me} element={<Profile/>}/>
                    <Route path={routes.wallet} element={<Wallet/>}/>
                    <Route path="*" element={<Error404/>}/>
                </Route>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </Router>
    );
    /*return (
      <div className="App">
          <Landing/>
        <Counter />
        <Ping />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Ping />
            <Button variant="contained">Hola</Button>
          <p>
            Edit <code>src/App.tsx</code> and save to reload. MAS2
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );*/
}

export default App;
