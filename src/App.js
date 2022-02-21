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
import PostDetails from './Pages/PostDetails/PostDetails';
import CreatePost from './Pages/CreatePost/CreatePost';
import Update from './Pages/Update/Update';
import Blogs from "./Pages/Blogs/Blogs";


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
         <Route path="/blogs">
            <Blogs/>
         </Route>
         <Route path="/postdetails/:Id">
            <PostDetails/>
         </Route>
         <Route path="/createpost">
            <CreatePost/>
         </Route>
         <Route path="/update/:Id">
            <Update/>
         </Route>
        </Switch>
          <Footer/>
          
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
