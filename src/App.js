import Home from "./Pages/Home/Home";
import React from 'react';
import 'flowbite';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./Pages/Footer/Footer";
import Login from './Pages/Login/Login';
import Navbar from "./Pages/Header/Navbar";


function App() {
  return (
    <div className="">
        <Router>
          <Navbar/>
       <Switch>
         <Route exact path="/">
            <Home/>
         </Route>
         <Route path="/home">
            <Home/>
         </Route>
         <Route path="/login">
            <Login/>
         </Route>
        </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
