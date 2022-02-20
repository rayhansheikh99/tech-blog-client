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
import AuthProvider from "./Contexts/AuthProvider";
import Signup from './Pages/Signup/Signup';


function App() {
  return (
    <div className="">
         <AuthProvider>
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
         <Route path="/signup">
            <Signup/>
         </Route>
        </Switch>
          <Footer/>
          
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
