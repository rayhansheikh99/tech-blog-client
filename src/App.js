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
import MyBlog from "./Pages/MyBlog/MyBlog";
import Tech from "./Pages/Tech/Tech";
import Movies from "./Pages/Movies/Movies";
import Sports from "./Pages/Sports/Sports";
import Music from "./Pages/Music/Music";


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
         <Route path="/myblog">
            <MyBlog/>
         </Route>
         <Route path="/tech">
            <Tech/>
         </Route>
         <Route path="/movies">
            <Movies/>
         </Route>
         <Route path="/sports">
            <Sports/>
         </Route>
         <Route path="/music">
            <Music/>
         </Route>
         <Route path="/postdetails/:Id">
            <PostDetails/>
         </Route>
         <Route path="/createpost">
            <CreatePost/>
         </Route>
         <Route path="/updateposts/:Id">
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
